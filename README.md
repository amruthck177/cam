# NexView AI Platform (Lumen AI)

A modern, high-performance web application built with **Next.js 14+ (App Router)** and **Tailwind CSS v4** representing a cutting-edge security and AI monitoring dashboard. This project was generated from a Stitch design, capturing a "Studio Precision" aesthetic with dynamic UI elements and deep cinematic styling.

## 🚀 Features

- **Live Monitoring Dashboard (`/live`)**
  - Interactive multi-camera video feed grid (1x1 and 2x2 layouts).
  - Simulated real-time AI bounding box overlays and target tracking indicators.
  - Telemetry panel tracking system FPS, latency, GPU load, and scrolling incident logs.

- **Advanced Analytics (`/analytics`)**
  - "Studio Dark" themed data visualizations.
  - Activity density charts and traffic flow heatmaps using SVG and CSS radial gradients.
  - Granular AI confidence metrics for object recognition and trajectory prediction.

- **Event Archive (`/archive`)**
  - Sortable and filterable grid of recorded incident clips.
  - Custom `EventModal` video player overlay mimicking premium clip review interfaces with timeline scrubbing UI and export actions.

- **Platform Settings (`/settings`)**
  - Configuration interface for adjusting AI engine tracking parameters.
  - Connected hardware management table with live-pulsing connection statuses.
  - Interactive toast notifications for user actions.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (Custom `@theme` mapping for precise design tokens)
- **Language**: TypeScript
- **Icons**: Google Material Symbols
- **Fonts**: Noto Serif, Inter, JetBrains Mono (Next.js optimized loaders)
- **Testing**: Playwright (E2E)

## 🎨 Design System

The application uses a custom "Studio Dark" design system engineered directly into Tailwind v4's CSS architecture:
- **Colors**: `studio-black` (backgrounds), `electric-blue` (highlights), `charcoal-surface` (panels).
- **Typography**: Precision cinematography feel combining serifs for headers (`Noto Serif`) and monospaced fonts for data/metrics (`JetBrains Mono`).
- **Effects**: Glassmorphism (`backdrop-blur`), intricate drop shadows simulating glowing LEDs, and micro-animations for interactive hardware states.

## 📦 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live feed monitoring dashboard.

## 🧪 Testing

This project includes E2E testing configured via **Playwright**.

```bash
npx playwright test
```

## 🌐 Roadmap to Production

To take this from a static UI to a fully functional real-world platform:
1. **Video Ingestion**: Integrate RTSP streams transcoded to WebRTC (via MediaSoup, LiveKit) for actual live camera feeds.
2. **AI Inference Engine**: Connect a Python backend (YOLOv8, OpenCV) via WebSockets to stream live bounding box coordinates and telemetry data over the video.
3. **Database**: Implement PostgreSQL/Prisma or Firebase to persist platform settings and historical archive events.
4. **Authentication**: Lock down the dashboard using NextAuth.js or Clerk to ensure only authorized administrators can access the system.

## 📝 License

MIT
