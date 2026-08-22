"use client";

import { useState } from "react";
import EventModal from "@/components/EventModal";

export default function ArchivePage() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const mockEvents = [
    {
      id: "EVT-8924",
      type: "Motion Detected",
      camera: "CAM_01_MAIN",
      timestamp: "14:02:41",
      date: "OCT 24, 2023",
      confidence: "98.4%",
      severity: "warning",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIhkPlPfziyPE5u9O8Rqaq2j6oV_8rJ8Sf0JFmfAxcau11lkDvSKrO8P908RMENXxZgpwDnuKoIjx1DL909bKpXq6wn_Q23Pb5VvA1pQnPaZGlZt6aJsK2F2GDmI1DuIBB2UqdI4i9Hs2UUJ1eyIzOVx3_z6zXWKVZVvtApiV4cmVV-KM-4olNKQCsaKHyy7oopb8eXWpb1AkxMWCRUs3ZudDDVIbnHTo6Fkn12tYDU-at0FbQHjuURA",
    },
    {
      id: "EVT-8923",
      type: "Facial Recognition",
      camera: "CAM_03_SERVER",
      timestamp: "13:58:05",
      date: "OCT 24, 2023",
      confidence: "99.1%",
      severity: "info",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyVTYXkcKsHbv2PusoU0DAkMLews_qN_XnIOBYhnhaZ0s5n-PlC_cuEyMWFTXZWFPorxfs2apllS5l_YwfWZE6gnko87mFMxcoHFPpFR8pdbwAZ3a_w8P09fCgwQ2v_UJFztvoGMTdPb8xZezTAJtpNbb9c3J7I_4QLQU-NJJ2JV3hLr8a73Ot3zxXymai8XmxG3g-1lPJ0wKuw5oYbBpa-F5i7fxKjRyz5u3VMl5aXeMqtXh8IxhJPA",
    },
    {
      id: "EVT-8922",
      type: "Anomaly",
      camera: "CAM_02_DOCK",
      timestamp: "11:14:22",
      date: "OCT 24, 2023",
      confidence: "87.5%",
      severity: "error",
      thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZIDwzYqI3l0NX1oXLNNGpt17vu4xgSKiwfeP-bEgyiSibReu4lpBYWf1hLN82X2QpSiL8yTqHnVHsy2kB-e1nW1S9eoEm_8BAFfDqHDQP65bikEIM9UvhPPtP_8VVLxe306QhaADOPwJcsJYhSZ4xK4gF3C2RvY4zjWdl_gD9vJS8zlhcoOKKoku0rxcyZzeATmRkXCQoNE4S1IHFa63UajFuUvmHwqTEv_txo9oa11B2GisIqYRi4A",
    }
  ];

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Filter Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-charcoal-surface/30 p-4 overflow-y-auto flex-shrink-0">
        <h3 className="text-label-caps font-label-caps text-on-surface-variant mb-6 uppercase tracking-wider">Event Filters</h3>
        
        {/* Event Type Filter */}
        <div className="mb-8">
          <h4 className="text-data-mono-sm font-data-mono-sm text-on-surface mb-3 flex items-center justify-between">
            TYPE <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
          </h4>
          <div className="space-y-2">
            {["Motion Detected", "Facial Recognition", "Object Tracking"].map((type, idx) => (
              <label key={type} className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 border border-outline-variant rounded bg-surface group-hover:border-primary transition-colors">
                  <input defaultChecked={idx < 2} className="absolute opacity-0 w-full h-full cursor-pointer peer" type="checkbox" />
                  <span className="material-symbols-outlined text-[12px] text-primary opacity-0 peer-checked:opacity-100 transition-opacity">check</span>
                </div>
                <span className="text-body-md font-body-md text-on-surface-variant group-hover:text-on-surface transition-colors text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Source Filter */}
        <div className="mb-8">
          <h4 className="text-data-mono-sm font-data-mono-sm text-on-surface mb-3 flex items-center justify-between">
            SOURCE <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
          </h4>
          <div className="space-y-2">
            {["All Cameras", "CAM_01_MAIN", "CAM_02_DOCK"].map((cam, idx) => (
              <label key={cam} className="flex items-center space-x-3 cursor-pointer group">
                <div className="relative flex items-center justify-center w-4 h-4 border border-outline-variant rounded bg-surface group-hover:border-primary transition-colors">
                  <input defaultChecked={idx === 0} className="absolute opacity-0 w-full h-full cursor-pointer peer" name="source" type="radio" />
                  <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-body-md font-body-md text-on-surface-variant group-hover:text-on-surface transition-colors text-sm">{cam}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto bg-surface-dim">
        <div className="flex justify-between items-center mb-6">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input 
              type="text" 
              placeholder="Search event ID, camera, or tags..." 
              className="w-full bg-charcoal-surface border border-white/10 rounded-lg py-2 pl-10 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary transition-colors ghost-border"
            />
          </div>
          <div className="flex items-center gap-2 text-data-mono-sm font-data-mono-sm text-on-surface-variant">
            <span>SORT BY:</span>
            <button className="flex items-center gap-1 hover:text-white transition-colors">
              NEWEST <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {mockEvents.map((evt) => (
            <div key={evt.id} className="bg-charcoal-surface rounded-xl border border-white/5 overflow-hidden group cursor-pointer hover:border-white/20 transition-all duration-300 shadow-lg" onClick={() => setSelectedEvent(evt)}>
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${evt.thumbnail}')` }}></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-2 left-2 ai-chip px-2 py-1 rounded text-[10px] text-electric-blue font-data-mono-sm backdrop-blur-md">
                  {evt.confidence}
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-studio-black/80 rounded text-[10px] text-data-white font-data-mono-sm backdrop-blur-md">
                  00:00:15
                </div>
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_15px_rgba(177,197,255,0.4)]">
                    <span className="material-symbols-outlined text-on-primary">play_arrow</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-body-md font-body-md text-data-white font-medium">{evt.type}</h4>
                  <span className={`text-[10px] font-data-mono-sm px-1.5 py-0.5 rounded ${
                    evt.severity === 'error' ? 'bg-error/20 text-error border border-error/30' : 
                    evt.severity === 'warning' ? 'bg-tertiary/20 text-tertiary border border-tertiary/30' : 
                    'bg-white/10 text-on-surface-variant border border-white/10'
                  }`}>
                    {evt.severity.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-data-mono-sm font-data-mono-sm text-on-surface-variant">
                  <span>{evt.camera}</span>
                  <span>{evt.timestamp}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}
