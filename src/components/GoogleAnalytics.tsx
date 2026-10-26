import { GoogleAnalytics as GA } from "@next/third-parties/google";

export default function GoogleAnalytics() {
  // NEXT_PUBLIC_DEPLOY_ENV is "production" only in the release build (ci.yml), so local and PR builds load no GA.
  if (process.env.NEXT_PUBLIC_DEPLOY_ENV !== "production") {
    return null;
  }

  return <GA gaId="G-RXZ78TX15C" />;
}
