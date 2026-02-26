# 📁 Province Safe City CAD - Folder Structure

```
police-cad-system/
│
├── 📄 README.md                          # Project documentation
├── 📄 package.json                       # Dependencies & scripts
├── 📄 vite.config.ts                     # Vite build configuration
├── 📄 postcss.config.mjs                 # PostCSS config
├── 📄 ATTRIBUTIONS.md                    # Third-party attributions
│
├── 📂 guidelines/
│   └── Guidelines.md                     # Development guidelines
│
├── 📂 src/
│   │
│   ├── 📄 main.tsx                       # Application entry point
│   │
│   ├── 📂 app/
│   │   │
│   │   ├── 📄 App.tsx                    # Root component (RouterProvider)
│   │   ├── 📄 routes.tsx                 # React Router configuration
│   │   │
│   │   ├── 📂 components/
│   │   │   │
│   │   │   ├── 📄 Layout.tsx             # Main layout with sidebar navigation
│   │   │   ├── 📄 WebSocketIndicator.tsx # WebSocket connection status
│   │   │   │
│   │   │   ├── 📂 figma/
│   │   │   │   └── 📄 ImageWithFallback.tsx  # Protected system file
│   │   │   │
│   │   │   └── 📂 ui/                    # shadcn/ui components (50+ files)
│   │   │       ├── 📄 accordion.tsx
│   │   │       ├── 📄 alert-dialog.tsx
│   │   │       ├── 📄 alert.tsx
│   │   │       ├── 📄 aspect-ratio.tsx
│   │   │       ├── 📄 avatar.tsx
│   │   │       ├── 📄 badge.tsx
│   │   │       ├── 📄 breadcrumb.tsx
│   │   │       ├── 📄 button.tsx         # ⭐ Core button component
│   │   │       ├── 📄 calendar.tsx
│   │   │       ├── 📄 card.tsx
│   │   │       ├── 📄 carousel.tsx
│   │   │       ├── 📄 chart.tsx
│   │   │       ├── 📄 checkbox.tsx
│   │   │       ├── 📄 collapsible.tsx
│   │   │       ├── 📄 command.tsx
│   │   │       ├── 📄 context-menu.tsx
│   │   │       ├── 📄 dialog.tsx
│   │   │       ├── 📄 drawer.tsx
│   │   │       ├── 📄 dropdown-menu.tsx
│   │   │       ├── 📄 form.tsx
│   │   │       ├── 📄 hover-card.tsx
│   │   │       ├── 📄 input-otp.tsx
│   │   │       ├── 📄 input.tsx          # ⭐ Core input component
│   │   │       ├── 📄 label.tsx
│   │   │       ├── 📄 menubar.tsx
│   │   │       ├── 📄 navigation-menu.tsx
│   │   │       ├── 📄 pagination.tsx
│   │   │       ├── 📄 popover.tsx
│   │   │       ├── 📄 progress.tsx
│   │   │       ├── 📄 radio-group.tsx
│   │   │       ├── 📄 resizable.tsx
│   │   │       ├── 📄 scroll-area.tsx
│   │   │       ├── 📄 select.tsx         # ⭐ Core select component
│   │   │       ├── 📄 separator.tsx
│   │   │       ├── 📄 sheet.tsx
│   │   │       ├── 📄 sidebar.tsx
│   │   │       ├── 📄 skeleton.tsx
│   │   │       ├── 📄 slider.tsx
│   │   │       ├── 📄 sonner.tsx
│   │   │       ├── 📄 switch.tsx
│   │   │       ├── 📄 table.tsx
│   │   │       ├── 📄 tabs.tsx
│   │   │       ├── 📄 textarea.tsx
│   │   │       ├── 📄 toggle-group.tsx
│   │   │       ├── 📄 toggle.tsx
│   │   │       ├── 📄 tooltip.tsx
│   │   │       ├── 📄 use-mobile.ts      # Mobile detection hook
│   │   │       └── 📄 utils.ts           # ⭐ Utility functions (cn)
│   │   │
│   │   └── 📂 pages/                     # 🎯 ROLE-BASED SCREENS
│   │       │
│   │       ├── 📄 CallCenter.tsx         # ⭐⭐⭐ 112 Emergency Call Handler
│   │       │                             #   - Incoming calls queue
│   │       │                             #   - Active call panel
│   │       │                             #   - Fast incident creation (<15s)
│   │       │                             #   - Large incoming call popup
│   │       │
│   │       ├── 📄 DispatchCenter.tsx     # ⭐⭐⭐ City Dispatcher Interface
│   │       │                             #   - Top status bar
│   │       │                             #   - Left call handling
│   │       │                             #   - Center incident dispatch
│   │       │                             #   - Right live map
│   │       │                             #   - Bottom activity queues
│   │       │
│   │       ├── 📄 Supervisor.tsx         # ⭐⭐⭐ Supervisor Dashboard
│   │       │                             #   - Live calls monitoring
│   │       │                             #   - Dispatcher performance
│   │       │                             #   - Override capabilities
│   │       │                             #   - Response time metrics
│   │       │
│   │       ├── 📄 Incidents.tsx          # ⭐⭐⭐ Incident Management
│   │       │                             #   - Incidents table
│   │       │                             #   - Dispatch Follow-Up Panel:
│   │       │                             #     * Assigned units list
│   │       │                             #     * Escalation controls
│   │       │                             #     * Timeline
│   │       │                             #     * Warning indicators
│   │       │
│   │       ├── 📄 Units.tsx              # ⭐ Unit Management
│   │       │                             #   - Unit roster
│   │       │                             #   - Status tracking
│   │       │
│   │       ├── 📄 OfficerMDT.tsx         # ⭐ Mobile Data Terminal
│   │       │                             #   - Officer field interface
│   │       │                             #   - Status updates
│   │       │                             #   - Incident details
│   │       │
│   │       ├── 📄 Dashboard.tsx          # Main Dashboard
│   │       ├── 📄 Analytics.tsx          # Analytics & Metrics
│   │       ├── 📄 Reports.tsx            # Report Generation
│   │       └── 📄 Administration.tsx     # System Administration
│   │
│   ├── 📂 imports/                       # 📋 Documentation & Requirements
│   │   ├── 📄 police-cad-architecture.md     # System architecture specs
│   │   ├── 📄 police-cad-redesign.md         # Design requirements
│   │   └── 📄 province-safe-city-cad.md      # ⭐ Province system specs
│   │
│   └── 📂 styles/
│       ├── 📄 index.css                  # Global styles (imports all)
│       ├── 📄 tailwind.css               # Tailwind v4 imports
│       ├── 📄 theme.css                  # Design tokens & CSS variables
│       └── 📄 fonts.css                  # Font imports
│
└── 📂 node_modules/                      # Dependencies (auto-generated)


═══════════════════════════════════════════════════════════════
📊 STATISTICS
═══════════════════════════════════════════════════════════════

Total Files: ~90+
  - Pages: 10 role-based screens
  - Components: 50+ UI components (shadcn/ui)
  - Styles: 4 CSS files
  - Config: 3 files
  - Documentation: 4 files

Key Technologies:
  ✅ React 18.3.1 + TypeScript
  ✅ React Router 7 (Data Mode)
  ✅ Tailwind CSS v4
  ✅ shadcn/ui + Radix UI
  ✅ Lucide React (Icons)
  ✅ Recharts (Charts)
  ✅ Motion (Animations)
  ✅ Vite 6 (Build Tool)

Backend Integration Ready:
  ⏳ WebSocket (Socket.io) - indicator component ready
  ⏳ Mapbox GL JS - map panels ready
  ⏳ NestJS API - fetch calls ready
  ⏳ PostgreSQL + PostGIS - data models ready

═══════════════════════════════════════════════════════════════
🎯 CORE SCREENS (Production Ready)
═══════════════════════════════════════════════════════════════

1. CallCenter.tsx          - 112 Emergency Call Handler
2. DispatchCenter.tsx      - City Dispatcher Command Center  
3. Supervisor.tsx          - Supervisor Real-time Monitoring
4. Incidents.tsx           - Incident Management + Follow-Up Panel

═══════════════════════════════════════════════════════════════
🔜 TO BE IMPLEMENTED
═══════════════════════════════════════════════════════════════

- Province Command Screen (5-city monitoring)
- WebSocket real-time integration
- Mapbox GL JS map implementation
- Audio alerts for panic buttons
- Advanced analytics dashboard
```
