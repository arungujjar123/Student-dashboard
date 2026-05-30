"use client";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-white">
      <section className="w-full max-w-lg rounded-2xl border border-white/10 bg-black/40 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">
          Something went wrong
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-white">
          Dashboard failed to load
        </h1>
        <p className="mt-3 text-sm text-white/60">
          {error.message || "Unexpected error. Please try again."}
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white transition-colors hover:bg-white/20"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
