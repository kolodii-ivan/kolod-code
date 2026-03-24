export default function Footer() {
  return (
    <footer className="relative bg-charcoal py-20 px-6 overflow-hidden">
      {/* Dot grid background matching hero */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E5E5E5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo echo */}
        <div className="font-mono text-2xl font-bold mb-6">
          <span className="text-light-text">Kolod</span>
          <span className="bg-gradient-to-r from-clay to-terminal-green bg-clip-text text-transparent">
            {" "}Code
          </span>
        </div>

        <p className="font-sans text-sm text-light-text/40 leading-relaxed max-w-md mx-auto">
          A portfolio of web applications built entirely with{" "}
          <a
            href="https://claude.ai/code"
            target="_blank"
            rel="noopener noreferrer"
            className="text-clay/80 hover:text-clay transition-colors"
          >
            Claude Code
          </a>
          , Anthropic&apos;s AI-powered coding assistant.
        </p>

        <div className="mt-8 flex items-center justify-center gap-6">
          <a
            href="https://ikolodiy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-light-text/30 hover:text-light-text/60 transition-colors"
          >
            ikolodiy.com
          </a>
          <span className="w-px h-3 bg-light-text/10" />
          <a
            href="https://github.com/kolodii-ivan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-light-text/30 hover:text-light-text/60 transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-light-text/[0.06]">
          <p className="font-mono text-[11px] text-light-text/20 tracking-wider">
            Built with Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}
