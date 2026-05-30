type HeroTileProps = {
	userName: string;
	streakDays: number;
	focusMinutes: number;
};

export default function HeroTile({
	userName,
	streakDays,
	focusMinutes,
}: HeroTileProps) {
	return (
		<div className="relative z-10 flex h-full flex-col justify-between">
			<span
				aria-hidden="true"
				className="pointer-events-none absolute -left-20 top-[-30%] h-72 w-72 rounded-full bg-sky-500/25 blur-[90px]"
			/>
			<span
				aria-hidden="true"
				className="pointer-events-none absolute right-[-10%] top-[20%] h-56 w-56 rounded-full bg-fuchsia-500/20 blur-[80px]"
			/>

			<header className="relative z-10">
				<p className="text-xs uppercase tracking-[0.4em] text-white/55">
					Welcome back
				</p>
				<h1 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
					{userName}, your next breakthrough is one session away.
				</h1>
				<p className="mt-3 max-w-xl text-sm text-white/65 md:text-base">
					Focus on deep work blocks and stay consistent. Your dashboard updates
					in real-time from Supabase.
				</p>
			</header>

			<section className="relative z-10 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
				<article className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<p className="text-xs uppercase tracking-[0.3em] text-white/50">
						Daily streak
					</p>
					<p className="mt-2 text-2xl font-semibold text-white">
						{streakDays} days
					</p>
					<p className="mt-1 text-xs text-white/55">
						Keep the momentum for tomorrow.
					</p>
				</article>
				<article className="rounded-2xl border border-white/10 bg-white/5 p-4">
					<p className="text-xs uppercase tracking-[0.3em] text-white/50">
						Focus time
					</p>
					<p className="mt-2 text-2xl font-semibold text-white">
						{focusMinutes} min
					</p>
					<p className="mt-1 text-xs text-white/55">
						Deep work goal: 90 minutes.
					</p>
				</article>
			</section>
		</div>
	);
}
