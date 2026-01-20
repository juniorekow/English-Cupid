# English Cupid

English Cupid is a modern dating application inspired by Tinder + Badoo. This repository is a production-ready monorepo scaffold containing a Next.js frontend and a NestJS backend.

## Monorepo Structure

```
english-cupid/
├── apps/
│   ├── web/                  # Next.js frontend
│   └── api/                  # NestJS backend
├── packages/
│   ├── shared/               # Shared types/constants/utils
│   └── config/               # Shared ESLint/TS config
├── infra/                    # Deployment assets
├── .github/workflows/         # CI workflows
```

## Local Setup

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Copy environment templates:
   ```bash
   cp .env.example .env
   cp apps/web/.env.example apps/web/.env.local
   cp apps/api/.env.example apps/api/.env
   ```
3. Run both apps:
   ```bash
   pnpm dev
   ```

## Environment Variables

- Root: `NODE_ENV`
- Frontend: `NEXT_PUBLIC_*` values for API + Stripe.
- Backend: MongoDB, Redis, JWT, Stripe, and storage credentials.

## Frontend ↔ Backend Communication

The frontend uses a REST API hosted by the backend (default `http://localhost:4000`) and a Socket.IO connection for realtime messaging and presence.

## Realtime (Socket.IO)

Socket.IO is configured on the backend to manage chat rooms and presence events. The frontend connects through a shared `socket.ts` client.

## Deployment Overview

- **Frontend**: Vercel
- **Backend**: Render / Fly.io / AWS
- **Database**: MongoDB Atlas
- **Redis**: Upstash or managed Redis

## Scripts

- `pnpm dev` - run all apps
- `pnpm build` - build all apps
- `pnpm lint` - lint all apps
