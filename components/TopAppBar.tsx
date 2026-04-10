"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLearningStore } from "@/store/useLearningStore";

interface TopAppBarProps {
  /** Show a progress bar instead of nav links (for learn/quiz modes) */
  progressPercent?: number;
}

export default function TopAppBar({ progressPercent }: TopAppBarProps) {
  const pathname = usePathname();
  const { stats } = useLearningStore();
  const isSubPage = pathname !== "/";

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-2xl shadow-[0_4px_30px_rgba(244,187,211,0.08)]">
      {/* Left: Brand / Back */}
      <div className="flex items-center gap-3">
        {isSubPage && (
          <Link
            href="/"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors active:scale-95 duration-150"
          >
            <span className="material-symbols-outlined text-outline-variant">close</span>
          </Link>
        )}
        <Link href="/" className="text-xl font-black text-primary italic font-headline tracking-tight">
          Nihongo Learn
        </Link>
      </div>

      {/* Center: Progress bar OR nav links */}
      {progressPercent !== undefined ? (
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="h-3 w-full bg-surface-container-high rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0_0_12px_rgba(123,78,99,0.15)] transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      ) : (
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6">
            {[
              { href: "/", label: "Ana Sayfa" },
              { href: "/learn", label: "Öğren" },
              { href: "/quiz", label: "Quiz" },
            ].map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-headline font-bold tracking-tight transition-colors ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Right: Stats */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-[1rem] hidden sm:flex">
          <span
            className="material-symbols-outlined text-primary text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
          <span className="text-sm font-bold text-primary">
            {stats.streak || 1} Gün
          </span>
        </div>
        <div className="flex items-center gap-1 bg-[#ffcd57]/20 px-3 py-1.5 rounded-[1rem] hidden sm:flex">
          <span
            className="material-symbols-outlined text-[#d49900] text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          <span className="text-sm font-extrabold text-[#d49900]">
            {stats.xp} XP
          </span>
        </div>
        <Link href="/profile" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors active:scale-95 duration-150" aria-label="Profil ayarları">
          <span className="material-symbols-outlined text-primary">person</span>
        </Link>
      </div>
    </header>
  );
}
