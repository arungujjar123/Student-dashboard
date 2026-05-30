"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { MotionProps, Variants } from "framer-motion";
import type { Course } from "@/lib/types";
import ActivityTile from "@/components/ActivityTile";
import CourseCard from "@/components/CourseCard";
import HeroTile from "@/components/HeroTile";
import Sidebar from "@/components/sidebar";

type DashboardProps = {
  courses: Course[];
  userName: string;
  errorMessage?: string | null;
};

export default function Dashboard({
  courses,
  userName,
  errorMessage,
}: DashboardProps) {
  const reduceMotion = useReducedMotion();

  const reducedVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  } satisfies Variants;

  const containerVariants = (reduceMotion
    ? reducedVariants
    : {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.12, delayChildren: 0.1 },
        },
      }) satisfies Variants;

  const tileVariants = (reduceMotion
    ? reducedVariants
    : {
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring" as const,
            stiffness: 260,
            damping: 24,
          },
        },
      }) satisfies Variants;

  const hoverMotion: MotionProps = reduceMotion
    ? {}
    : {
        whileHover: { scale: 1.02 },
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      };

  const tileBase =
    "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]";

  return (
    <div className="min-h-screen text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1400px]">
        <Sidebar />

        <main className="flex-1 px-5 pb-24 pt-8 md:px-8 md:pb-10">
          <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                Student Dashboard
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Next-gen learning overview
              </h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
              Syncing live from Supabase
            </div>
          </header>

          <motion.section
            className="grid auto-rows-[180px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.article
              className={`${tileBase} col-span-1 row-span-2 p-8 md:col-span-2 xl:col-span-7`}
              variants={tileVariants}
              {...hoverMotion}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 via-transparent to-fuchsia-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_120%_at_0%_0%,rgba(255,255,255,0.08),transparent_55%)] opacity-60"
              />
              <HeroTile userName={userName} streakDays={12} focusMinutes={78} />
            </motion.article>

            <motion.article
              className={`${tileBase} col-span-1 row-span-2 p-6 md:col-span-2 xl:col-span-5`}
              variants={tileVariants}
              {...hoverMotion}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <ActivityTile />
            </motion.article>

            {courses.map((course) => (
              <motion.article
                key={course.id}
                className={`${tileBase} col-span-1 p-6 md:col-span-1 xl:col-span-4`}
                variants={tileVariants}
                {...hoverMotion}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <CourseCard course={course} />
              </motion.article>
            ))}

            {errorMessage && (
              <motion.article
                className={`${tileBase} col-span-1 flex flex-col justify-between p-6 md:col-span-2 xl:col-span-4`}
                variants={tileVariants}
                {...hoverMotion}
              >
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Connection issue
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    Supabase fetch failed
                  </h3>
                  <p className="mt-2 text-sm text-white/60">{errorMessage}</p>
                </div>
                <p className="mt-6 text-xs text-white/50">
                  Check env vars or Supabase policy rules.
                </p>
              </motion.article>
            )}

            {!errorMessage && courses.length === 0 && (
              <motion.article
                className={`${tileBase} col-span-1 flex flex-col justify-between p-6 md:col-span-2 xl:col-span-4`}
                variants={tileVariants}
                {...hoverMotion}
              >
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    No courses yet
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    Add your first course
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Insert 3-4 rows in Supabase to populate this grid.
                  </p>
                </div>
                <p className="mt-6 text-xs text-white/50">
                  The grid auto-updates on refresh.
                </p>
              </motion.article>
            )}
          </motion.section>
        </main>
      </div>
    </div>
  );
}
