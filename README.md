# Student Dashboard (Next.js + Supabase)

High-fidelity student dashboard prototype using Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide icons.

## Architecture Notes

- Server Components handle Supabase reads in [src/app/page.tsx](src/app/page.tsx).
- UI and animation logic live in client components ([src/components](src/components)).
- Loading skeletons are implemented in [src/app/loading.tsx](src/app/loading.tsx).
- Error boundary and reset logic are in [src/app/error.tsx](src/app/error.tsx).

## Supabase Setup

1. Create a Supabase project.
2. Create a `courses` table with:
   - `id` (uuid, primary key)
   - `title` (text)
   - `progress` (int)
   - `icon_name` (text)
   - `created_at` (timestamp)
3. Insert 3-4 rows of sample data.

## Environment Variables

Copy `.env.example` to `.env.local` and add:

```
SUPABASE_URL=your_project_url
SUPABASE_ANON_KEY=your_anon_key
```

These are read only on the server via `process.env`.

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

- Push to GitHub.
- Deploy on Vercel and set the same env vars in the Vercel project settings.
