import LiveFeedGrid from "@/components/LiveFeedGrid";
import TelemetryPanel from "@/components/TelemetryPanel";

export default function LiveFeedPage() {
  return (
    <div className="flex-grow flex overflow-hidden p-4 gap-4 bg-surface-dim">
      <LiveFeedGrid />
      <TelemetryPanel />
    </div>
  );
}
