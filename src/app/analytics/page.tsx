import AnalyticsCharts from "@/components/AnalyticsCharts";

export default function AnalyticsPage() {
  return (
    <div className="flex-1 p-6 lg:p-8 space-y-6 overflow-y-auto">
      {/* Filters & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-charcoal-surface border border-white/5 p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-3">
          <h2 className="text-display-lg font-display-lg text-on-surface text-[24px] leading-tight">System Metrics</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {/* Date Range Picker Mock */}
          <div className="flex items-center gap-2 bg-studio-black border border-white/10 rounded-lg px-3 py-2 hover:border-primary/50 transition-colors cursor-pointer group">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px] group-hover:text-primary transition-colors">calendar_month</span>
            <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant">LAST 24 HOURS</span>
            <span className="material-symbols-outlined text-on-surface-variant text-[16px]">arrow_drop_down</span>
          </div>
          {/* Camera Filter Mock */}
          <div className="flex items-center gap-2 bg-studio-black border border-white/10 rounded-lg px-3 py-2 hover:border-primary/50 transition-colors cursor-pointer group">
            <span className="material-symbols-outlined text-on-surface-variant text-[18px] group-hover:text-primary transition-colors">videocam</span>
            <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant">ALL CAMERAS</span>
            <span className="material-symbols-outlined text-on-surface-variant text-[16px]">arrow_drop_down</span>
          </div>
        </div>
      </div>

      <AnalyticsCharts />
    </div>
  );
}
