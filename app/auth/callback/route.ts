import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * Auth Callback — OAuth ve email doğrulama sonrası buraya düşer.
 * Supabase token'ı code exchange ile alır ve cookie'ye yazar.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    if (!supabase) {
      return NextResponse.redirect(`${origin}/auth/login?error=supabase_not_configured`);
    }

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Başarılı — hedef sayfaya yönlendir
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Hata durumu — login sayfasına yönlendir
  return NextResponse.redirect(`${origin}/auth/login?error=callback_failed`);
}
