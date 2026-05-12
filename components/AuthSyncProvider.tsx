"use client";

import { useEffect, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { useLearningStore } from "@/store/useLearningStore";
import { setupConnectivityListeners } from "@/lib/supabase/sync";

/**
 * Auth state değişikliğini dinler ve otomatik senkronizasyon yapar.
 * Layout'a yerleştirilir — tüm sayfalar için çalışır.
 */
export default function AuthSyncProvider({ children }: { children: React.ReactNode }) {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;

    const supabase = createClient();
    if (!supabase) return;

    const { setUserId, syncWithCloud } = useLearningStore.getState();

    // İlk yüklemede mevcut session'ı kontrol et
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserId(user.id);
        // Sayfa yüklenince ilk senkronizasyon
        syncWithCloud();
      }
    });

    // Auth state değişikliklerini dinle
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUserId(session.user.id);
          // Giriş yapınca localStorage verisini bulutla birleştir
          await syncWithCloud();
        } else if (event === "SIGNED_OUT") {
          setUserId(null);
          // Çıkış yapınca local veriyi temizle
          useLearningStore.getState().clearLocalData();
        }
      }
    );

    // Offline/Online dinleyiciler
    const cleanupConnectivity = setupConnectivityListeners();

    return () => {
      subscription.unsubscribe();
      cleanupConnectivity();
    };
  }, []);

  return <>{children}</>;
}
