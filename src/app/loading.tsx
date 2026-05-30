export default function Loading() {
  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px]">
        <aside className="hidden min-h-screen w-20 flex-col border-r border-white/10 bg-black/40 px-4 py-6 md:flex lg:w-64">
          <div className="h-12 w-12 rounded-2xl bg-white/10" />
          <div className="mt-10 space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={`nav-skeleton-${index}`}
                className="h-11 w-full rounded-xl bg-white/5"
              />
            ))}
          </div>
        </aside>

        <main className="flex-1 px-5 pb-24 pt-8 md:px-8 md:pb-10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-3">
              <div className="h-4 w-40 rounded-full bg-white/10" />
              <div className="h-8 w-64 rounded-full bg-white/10" />
            </div>
            <div className="h-8 w-44 rounded-full bg-white/10" />
          </div>

          <section className="grid auto-rows-[180px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12" aria-busy="true">
            <div className="col-span-1 row-span-2 rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="h-full w-full animate-pulse rounded-2xl bg-white/10" />
            </div>
            <div className="col-span-1 row-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-full w-full animate-pulse rounded-2xl bg-white/10" />
            </div>
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={`tile-skeleton-${index}`}
                className="col-span-1 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="h-full w-full animate-pulse rounded-2xl bg-white/10" />
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
