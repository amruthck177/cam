"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Live Feed", href: "/live", icon: "videocam" },
    { name: "Analytics", href: "/analytics", icon: "insights" },
    { name: "Archive", href: "/archive", icon: "history" },
    { name: "Settings", href: "/settings", icon: "settings" },
  ];

  return (
    <nav className="w-[280px] h-screen fixed left-0 top-0 bg-charcoal-surface border-r border-white/10 flex flex-col py-4 px-4 z-50">
      <div className="mb-12">
        <h1 className="text-headline-md font-headline-md text-primary">Lumen AI</h1>
        <p className="text-data-mono-sm font-data-mono-sm text-on-surface-variant mt-1 tracking-[0.2em] uppercase">Studio Precision</p>
      </div>
      <ul className="flex flex-col gap-2 flex-grow">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === "/" && item.href === "/live");
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-DEFAULT transition-all ${
                  isActive
                    ? "text-primary font-bold border-r-2 border-primary bg-surface-variant/10 transform scale-[0.98]"
                    : "text-on-surface-variant font-medium hover:bg-surface-variant/20 hover:text-primary"
                }`}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <span className="text-label-caps font-label-caps">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/10">
        <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden ghost-border">
          <img
            className="w-full h-full object-cover"
            alt="User profile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4B91jSSM9yLI-hXzhVlItYZzOZeuLIwVHhYCU_TZKjsK446bqsvn3dHrZV5z-9491hQZB-D-Sua4oYWlTI3JubE9HMe9ErElyfNy1jJQBS3KLslGbGHrApwJQhIzjLTkiMjIYpE2fsklrIfzrDu51g2hxrHz0JfwkLNjRcSfmn48kyw9R0_GN22dG20W9MMc3c5SzSk5MVTAjdwdmF96Zzv61NF9rsHnOzSPdo8nYfwf4LQ78VeEgw"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-data-mono-sm font-data-mono-sm text-data-white">SYS_ADMIN_01</span>
          <span className="text-[10px] text-electric-blue font-data-mono-sm">ONLINE</span>
        </div>
      </div>
    </nav>
  );
}
