export default function HelloHero() {
  return (
    <section className="text-center py-16 sm:py-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-3 py-1 text-xs text-blue-700 shadow-sm backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
        Fresh app ready to customize
      </div>
      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Hello, World!
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600">
        You now have a clean, modern starting point. Edit text, add sections, and
        make it yours — no clutter, just a beautiful foundation.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3" id="get-started">
        <a
          href="#features"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
        >
          Explore features
        </a>
        <a
          href="#footer"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
        >
          Say hi
        </a>
      </div>
    </section>
  );
}
