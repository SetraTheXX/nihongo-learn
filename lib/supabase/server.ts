import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "./database.types";

/**
 * Sunucu tarafı (Server Component / Route Handler) Supabase istemcisi.
 * Server Component'ler, API rotaları ve middleware'de kullan.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component'te çağrılırsa set çalışmaz — sorun değil.
            // Middleware veya Route Handler'da çalışacak.
          }
        },
      },
    }
  );
}
