# Kolod Code

Portfolio of web apps built with Claude Code: https://code.ikolodiy.com

A Next.js static export (`output: "export"`) served by the `kolod-code` Cloudflare Worker
(static assets only, no server code; see `wrangler.jsonc`).

## Local development

```bash
npm ci
npm run dev          # Next dev server on http://localhost:3000
npm run lint
npm run typecheck
npm run build        # static export into ./out
npm run cf:check     # validate the Worker config and bundle (nothing uploaded)
npm run cf:preview   # build + wrangler dev on http://localhost:8787
npm run test:e2e     # Playwright (desktop + mobile) against a local wrangler dev of the export; E2E_BASE_URL=<url> targets a deployed host, E2E_SCREENSHOTS=<dir> saves full-page screenshots
```

## Releases

`.github/workflows/ci.yml` runs the checks on every pull request. A push to `main` builds the export,
stamps `out/release.txt` with the commit SHA and uploads a Worker version that receives no traffic
(`wrangler versions upload`) in parallel with the checks; once every check for the same SHA is green the
deploy job promotes exactly that version (`wrangler versions deploy`), applies routes
(`wrangler triggers deploy`), smoke-tests it and rolls back automatically on failure.

The release jobs are armed by the repository variable `DEPLOY_ENABLED=true` and need, in the
`production` environment, the secrets `CLOUDFLARE_API_TOKEN` (Workers Scripts: Edit, plus Zone: Workers
Routes: Edit and DNS: Edit for the custom domain) and `CLOUDFLARE_ACCOUNT_ID`. The repository variable
`SMOKE_URL` points the smoke test at the live site (the workers.dev URL first, then
https://code.ikolodiy.com). A manual run with `simulate_smoke_failure` rehearses the automatic rollback.

Rollback by hand: `npx wrangler deployments list`, then `npx wrangler versions deploy <version-id>@100%`.
