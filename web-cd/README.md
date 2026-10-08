# CD.Tech Website

Responsive corporate website for CD.Tech built with **Nuxt 3** (Vue SSR).

## Products Showcased
- 工业拓扑图 (Industrial Topology)
- 3D模型展示 (3D Model Viewer)
- 储能大屏 (Energy Storage Dashboard)
- 英语口语 App/小程序 (English Speaking AI App)

## Tech Stack
- Nuxt 3 (SSR)
- Vue 3 + TypeScript
- CSS Variables (dark theme)
- Orbitron + Noto Sans SC fonts

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Structure

```
pages/
  index.vue              # Home page
  about.vue              # About page
  contact.vue            # Contact page
  products/
    topology.vue         # Industrial topology
    3d-model.vue         # 3D model viewer
    energy-screen.vue    # Energy dashboard
    english-app.vue      # English speaking app
components/
  AppNav.vue             # Navigation
  AppFooter.vue          # Footer
  ProductCTA.vue         # Product CTA block
layouts/
  default.vue            # Main layout
assets/css/
  main.css               # Global styles & CSS variables
```
