import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./database.types";

/**
 * Tarayıcı (client-side) Supabase istemcisi.
 * React bileşenlerinde ve client-side hook'larda kullan.
 */
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
