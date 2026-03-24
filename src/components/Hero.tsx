export default function Hero() {
  return (
    <header className="relative bg-charcoal min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Animated dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #E5E5E5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle radial glow behind title */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terminal-green/5 rounded-full blur-[120px]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Terminal window frame */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-light-text/10 bg-light-text/5">
          <span className="w-2 h-2 rounded-full bg-terminal-green/80" />
          <span className="font-mono text-xs text-light-text/40 tracking-wider uppercase">
            Portfolio
          </span>
        </div>

        <h1 className="font-mono text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
          <span className="text-light-text">Kolod</span>
          <span className="bg-gradient-to-r from-clay to-terminal-green bg-clip-text text-transparent">
            {" "}Code
          </span>
          <span className="cursor-blink text-terminal-green">_</span>
        </h1>

        <p className="mt-8 font-sans text-lg md:text-xl text-light-text/50 max-w-lg mx-auto leading-relaxed">
          Web applications crafted with{" "}
          <span className="text-light-text/80 font-medium">Claude Code</span>
        </p>

        {/* Terminal prompt CTA */}
        <div className="mt-12 inline-block">
          <a
            href="#projects"
            className="group flex items-center gap-3 font-mono text-sm text-light-text/60 border border-light-text/10 bg-light-text/[0.03] px-6 py-4 rounded-lg hover:border-clay/40 hover:text-clay transition-colors duration-200 cursor-pointer"
          >
            <span className="text-terminal-green">$</span>
            <span>explore</span>
            <span className="text-light-text/20">--projects</span>
            <svg
              className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Stats line */}
        <div className="mt-16 flex items-center justify-center gap-8 md:gap-12">
          <div className="text-center">
            <div className="font-mono text-2xl md:text-3xl font-bold text-light-text">6</div>
            <div className="font-sans text-xs text-light-text/30 mt-1 uppercase tracking-wider">Projects</div>
          </div>
          <div className="w-px h-8 bg-light-text/10" />
          <div className="text-center">
            <div className="font-mono text-2xl md:text-3xl font-bold text-light-text">4</div>
            <div className="font-sans text-xs text-light-text/30 mt-1 uppercase tracking-wider">Tech Stacks</div>
          </div>
          <div className="w-px h-8 bg-light-text/10" />
          <div className="text-center">
            <div className="font-mono text-2xl md:text-3xl font-bold text-terminal-green">100%</div>
            <div className="font-sans text-xs text-light-text/30 mt-1 uppercase tracking-wider">AI-Built</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-light-text/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </header>
  );
}
