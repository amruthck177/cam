"use client";

import { useState } from "react";

export default function LiveFeedGrid() {
  const [gridMode, setGridMode] = useState<"2x2" | "1x1">("2x2");

  return (
    <div className="flex-grow grid grid-cols-2 grid-rows-2 gap-unit relative bg-studio-black ghost-border p-unit">
      {/* Camera Feed 1 */}
      <div className={`relative w-full h-full bg-charcoal-surface group overflow-hidden ${gridMode === "1x1" ? "col-span-2 row-span-2" : ""}`}>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIhkPlPfziyPE5u9O8Rqaq2j6oV_8rJ8Sf0JFmfAxcau11lkDvSKrO8P908RMENXxZgpwDnuKoIjx1DL909bKpXq6wn_Q23Pb5VvA1pQnPaZGlZt6aJsK2F2GDmI1DuIBB2UqdI4i9Hs2UUJ1eyIzOVx3_z6zXWKVZVvtApiV4cmVV-KM-4olNKQCsaKHyy7oopb8eXWpb1AkxMWCRUs3ZudDDVIbnHTo6Fkn12tYDU-at0FbQHjuURA')",
          }}
        ></div>
        {/* Viewfinder HUD Overlays */}
        <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="text-data-mono-sm font-data-mono-sm text-data-white bg-studio-black/80 px-2 py-1 ghost-border">
              CAM_01_MAIN
            </span>
            <span className="text-data-mono-sm font-data-mono-sm text-electric-blue bg-studio-black/80 px-2 py-1 ghost-border">
              4K / 60FPS
            </span>
          </div>
          {/* AI Bounding Box Example */}
          <div className="absolute top-[30%] left-[40%] w-32 h-48 border border-electric-blue bg-electric-blue/10 shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            <div className="absolute -top-6 left-[-1px] ai-chip px-1 py-0.5 text-[10px] text-electric-blue font-data-mono-sm whitespace-nowrap">
              PERSON [98.4%]
            </div>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant bg-studio-black/80 px-2 py-1 ghost-border">
              BITRATE: 12.4 Mbps
            </span>
            <span className="text-data-mono-sm font-data-mono-sm text-error bg-studio-black/80 px-2 py-1 ghost-border flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">warning</span> MOTION
            </span>
          </div>
        </div>
      </div>

      {/* Camera Feed 2 */}
      {gridMode === "2x2" && (
        <div className="relative w-full h-full bg-charcoal-surface group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZIDwzYqI3l0NX1oXLNNGpt17vu4xgSKiwfeP-bEgyiSibReu4lpBYWf1hLN82X2QpSiL8yTqHnVHsy2kB-e1nW1S9eoEm_8BAFfDqHDQP65bikEIM9UvhPPtP_8VVLxe306QhaADOPwJcsJYhSZ4xK4gF3C2RvY4zjWdl_gD9vJS8zlhcoOKKoku0rxcyZzeATmRkXCQoNE4S1IHFa63UajFuUvmHwqTEv_txo9oa11B2GisIqYRi4A')",
            }}
          ></div>
          <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-data-mono-sm font-data-mono-sm text-data-white bg-studio-black/80 px-2 py-1 ghost-border">
                CAM_02_DOCK
              </span>
              <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant bg-studio-black/80 px-2 py-1 ghost-border">
                1080p / 30FPS
              </span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant bg-studio-black/80 px-2 py-1 ghost-border">
                BITRATE: 4.2 Mbps
              </span>
              <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant bg-studio-black/80 px-2 py-1 ghost-border">
                CLEAR
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Camera Feed 3 */}
      {gridMode === "2x2" && (
        <div className="relative w-full h-full bg-charcoal-surface group overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAyVTYXkcKsHbv2PusoU0DAkMLews_qN_XnIOBYhnhaZ0s5n-PlC_cuEyMWFTXZWFPorxfs2apllS5l_YwfWZE6gnko87mFMxcoHFPpFR8pdbwAZ3a_w8P09fCgwQ2v_UJFztvoGMTdPb8xZezTAJtpNbb9c3J7I_4QLQU-NJJ2JV3hLr8a73Ot3zxXymai8XmxG3g-1lPJ0wKuw5oYbBpa-F5i7fxKjRyz5u3VMl5aXeMqtXh8IxhJPA')",
            }}
          ></div>
          <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-data-mono-sm font-data-mono-sm text-data-white bg-studio-black/80 px-2 py-1 ghost-border">
                CAM_03_SERVER
              </span>
              <span className="text-data-mono-sm font-data-mono-sm text-electric-blue bg-studio-black/80 px-2 py-1 ghost-border">
                4K / 30FPS
              </span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant bg-studio-black/80 px-2 py-1 ghost-border">
                BITRATE: 8.8 Mbps
              </span>
              <span className="text-data-mono-sm font-data-mono-sm text-on-surface-variant bg-studio-black/80 px-2 py-1 ghost-border">
                CLEAR
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Camera Feed 4 */}
      {gridMode === "2x2" && (
        <div className="relative w-full h-full bg-charcoal-surface group overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-surface-variant to-studio-black flex items-center justify-center opacity-50">
            <div className="flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-outline text-[48px]">videocam_off</span>
              <span className="text-data-mono-sm font-data-mono-sm text-outline">SIGNAL LOST</span>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="text-data-mono-sm font-data-mono-sm text-data-white bg-studio-black/80 px-2 py-1 ghost-border">
                CAM_04_EXT
              </span>
              <span className="text-data-mono-sm font-data-mono-sm text-outline bg-studio-black/80 px-2 py-1 ghost-border">
                OFFLINE
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
