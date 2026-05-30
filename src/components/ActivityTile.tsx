const activityCells = Array.from({ length: 60 }, (_, index) => {
  const seed = (index * 7 + 13) % 10;
  if (seed < 2) return 0.15;
  if (seed < 4) return 0.35;
  if (seed < 7) return 0.55;
  return 0.85;
});

export default function ActivityTile() {
  return (
    <div className="relative z-10 flex h-full flex-col gap-6">
      <header>
        <p className="text-xs uppercase tracking-[0.4em] text-white/55">
          Activity
        </p>
        <h2 className="mt-2 text-xl font-semibold text-white">
          Learning pulse
        </h2>
        <p className="mt-2 text-sm text-white/60">
          A lightweight snapshot of your streak intensity this month.
        </p>
      </header>

      <section className="grid flex-1 grid-cols-12 gap-2">
        {activityCells.map((opacity, index) => (
          <span
            key={`cell-${index}`}
            className="h-4 w-full rounded-[6px] bg-cyan-300/80"
            style={{ opacity }}
            aria-hidden="true"
          />
        ))}
      </section>

      <footer className="flex items-center justify-between text-xs text-white/60">
        <span>Less</span>
        <div className="flex items-center gap-1">
          {[0.15, 0.35, 0.55, 0.85].map((opacity) => (
            <span
              key={`legend-${opacity}`}
              className="h-3 w-3 rounded-[4px] bg-cyan-300/80"
              style={{ opacity }}
            />
          ))}
        </div>
        <span>More</span>
      </footer>
    </div>
  );
}
