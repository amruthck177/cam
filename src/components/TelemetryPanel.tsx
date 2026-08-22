"use client";

import { useState } from "react";

export default function TelemetryPanel() {
  const [activeModel, setActiveModel] = useState("Face Recognition");

  return (
    <div className="w-[320px] bg-charcoal-surface border-l border-white/10 flex flex-col flex-shrink-0">
      {/* Telemetry Header */}
      <div className="p-4 border-b border-white/10">
        <h2 className="text-data-mono-lg font-data-mono-lg text-data-white mb-1">SYSTEM_TELEMETRY</h2>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          <span className="text-data-mono-sm font-data-mono-sm text-electric-blue">OPTICS ONLINE</span>
        </div>
      </div>

      {/* Viewfinder Controls */}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-3">GRID MODE</h3>
        <div className="flex bg-surface-dim p-1 rounded-DEFAULT ghost-border">
          <button className="flex-1 py-1 text-center bg-charcoal-surface rounded-sm text-data-white font-data-mono-sm ghost-border">
            2x2
          </button>
          <button className="flex-1 py-1 text-center text-on-surface-variant font-data-mono-sm hover:text-data-white transition-colors">
            1x1
          </button>
          <button className="flex-1 py-1 text-center text-on-surface-variant font-data-mono-sm hover:text-data-white transition-colors">
            3x3
          </button>
        </div>
      </div>

      {/* AI Models */}
      <div className="p-4 border-b border-white/10">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-label-caps font-label-caps text-on-surface-variant">ACTIVE MODELS</h3>
          <span className="text-data-mono-sm font-data-mono-sm text-electric-blue">3/5 ONLINE</span>
        </div>
        <div className="flex flex-col gap-2">
          {["Face Recognition", "Motion Analytics", "Anomaly Detection"].map((model) => (
            <div
              key={model}
              className="flex items-center justify-between p-2 rounded-DEFAULT bg-surface-dim ghost-border cursor-pointer hover:bg-surface-variant/20 transition-colors"
              onClick={() => setActiveModel(model)}
            >
              <div className="flex items-center gap-2">
                <span className={`material-symbols-outlined text-[16px] ${activeModel === model ? "text-electric-blue" : "text-on-surface-variant"}`}>
                  {model === "Face Recognition" ? "face" : model === "Motion Analytics" ? "directions_run" : "warning"}
                </span>
                <span className={`text-data-mono-sm font-data-mono-sm ${activeModel === model ? "text-data-white" : "text-on-surface-variant"}`}>
                  {model.toUpperCase()}
                </span>
              </div>
              <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${activeModel === model ? "bg-electric-blue" : "bg-surface-variant"}`}>
                <div className={`w-3 h-3 bg-studio-black rounded-full transition-transform ${activeModel === model ? "translate-x-4" : ""}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telemetry Data */}
      <div className="p-4 flex-grow">
        <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-3">REAL-TIME DATA</h3>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <span className="text-body-md font-body-md text-on-surface-variant">Latency</span>
            <span className="text-data-mono-lg font-data-mono-lg text-data-white">14<span className="text-data-mono-sm text-on-surface-variant ml-1">ms</span></span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-body-md font-body-md text-on-surface-variant">FPS (Avg)</span>
            <span className="text-data-mono-lg font-data-mono-lg text-data-white">60.0</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-body-md font-body-md text-on-surface-variant">Bitrate</span>
            <span className="text-data-mono-lg font-data-mono-lg text-data-white">48.2<span className="text-data-mono-sm text-on-surface-variant ml-1">Mbps</span></span>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-end mb-1">
              <span className="text-body-md font-body-md text-on-surface-variant">GPU Load</span>
              <span className="text-data-mono-sm font-data-mono-sm text-electric-blue">42%</span>
            </div>
            <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
              <div className="h-full bg-electric-blue shadow-[0_0_8px_rgba(34,211,238,0.8)]" style={{ width: "42%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Log (Mini) */}
      <div className="h-48 border-t border-white/10 bg-surface-dim p-4 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-surface-dim to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-surface-dim to-transparent z-10 pointer-events-none"></div>
        <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-2 relative z-20">INCIDENT STREAM</h3>
        <div className="flex flex-col gap-2 animate-[pulse_4s_ease-in-out_infinite]">
          <div className="flex gap-2 text-data-mono-sm font-data-mono-sm">
            <span className="text-on-surface-variant w-16 flex-shrink-0">14:02:41</span>
            <span className="text-error truncate">MOTION DETECTED [CAM_01]</span>
          </div>
          <div className="flex gap-2 text-data-mono-sm font-data-mono-sm">
            <span className="text-on-surface-variant w-16 flex-shrink-0">14:01:12</span>
            <span className="text-on-surface-variant truncate">SYS_SYNC_OK</span>
          </div>
          <div className="flex gap-2 text-data-mono-sm font-data-mono-sm">
            <span className="text-on-surface-variant w-16 flex-shrink-0">13:58:05</span>
            <span className="text-electric-blue truncate">PERSON IDENTIFIED (99%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
