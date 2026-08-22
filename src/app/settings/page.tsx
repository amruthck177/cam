"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [sensitivity, setSensitivity] = useState(85);
  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="flex-1 p-6 lg:p-12 overflow-y-auto bg-surface-dim relative">
      {/* Settings Header */}
      <div className="flex justify-between items-end mb-8 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-display-lg font-display-lg text-on-surface text-[32px] leading-tight mb-2">Platform Settings</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Manage system configuration, AI parameters, and hardware clusters.</p>
        </div>
        <button onClick={handleSave} className="bg-primary text-data-white px-6 py-2 rounded font-label-caps text-label-caps tracking-widest hover:bg-primary-container transition-colors shadow-[0_0_15px_rgba(177,197,255,0.2)] border border-primary/50">
          SAVE CHANGES
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: AI & Network */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          {/* AI Configuration Section */}
          <section className="bg-charcoal-surface rounded-xl p-6 ghost-border">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-6 border-b border-white/10 pb-4">AI Engine</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-body-md font-body-md text-on-surface">Auto-Tracking</span>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                    <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-charcoal-surface appearance-none cursor-pointer checked:right-0 checked:bg-primary transition-all duration-300" />
                    <div className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer"></div>
                  </div>
                </div>
              </div>

              <div>
                <label className="flex justify-between items-center mb-2">
                  <span className="text-body-md font-body-md text-on-surface">Detection Sensitivity</span>
                  <span className="text-data-mono-sm font-data-mono-sm text-electric-blue">{sensitivity}%</span>
                </label>
                <input 
                  type="range" 
                  min="0" max="100" 
                  value={sensitivity} 
                  onChange={(e) => setSensitivity(Number(e.target.value))}
                  className="w-full h-1 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-primary" 
                />
              </div>
            </div>
          </section>

          {/* Network Settings Section */}
          <section className="bg-charcoal-surface rounded-xl p-6 ghost-border">
            <h3 className="text-headline-md font-headline-md text-on-surface mb-6 border-b border-white/10 pb-4">Network Settings</h3>
            
            <div className="space-y-4">
              <div className="ghost-border rounded px-3 py-2 bg-studio-black">
                <label className="block text-data-mono-sm font-data-mono-sm text-on-surface-variant mb-1">Primary Gateway</label>
                <input type="text" defaultValue="192.168.1.254" className="w-full bg-transparent border-none text-data-mono-lg font-data-mono-lg text-on-surface focus:outline-none p-0" />
              </div>
              <div className="ghost-border rounded px-3 py-2 bg-studio-black">
                <label className="block text-data-mono-sm font-data-mono-sm text-on-surface-variant mb-1">DNS Server</label>
                <input type="text" defaultValue="1.1.1.1" className="w-full bg-transparent border-none text-data-mono-lg font-data-mono-lg text-on-surface focus:outline-none p-0" />
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Hardware Management */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <section className="bg-charcoal-surface rounded-xl p-6 ghost-border flex-1">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <h3 className="text-headline-md font-headline-md text-on-surface">Connected Hardware</h3>
              <button className="flex items-center gap-2 text-primary hover:text-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-sm">add</span>
                <span className="text-label-caps font-label-caps">ADD DEVICE</span>
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-label-caps font-label-caps text-on-surface-variant border-b border-white/5">
                    <th className="py-3 px-4 font-normal">DEVICE ID</th>
                    <th className="py-3 px-4 font-normal">STATUS</th>
                    <th className="py-3 px-4 font-normal">IP ADDRESS</th>
                    <th className="py-3 px-4 font-normal text-right">LATENCY</th>
                  </tr>
                </thead>
                <tbody className="text-data-mono-sm font-data-mono-sm">
                  {[
                    { id: "CAM_01_NORTH", status: "ONLINE", ip: "192.168.1.101", latency: "14ms", color: "electric-blue" },
                    { id: "CAM_02_SOUTH", status: "ONLINE", ip: "192.168.1.102", latency: "16ms", color: "electric-blue" },
                    { id: "CAM_03_EAST", status: "WARNING", ip: "192.168.1.103", latency: "142ms", color: "tertiary" },
                    { id: "CAM_04_WEST", status: "OFFLINE", ip: "192.168.1.104", latency: "--", color: "error" },
                  ].map((device) => (
                    <tr key={device.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-on-surface">{device.id}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-sm bg-${device.color}/10 text-${device.color} border border-${device.color}/30`}>
                          {device.status === 'ONLINE' && <span className={`w-1.5 h-1.5 rounded-full bg-${device.color} animate-pulse`}></span>}
                          {device.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-on-surface-variant">{device.ip}</td>
                      <td className="py-4 px-4 text-right text-data-white">{device.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 bg-charcoal-surface border border-primary/50 text-data-white px-4 py-3 rounded shadow-[0_0_15px_rgba(177,197,255,0.2)] flex items-center gap-3 z-50 animate-bounce">
          <span className="material-symbols-outlined text-primary">check_circle</span>
          <span className="text-body-md font-body-md text-sm">Settings saved successfully.</span>
        </div>
      )}
    </div>
  );
}
