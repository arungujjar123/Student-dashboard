"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
	Atom,
	BookOpen,
	Brain,
	Code2,
	Compass,
	GraduationCap,
	Layers,
	PenTool,
	Rocket,
	Sparkles,
} from "lucide-react";
import type { Course } from "@/lib/types";

const iconMap = {
	atom: Atom,
	book: BookOpen,
	"book-open": BookOpen,
	brain: Brain,
	code: Code2,
	"code-2": Code2,
	compass: Compass,
	graduation: GraduationCap,
	"graduation-cap": GraduationCap,
	layers: Layers,
	pencil: PenTool,
	rocket: Rocket,
	sparkles: Sparkles,
} as const;

type CourseCardProps = {
	course: Course;
};

function resolveIcon(iconName: string | null) {
	if (!iconName) {
		return BookOpen;
	}

	const key = iconName
		.toLowerCase()
		.replace(/\s+/g, "-")
		.replace(/_/g, "-");
	return iconMap[key as keyof typeof iconMap] ?? BookOpen;
}

export default function CourseCard({ course }: CourseCardProps) {
	const reduceMotion = useReducedMotion();
	const progress = Math.max(0, Math.min(100, course.progress));
	const Icon = resolveIcon(course.icon_name);

	return (
		<div className="relative z-10 flex h-full flex-col gap-5">
			<span
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(120%_120%_at_10%_10%,rgba(90,160,255,0.18),transparent_60%),radial-gradient(140%_140%_at_90%_90%,rgba(255,120,190,0.18),transparent_55%)] opacity-70"
			/>
			<span
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%,transparent)] opacity-60"
				style={{ backgroundSize: "6px 6px" }}
			/>

			<header className="relative z-10 flex items-start justify-between">
				<div className="flex items-center gap-3">
					<span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
						<Icon className="h-5 w-5 text-white" aria-hidden="true" />
					</span>
					<div>
						<p className="text-xs uppercase tracking-[0.2em] text-white/50">
							Active course
						</p>
						<p className="text-sm text-white/70">Self-paced</p>
					</div>
				</div>
				<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
					{progress}%
				</span>
			</header>

			<div className="relative z-10 flex flex-1 flex-col justify-between gap-4">
				<h3 className="text-lg font-semibold leading-tight text-white">
					{course.title}
				</h3>

				<div className="mt-auto">
					<div className="flex items-center justify-between text-xs text-white/60">
						<span>Progress</span>
						<span>{progress}%</span>
					</div>
					<div
						className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/10"
						role="progressbar"
						aria-valuenow={progress}
						aria-valuemin={0}
						aria-valuemax={100}
					>
						<motion.div
							className="h-full w-full origin-left rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-400"
							initial={{ scaleX: 0 }}
							animate={{ scaleX: progress / 100 }}
							transition={
								reduceMotion
									? { duration: 0 }
									: { type: "spring", stiffness: 160, damping: 24 }
							}
							style={{ transformOrigin: "left" }}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
