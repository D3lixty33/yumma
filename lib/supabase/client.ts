// lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";

/**
 * Create a browser supabase client. Call this in client components only.
 */
export const createBrowserSupabase = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
