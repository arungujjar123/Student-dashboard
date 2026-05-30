import "server-only";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export function getSupabaseServerClient() {
    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
    }

    return createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            persistSession: false,
            autoRefreshToken: false,
        },
    });
}
