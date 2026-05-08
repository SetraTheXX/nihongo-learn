"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Ana Sayfa", icon: "home" },
  { href: "/learn", label: "Öğren", icon: "school" },
  { href: "/quiz", label: "Quiz", icon: "auto_stories" },
  { href: "/profile", label: "Profil", icon: "person" },
];

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-2 pb-6 bg-white/80 backdrop-blur-xl shadow-[0_-10px_40px_rgba(123,78,99,0.06)] rounded-t-[2rem] border-t border-outline-variant/10">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center px-5 py-2 rounded-full transition-all duration-200 active:scale-90 ${
              isActive
                ? "bg-primary-container text-on-primary-container"
                : "text-outline-variant hover:text-primary"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px]"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span className="font-label font-bold text-[10px] uppercase tracking-widest mt-0.5">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
