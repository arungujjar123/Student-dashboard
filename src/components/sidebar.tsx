"use client";

import { motion } from "framer-motion";
import {
	BookOpen,
	CalendarClock,
	LayoutGrid,
	PanelLeft,
	Settings,
	Sparkles,
	Users,
} from "lucide-react";
import { useState } from "react";

const navItems = [
	{ id: "dashboard", label: "Dashboard", icon: LayoutGrid },
	{ id: "courses", label: "Courses", icon: BookOpen },
	{ id: "schedule", label: "Schedule", icon: CalendarClock },
	{ id: "community", label: "Community", icon: Users },
	{ id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
	const [activeId, setActiveId] = useState("dashboard");
	const [collapsed, setCollapsed] = useState(false);

	const desktopWidth = collapsed ? "lg:w-20" : "lg:w-64";

	return (
		<>
			<aside
				className={`group hidden min-h-screen flex-col border-r border-white/10 bg-black/40 px-4 py-6 backdrop-blur md:flex md:w-20 ${desktopWidth}`}
				data-collapsed={collapsed}
			>
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30">
							<Sparkles className="h-5 w-5 text-white" aria-hidden="true" />
						</span>
						<div className="hidden lg:block group-data-[collapsed=true]:hidden">
							<p className="text-sm font-semibold text-white">NeoLearn</p>
							<p className="text-xs text-white/50">Student</p>
						</div>
					</div>
					<button
						type="button"
						onClick={() => setCollapsed((prev) => !prev)}
						className="hidden h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:text-white lg:flex"
						aria-label="Toggle sidebar"
					>
						<PanelLeft className="h-4 w-4" />
					</button>
				</div>

				<nav className="mt-8 flex flex-1 flex-col gap-2" aria-label="Primary">
					{navItems.map((item) => {
						const Icon = item.icon;
						const isActive = activeId === item.id;

						return (
							<button
								key={item.id}
								type="button"
								onClick={() => setActiveId(item.id)}
								className="group relative flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-white/70 transition-colors hover:text-white"
								aria-current={isActive ? "page" : undefined}
							>
								{isActive && (
									<motion.span
										layoutId="sidebar-highlight-desktop"
										className="absolute inset-0 rounded-xl bg-white/10"
										transition={{ type: "spring", stiffness: 380, damping: 30 }}
									/>
								)}
								<span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
									<Icon className="h-4 w-4" aria-hidden="true" />
								</span>
								<span className="relative z-10 hidden text-left lg:inline group-data-[collapsed=true]:hidden">
									{item.label}
								</span>
							</button>
						);
					})}
				</nav>

				<div className="mt-auto hidden lg:block group-data-[collapsed=true]:hidden">
					<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
						<p className="text-xs uppercase tracking-[0.3em] text-white/50">
							Insight
						</p>
						<p className="mt-2 text-sm text-white/70">
							You are 12 minutes away from your weekly goal.
						</p>
					</div>
				</div>
			</aside>

			<nav
				className="fixed bottom-4 left-1/2 z-50 flex w-[92%] max-w-md -translate-x-1/2 items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur md:hidden"
				aria-label="Mobile"
			>
				{navItems.slice(0, 4).map((item) => {
					const Icon = item.icon;
					const isActive = activeId === item.id;

					return (
						<button
							key={`mobile-${item.id}`}
							type="button"
							onClick={() => setActiveId(item.id)}
							className="relative flex flex-1 flex-col items-center justify-center gap-1 text-xs text-white/70"
							aria-current={isActive ? "page" : undefined}
						>
							{isActive && (
								<motion.span
									layoutId="sidebar-highlight-mobile"
									className="absolute inset-0 rounded-2xl bg-white/10"
									transition={{ type: "spring", stiffness: 380, damping: 30 }}
								/>
							)}
							<span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
								<Icon className="h-4 w-4" aria-hidden="true" />
							</span>
							<span className="relative z-10">{item.label}</span>
						</button>
					);
				})}
			</nav>
		</>
	);
}
