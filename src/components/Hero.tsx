export default function Hero() {
  return (
    <header className="bg-charcoal min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-mono text-5xl md:text-7xl font-bold text-light-text tracking-tight">
        Kolod Code
        <span className="cursor-blink text-terminal-green">_</span>
      </h1>
      <p className="mt-6 font-sans text-lg md:text-xl text-light-text/70 max-w-xl">
        <span className="font-mono text-clay">&gt; </span>
        Web apps crafted with Claude Code
      </p>
      <a
        href="#projects"
        className="mt-10 inline-block font-mono text-sm text-clay border border-clay/40 px-6 py-3 rounded hover:bg-clay/10 transition-colors"
      >
        &gt; view_projects
      </a>
    </header>
  );
}
