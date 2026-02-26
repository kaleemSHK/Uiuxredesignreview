# Police CAD System — Architecture

## Overview

Production-grade Computer-Aided Dispatch (CAD) for law enforcement: real-time incident management, unit dispatching, GPS tracking (AVL), dispatcher dashboard, officer MDT, and command analytics.

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CLIENTS                                            │
├─────────────────┬─────────────────────────────┬─────────────────────────────┤
│ Dispatcher Web  │  Officer MDT (Flutter)      │  Command Center (React)     │
│ React + Tailwind│  Mobile/Tablet              │  Analytics Dashboard        │
│ Mapbox/Map      │  Offline sync               │  Heatmaps, Reports          │
└────────┬────────┴──────────────┬──────────────┴──────────────┬───────────────┘
         │                       │                             │
         │  HTTPS/WSS            │  HTTPS/WSS                  │  HTTPS
         ▼                       ▼                             ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     REVERSE PROXY / LOAD BALANCER                            │
└─────────────────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         BACKEND (NestJS)                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│  REST API          │  WebSocket Gateway (Socket.io)  │  Auth (JWT + RBAC)    │
│  Incidents         │  Real-time: units, incidents   │  Roles: Admin,         │
│  Units / Dispatch  │  GPS stream, panic, messages    │  Dispatcher, Officer,  │
│  Reports / Audit   │  Redis Adapter (scale)        │  Command               │
└────────┬───────────┴──────────────┬────────────────┴───────────────┬───────┘
         │                            │                                │
         ▼                            ▼                                ▼
┌─────────────────┐    ┌─────────────────────────┐    ┌─────────────────────┐
│  PostgreSQL     │    │  Redis                  │    │  Object Storage     │
│  + PostGIS      │    │  Cache + Pub/Sub        │    │  (Reports/Exports)  │
│  Primary data   │    │  Session, real-time     │    │  Optional S3/local   │
└─────────────────┘    └─────────────────────────┘    └─────────────────────┘
```

## Core Flows

1. **Incident creation** — Dispatcher creates incident (type, priority, location). API persists to PostgreSQL; WebSocket broadcasts to dashboards.
2. **Dispatch** — Dispatch engine finds nearest available unit (PostGIS distance). Assign via API; WebSocket notifies officer MDT and updates map.
3. **GPS (AVL)** — MDT sends location every 2–5s via WebSocket; backend writes to `gps_logs` and Redis; dispatcher map consumes stream.
4. **Panic** — Officer triggers panic; WebSocket event → backend → broadcast to dispatchers + command; audit log.

## Security

- **Auth:** JWT access (short-lived) + refresh tokens; RBAC per route.
- **Transport:** TLS only in production; API keys for server-to-server.
- **Data:** Passwords bcrypt; PII/PHI considerations for audit; input validation (class-validator); rate limiting (throttler).
- **Audit:** All mutations logged (who, what, when) in `audit_logs`.

## Scalability

- **Horizontal:** Stateless API; WebSocket scaling via Redis adapter (Socket.io).
- **Reads:** Redis cache for hot data; read replicas for reporting.
- **Geo:** PostGIS indexes on `ST_MakePoint(lng, lat)` for nearest-unit queries.

For **UI/UX and enterprise architecture improvements** (event-driven, message queue, scaling roadmap, design system), see [IMPROVEMENT_PLAN.md](./IMPROVEMENT_PLAN.md).

## Technology Choices

| Layer      | Choice        | Rationale |
|-----------|---------------|------------|
| Backend   | NestJS        | TypeScript, modular, WebSocket, guards, DI |
| DB        | PostgreSQL + PostGIS | ACID, geo queries, mature |
| Cache/PubSub | Redis     | Session, pub/sub for multi-instance WS |
| Frontend  | React + Tailwind | Fast UI, real-time state |
| Map       | Mapbox GL JS | Performance, styling, offline tiles |
| Mobile    | Flutter      | Single codebase, offline, native perf |
| Containers| Docker        | Consistent dev/prod, cloud-ready |
