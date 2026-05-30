import { unstable_noStore as noStore } from "next/cache";
import Dashboard from "@/components/Dashboard";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import type { Course } from "@/lib/types";

type CourseRow = Course & { created_at?: string | null };

async function getCourses(): Promise<{ courses: Course[]; error?: string }> {
  noStore();

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, progress, icon_name, created_at")
      .order("created_at", { ascending: true });

    if (error) {
      return { courses: [], error: error.message };
    }

    const courses = (data ?? []).map((row: CourseRow) => ({
      id: row.id,
      title: row.title ?? "Untitled Course",
      progress: Math.max(0, Math.min(100, Number(row.progress ?? 0))),
      icon_name: row.icon_name ?? "book-open",
    }));

    return { courses };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return { courses: [], error: message };
  }
}

export default async function Page() {
  const { courses, error } = await getCourses();

  return (
    <Dashboard
      courses={courses}
      errorMessage={error ?? null}
      userName="Aarav"
    />
  );
}
