import Link from "next/link";

function NotFound() {
  return (
    <section className="flex bg-slate-950 min-h-screen items-center justify-center py-8">
      <div className="relative w-full max-w-300 overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-slate-950 via-slate-950 to-slate-900/90 p-8 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.9)] md:p-12">
        <div className="pointer-events-none absolute -top-24 right-8 h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.12),transparent_45%)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200/80">
              Lost in the prep lab
            </p>
            <h1
              className="mt-6 text-4xl font-semibold text-white md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              This route is missing, but your momentum is not.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              The page you asked for is not in the interview preparation flow.
              Head back to the roadmap, or jump into a targeted drill to keep
              the streak alive.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_-18px_rgba(16,185,129,0.9)] transition hover:-translate-y-px hover:bg-emerald-300"
                href="/javascript"
              >
                Back to dashboard
              </Link>
              <Link
                className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
                href="/javascript"
              >
                Browse question sets
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  label: "Focus mode",
                  text: "Sharpen one concept in 20-minute sprints.",
                },
                {
                  label: "Mock interview",
                  text: "Warm up with timed prompts and review notes.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-emerald-200/70">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-transparent p-6">
            <div className="absolute right-6 top-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-white/50">
              404
              <span className="h-px w-10 bg-white/20" />
            </div>
            <div className="mt-12">
              <p
                className="text-7xl font-semibold text-white md:text-8xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                4 0 4
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.4em] text-emerald-200/70">
                Route not found
              </p>
            </div>

            <div className="mt-10 space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Current stage</span>
                <span className="text-white">Navigation</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Priority</span>
                <span className="text-white">Re-align</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Next step</span>
                <span className="text-white">Choose a drill</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
