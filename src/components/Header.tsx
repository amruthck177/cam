"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Dynamic header text based on route
  const getStatusText = () => {
    switch (pathname) {
      case "/analytics":
        return "ANALYTICS_ENGINE_ONLINE";
      case "/archive":
        return "SECURE_ARCHIVE_ACCESS";
      case "/settings":
        return "SYSTEM_CONFIG_MODE";
      default:
        return "LIVE FEED_ACTIVE";
    }
  };

  return (
    <header className="sticky top-0 bg-charcoal-surface/60 backdrop-blur-xl border-b border-white/10 flex justify-between items-center h-16 px-4 z-40">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 ai-chip px-2 py-1 rounded-DEFAULT">
          <span className="w-2 h-2 rounded-full bg-error animate-pulse shadow-[0_0_8px_rgba(255,180,171,0.8)]"></span>
          <span className="text-electric-blue font-data-mono-sm tracking-widest text-[10px]">
            {getStatusText()}
          </span>
        </div>
        <span className="text-on-surface-variant font-data-mono-sm">|</span>
        <span className="text-on-surface-variant font-data-mono-sm">CAM_CLUSTER_ALPHA</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          <button className="text-on-surface-variant hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">sensors</span>
          </button>
          <button className="text-on-surface-variant hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">videocam_off</span>
          </button>
          <button className="text-on-surface-variant hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined text-[20px]">wifi</span>
          </button>
        </div>
        <button className="bg-primary text-data-white px-4 py-1.5 rounded-DEFAULT text-label-caps font-label-caps font-bold hover:bg-primary-container transition-colors flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
          REC
        </button>
      </div>
    </header>
  );
}
