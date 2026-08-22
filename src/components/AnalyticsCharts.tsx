"use client";

export default function AnalyticsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main Line Chart: Activity Density (Span 8 cols) */}
      <div className="lg:col-span-8 bg-charcoal-surface border border-white/5 rounded-xl p-6 shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-white/20 transition-colors"></div>
        <div className="flex justify-between items-start mb-6 relative z-10">
          <div>
            <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-1">ACTIVITY DENSITY</h3>
            <div className="flex items-baseline gap-2">
              <span className="text-headline-md font-headline-md text-data-white">12,482</span>
              <span className="text-data-mono-sm font-data-mono-sm text-electric-blue">+14.2%</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-2 py-1 bg-white/5 border border-white/10 rounded text-data-mono-sm font-data-mono-sm text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors">1H</button>
            <button className="px-2 py-1 bg-electric-blue/10 border border-electric-blue/30 rounded text-data-mono-sm font-data-mono-sm text-electric-blue shadow-[0_0_8px_rgba(34,211,238,0.2)]">24H</button>
            <button className="px-2 py-1 bg-white/5 border border-white/10 rounded text-data-mono-sm font-data-mono-sm text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors">7D</button>
          </div>
        </div>

        {/* Chart Graphic */}
        <div className="h-64 w-full relative z-10 flex items-end justify-between gap-1 pb-6 border-b border-white/10">
          <div className="w-full h-full relative">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0,80 Q10,60 20,70 T40,40 T60,50 T80,20 T100,30 L100,100 L0,100 Z" fill="url(#gradient)" opacity="0.2"></path>
              <path className="drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" d="M0,80 Q10,60 20,70 T40,40 T60,50 T80,20 T100,30" fill="none" stroke="#22d3ee" strokeWidth="2"></path>
              <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8"></stop>
                  <stop offset="100%" stopColor="#131314" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex justify-between mt-4 text-data-mono-sm font-data-mono-sm text-on-surface-variant opacity-60">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>

      {/* AI Model Confidence (Span 4 cols) */}
      <div className="lg:col-span-4 bg-charcoal-surface border border-white/5 rounded-xl p-6 shadow-xl relative overflow-hidden flex flex-col group">
        <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-white/20 transition-colors"></div>
        <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-6 relative z-10">AI MODEL CONFIDENCE</h3>
        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle className="text-surface-container-highest" cx="50" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="8"></circle>
              <circle className="drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-1000 ease-out" cx="50" cy="50" fill="none" r="45" stroke="#22d3ee" strokeDasharray="283" strokeDashoffset="20" strokeLinecap="round" strokeWidth="8"></circle>
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-display-lg font-display-lg text-data-white leading-none">92<span className="text-data-mono-lg font-data-mono-lg">%</span></span>
              <span className="text-data-mono-sm font-data-mono-sm text-electric-blue mt-1">SYS.NOMINAL</span>
            </div>
          </div>
          <div className="w-full mt-8 space-y-3">
            <div className="flex justify-between items-center text-data-mono-sm font-data-mono-sm mb-1">
              <span className="text-on-surface-variant font-body-md font-medium text-[13px]">Object Recognition</span>
              <span className="text-data-white">98.4%</span>
            </div>
            <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-primary shadow-[0_0_5px_rgba(177,197,255,0.5)]" style={{ width: "98.4%" }}></div>
            </div>
            <div className="flex justify-between items-center text-data-mono-sm font-data-mono-sm pt-2 mb-1">
              <span className="text-on-surface-variant font-body-md font-medium text-[13px]">Trajectory Prediction</span>
              <span className="text-data-white">87.2%</span>
            </div>
            <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
              <div className="h-full bg-secondary shadow-[0_0_5px_rgba(137,206,255,0.5)]" style={{ width: "87.2%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Heatmap: Traffic Flow (Span 6 cols) */}
      <div className="lg:col-span-6 bg-charcoal-surface border border-white/5 rounded-xl p-6 shadow-xl relative overflow-hidden group">
        <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-white/20 transition-colors"></div>
        <div className="flex justify-between items-start mb-4 relative z-10">
          <h3 className="text-label-caps font-label-caps text-on-surface-variant">TRAFFIC FLOW HEATMAP</h3>
          <span className="material-symbols-outlined text-on-surface-variant text-[18px]">map</span>
        </div>
        <div className="relative w-full h-48 bg-studio-black rounded-lg border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-80" style={{ background: "radial-gradient(circle at 30% 50%, rgba(255,0,0,0.4) 0%, transparent 40%), radial-gradient(circle at 70% 30%, rgba(255,165,0,0.3) 0%, transparent 50%), radial-gradient(circle at 50% 80%, rgba(34,211,238,0.2) 0%, transparent 60%)" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
          <div className="absolute top-4 left-4 bg-charcoal-surface/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-data-mono-sm font-data-mono-sm text-electric-blue flex items-center gap-1 shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse"></span>
            ZONE_A: HIGH
          </div>
        </div>
      </div>

      {/* System Status List (Span 6 cols) */}
      <div className="lg:col-span-6 bg-charcoal-surface border border-white/5 rounded-xl p-6 shadow-xl relative overflow-hidden group flex flex-col h-[300px]">
        <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-white/20 transition-colors"></div>
        <div className="flex justify-between items-start mb-6 relative z-10">
          <h3 className="text-label-caps font-label-caps text-on-surface-variant">NODE STATUS</h3>
          <span className="text-data-mono-sm font-data-mono-sm text-primary">6 ACTIVE / 0 ERR</span>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3 relative z-10 pr-2">
          {[1,2,3].map((node) => (
             <div key={node} className="flex items-center justify-between p-3 bg-studio-black border border-white/5 rounded-lg hover:border-primary/30 transition-colors">
               <div className="flex flex-col">
                  <span className="text-data-mono-sm font-data-mono-sm text-data-white">NODE_{node}_CAM</span>
                  <span className="text-[10px] text-on-surface-variant">4K / 60FPS</span>
               </div>
               <span className="text-data-mono-sm font-data-mono-sm text-electric-blue border border-electric-blue/30 bg-electric-blue/10 px-2 py-1 rounded">ONLINE</span>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
