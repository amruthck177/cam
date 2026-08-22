"use client";

export default function EventModal({ event, onClose }: { event: any; onClose: () => void }) {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-5xl bg-charcoal-surface border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        {/* Main Video Area */}
        <div className="flex-1 bg-studio-black relative flex flex-col">
          <div className="absolute top-4 left-4 z-10">
            <span className="text-data-mono-sm font-data-mono-sm text-data-white bg-studio-black/80 px-2 py-1 ghost-border rounded">
              {event.camera}
            </span>
          </div>
          <div className="flex-1 relative bg-cover bg-center" style={{ backgroundImage: `url('${event.thumbnail}')` }}>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
               <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-[0_0_15px_rgba(177,197,255,0.4)] cursor-pointer hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-on-primary text-3xl">play_arrow</span>
               </div>
            </div>
          </div>
          {/* Timeline Bar */}
          <div className="h-12 bg-charcoal-surface border-t border-white/5 flex items-center px-4 gap-4">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-white cursor-pointer">play_arrow</span>
            <div className="flex-1 h-1 bg-surface-variant rounded-full relative cursor-pointer">
               <div className="absolute top-0 left-0 h-full w-1/3 bg-primary rounded-full"></div>
               <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-data-white rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
            </div>
            <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant">00:05 / 00:15</span>
          </div>
        </div>
        
        {/* Metadata Sidebar */}
        <div className="w-full md:w-80 border-l border-white/5 bg-charcoal-surface p-6 flex flex-col overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-headline-md font-headline-md text-data-white">Event Details</h3>
            <button onClick={onClose} className="text-on-surface-variant hover:text-error transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">EVENT TYPE</p>
              <div className="flex items-center gap-2">
                <span className={`material-symbols-outlined ${event.severity === 'error' ? 'text-error' : event.severity === 'warning' ? 'text-tertiary' : 'text-primary'}`}>
                  {event.severity === 'error' ? 'warning' : event.severity === 'warning' ? 'error_outline' : 'info'}
                </span>
                <span className="text-body-md font-body-md text-data-white">{event.type}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                 <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">DATE</p>
                 <p className="text-data-mono-sm font-data-mono-sm text-data-white">{event.date}</p>
               </div>
               <div>
                 <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">TIME</p>
                 <p className="text-data-mono-sm font-data-mono-sm text-data-white">{event.timestamp}</p>
               </div>
            </div>

            <div>
              <p className="text-label-caps font-label-caps text-on-surface-variant mb-1">AI CONFIDENCE</p>
              <div className="flex items-center gap-3">
                 <span className="text-display-lg font-display-lg text-electric-blue text-[32px] leading-none">{event.confidence}</span>
                 <div className="flex-1 h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-electric-blue" style={{ width: event.confidence }}></div>
                 </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
               <button className="w-full flex items-center justify-center gap-2 bg-surface-variant/20 hover:bg-surface-variant/40 border border-white/10 text-data-white py-2 rounded transition-colors mb-3">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  <span className="text-label-caps font-label-caps">EXPORT FOOTAGE</span>
               </button>
               <button className="w-full flex items-center justify-center gap-2 bg-surface-variant/20 hover:bg-surface-variant/40 border border-white/10 text-data-white py-2 rounded transition-colors">
                  <span className="material-symbols-outlined text-[20px]">bookmark</span>
                  <span className="text-label-caps font-label-caps">FLAG EVENT</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
