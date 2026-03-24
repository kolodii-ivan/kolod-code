export default function Footer() {
  return (
    <footer className="bg-charcoal py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-mono text-xl font-semibold text-light-text mb-4">
          About
        </h2>
        <p className="font-sans text-sm text-light-text/70 leading-relaxed max-w-lg mx-auto">
          Kolod Code is a portfolio of web applications built entirely with{" "}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay/80 transition-colors"
          >
            Claude Code
          </a>
          , Anthropic&apos;s AI-powered coding assistant. Created by{" "}
          <a
            href="https://ikolodiy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay hover:text-clay/80 transition-colors"
          >
            Ivan Kolodii
          </a>
          .
        </p>
        <div className="mt-8 pt-8 border-t border-light-text/10">
          <p className="font-mono text-xs text-light-text/40">
            Built with Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}
