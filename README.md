# Province Safe City - Police CAD System

A professional-grade Computer-Aided Dispatch (CAD) system for province-wide emergency response operations, designed for real police control rooms with focus on speed, clarity, and real-time operations.

## 🚨 Project Overview

This is a **Province Safe City police CAD system** currently in development phase for testing with real dispatchers before production deployment. The system supports multi-city emergency response coordination across 5 cities with dedicated interfaces for different operational roles.

## 🏗️ Architecture

### Frontend Stack
- **React 18.3.1** - UI Framework
- **TypeScript** - Type safety
- **React Router 7** - Data-mode routing
- **Tailwind CSS v4** - Styling framework
- **shadcn/ui** - Component library with Radix UI primitives
- **Lucide React** - Icon system
- **Recharts** - Data visualization
- **Vite 6** - Build tool

### Backend Architecture (Integration Ready)
- **NestJS** - Backend framework
- **WebSocket (Socket.io)** - Real-time communication
- **PostgreSQL + PostGIS** - Database with geospatial support
- **Redis** - Caching and real-time data
- **Mapbox GL JS** - Map rendering and GPS tracking

### Key Features
- ✅ Real-time GPS tracking (AVL - Automatic Vehicle Location)
- ✅ Panic button integration
- ✅ Role-based access control (Admin, Dispatcher, Officer, Command)
- ✅ Multi-client support (Dispatcher Web, Officer MDT, Command Center)
- ✅ WebSocket-ready for live updates

---

## 📁 Project Structure

```
police-cad-system/
├── src/
│   ├── app/
│   │   ├── components/          # React components
│   │   │   ├── ui/              # shadcn/ui components (50+ components)
│   │   │   ├── Layout.tsx       # Main layout wrapper with sidebar
│   │   │   ├── WebSocketIndicator.tsx
│   │   │   └── figma/
│   │   │       └── ImageWithFallback.tsx
│   │   │
│   │   ├── pages/               # Route pages (role-specific)
│   │   │   ├── CallCenter.tsx       # 112 Emergency Call Handler
│   │   │   ├── DispatchCenter.tsx   # City Dispatcher Interface
│   │   │   ├── Supervisor.tsx       # Supervisor Monitoring
│   │   │   ├── Incidents.tsx        # Incident Management + Dispatch Follow-Up
│   │   │   ├── Units.tsx            # Unit Management
│   │   │   ├── OfficerMDT.tsx       # Mobile Data Terminal
│   │   │   ├── Dashboard.tsx        # Main Dashboard
│   │   │   ├── Analytics.tsx        # Analytics & Reports
│   │   │   ├── Reports.tsx          # Report Generation
│   │   │   └── Administration.tsx   # System Administration
│   │   │
│   │   ├── App.tsx              # Root component
│   │   └── routes.tsx           # React Router configuration
│   │
│   ├── imports/                 # Documentation & requirements
│   │   ├── police-cad-architecture.md
│   │   ├── police-cad-redesign.md
│   │   └── province-safe-city-cad.md
│   │
│   ├── styles/
│   │   ├── index.css            # Global styles
│   │   ├── tailwind.css         # Tailwind imports
│   │   ├── theme.css            # Design tokens & CSS variables
│   │   └── fonts.css            # Font imports
│   │
│   └── main.tsx                 # App entry point
│
├── package.json
├── vite.config.ts
├── postcss.config.mjs
└── README.md
```

---

## 🎯 Role-Based Interfaces

### 1. **Call Center (112 Operator)** 📞
**File:** `/src/app/pages/CallCenter.tsx`

Emergency call handler interface with 3-panel layout:
- **LEFT:** Incoming calls queue with priority indicators
- **CENTER:** Active call panel with timer and controls
- **RIGHT:** Fast incident creation (target: <15 seconds)

**Features:**
- Large incoming call popup (impossible to miss)
- Call timer and mute/speaker controls
- Quick note buttons (Calm, Distressed, Ambulance, Translation)
- Pre-filled incident form from caller location
- Direct dispatch to dispatcher after incident creation

---

### 2. **Dispatch Center** 🚓
**File:** `/src/app/pages/DispatchCenter.tsx`

Professional emergency command center for city-level dispatchers:

**Layout:**
- **TOP:** Status bar with city stats and real-time clock
- **LEFT:** Call handling panel with active calls
- **CENTER:** Incident creation/dispatch panel (max 2 clicks)
- **RIGHT:** Live map panel (ready for Mapbox GL JS)
- **BOTTOM:** Activity queues (pending, enroute, on scene)

**Key Features:**
- Maximum 2 clicks to create incidents
- 1 click to dispatch units
- Real-time unit status monitoring
- Panic alert system
- Quick action buttons for common operations

---

### 3. **Supervisor Dashboard** 👮
**File:** `/src/app/pages/Supervisor.tsx`

Real-time monitoring and override capabilities:
- Live dispatcher performance metrics
- Active calls overview
- Unit availability status
- Response time tracking
- Override dispatch authority
- City-wide incident monitoring

---

### 4. **Dispatch Follow-Up Panel** 📊
**File:** `/src/app/pages/Incidents.tsx`

Comprehensive incident tracking system:

**Features:**
1. **Assigned Units List**
   - Unit call sign and officers
   - Real-time status (PENDING, ACCEPTED, ENROUTE, ON SCENE)
   - Response time counter (MM:SS)
   - Backup unit indicators

2. **Escalation Controls**
   - Send Backup (orange)
   - Supervisor Override (purple)
   - Escalate Priority (red)

3. **Timeline Section**
   - Chronological dispatch events
   - Event icons and timestamps
   - User attribution

4. **Warning Indicators**
   - NO RESPONSE (>5 min pending)
   - DELAYED ENROUTE (>3 min accepted)
   - PANIC ALERT (officer panic button)

**Color System:**
- 🔴 **Red** = Emergency/Critical
- 🟡 **Yellow** = Enroute
- 🟢 **Green** = On Scene
- 🟠 **Orange** = Escalation/Backup
- ⚪ **Grey** = Pending

---

## 🎨 Design System

### Theme
- **Dark Command Center** theme optimized for 24/7 control room operations
- High contrast colors for critical information
- Large readable fonts (operational, not decorative)
- Professional emergency services aesthetic

### Colors
```css
/* Status Colors */
--emergency: red-600
--warning: orange-600
--active: yellow-600
--success: green-600
--neutral: slate-600
--info: blue-600

/* Background */
--bg-primary: slate-950
--bg-secondary: slate-900
--bg-tertiary: slate-800
```

### Typography
- System font stack for readability
- Large font sizes for control room viewing distance
- Monospace for call signs and time displays
- Bold weights for critical information

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Environment Setup

For production deployment, configure:
- WebSocket server URL (Socket.io)
- Mapbox API token
- Backend API endpoints
- PostgreSQL connection string

---

## 🔌 WebSocket Integration

The system is ready for real-time WebSocket integration:

```typescript
// Example WebSocket events to implement
socket.on('incoming_call', (data) => { /* Handle incoming call */ });
socket.on('unit_status_update', (data) => { /* Update unit status */ });
socket.on('panic_alert', (data) => { /* Handle panic button */ });
socket.on('gps_update', (data) => { /* Update unit location */ });
socket.on('incident_created', (data) => { /* Notify dispatchers */ });
```

**File:** `/src/app/components/WebSocketIndicator.tsx` - Connection status indicator

---

## 📱 Client Types

### 1. **Dispatcher Web** (Current Implementation)
- CallCenter.tsx - 112 operators
- DispatchCenter.tsx - City dispatchers
- Supervisor.tsx - Supervisory staff

### 2. **Officer MDT** (Mobile Data Terminal)
**File:** `/src/app/pages/OfficerMDT.tsx`
- In-vehicle interface for officers
- Incident details and navigation
- Status updates (Available, Enroute, On Scene, Busy)
- Panic button
- Communication with dispatch

### 3. **Command Center** (Province Level)
- Province-wide monitoring (5 cities)
- Incidents per city dashboard
- Escalation management
- High-level analytics

---

## 🔐 Role-Based Access Control (RBAC)

### Roles
1. **Admin** - Full system access
2. **Dispatcher** - Incident creation and unit dispatch
3. **Officer** - Field operations and status updates
4. **Command** - Monitoring and strategic oversight
5. **Call Center Operator** - Call handling and incident creation

### Permissions (To Implement)
- Create incidents
- Dispatch units
- Override assignments
- Escalate priority
- View analytics
- System administration

---

## 📊 Data Models (Ready for Backend)

### Incident
```typescript
{
  id: string;
  type: 'medical' | 'fire' | 'crime' | 'accident' | 'disturbance' | 'theft' | 'assault' | 'suspicious';
  priority: 'critical' | 'high' | 'medium' | 'low';
  status: 'new' | 'assigned' | 'enroute' | 'on_scene' | 'completed' | 'closed';
  location: { lat: number; lng: number; address: string };
  caller: { name?: string; phone: string };
  assignedUnits: string[];
  timeline: TimelineEvent[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Unit
```typescript
{
  id: string;
  callSign: string;
  type: 'patrol' | 'supervisor' | 'k9' | 'motorcycle' | 'detective';
  status: 'available' | 'dispatched' | 'enroute' | 'on_scene' | 'busy' | 'offline';
  officers: Officer[];
  location: { lat: number; lng: number };
  currentIncident?: string;
  hasPanic: boolean;
}
```

---

## 🗺️ Map Integration (Mapbox GL JS)

Ready for Mapbox integration in:
- `/src/app/pages/DispatchCenter.tsx` - Right panel map
- Real-time GPS tracking (AVL)
- Unit markers with status colors
- Incident location markers
- Heat maps for crime patterns
- Route optimization

---

## 🧪 Testing with Real Dispatchers

This UI will be tested with real dispatchers before production. Design priorities:
1. **Speed** - Minimal clicks to complete critical actions
2. **Clarity** - No ambiguity in status or information
3. **Real-time** - Instant updates via WebSocket
4. **Stress Usability** - Works under high-pressure emergency situations

---

## 📈 Performance Targets

- **Incident Creation:** <15 seconds (Call Center)
- **Unit Dispatch:** 1-2 clicks maximum
- **Response Time Visibility:** Real-time with warnings
- **WebSocket Latency:** <100ms for critical updates
- **Map Rendering:** 60fps with 100+ units

---

## 🛠️ Key Technologies

| Category | Technology |
|----------|-----------|
| UI Framework | React 18 + TypeScript |
| Routing | React Router 7 (Data Mode) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Charts | Recharts |
| Real-time | Socket.io (Ready) |
| Maps | Mapbox GL JS (Ready) |
| Forms | React Hook Form |
| State | React Hooks (Zustand for global state recommended) |

---

## 📝 Future Enhancements

- [ ] Province Command Screen (5-city monitoring)
- [ ] WebSocket integration with NestJS backend
- [ ] Mapbox GL JS map implementation
- [ ] Audio alerts for panic buttons
- [ ] Call recording playback (Asterisk integration)
- [ ] Advanced analytics dashboard
- [ ] Mobile app for officers (React Native)
- [ ] SMS/Push notifications
- [ ] Multi-language support (Arabic/English)
- [ ] Dark/Light theme toggle (currently dark only)

---

## 📞 Support & Documentation

For backend integration, see:
- `/src/imports/police-cad-architecture.md` - System architecture
- `/src/imports/police-cad-redesign.md` - Design requirements
- `/src/imports/province-safe-city-cad.md` - Province system specs

---

## ⚠️ Important Notes

1. **Not for Production PII** - Figma Make is not designed for collecting Personally Identifiable Information or securing sensitive data. For production, deploy to secure infrastructure.

2. **Real Control Room Design** - This interface matches real police control rooms like Dubai Police and London MET, focusing on operational efficiency over visual appeal.

3. **Stress Testing Required** - Must be tested under simulated high-call-volume scenarios before deployment.

---

## 📄 License

This is a private police CAD system for Province Safe City project.

---

## 👥 Development Team

Built for real police control room operations with input from emergency services professionals.

**Last Updated:** February 26, 2026
