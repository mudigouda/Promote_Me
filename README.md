# Promote_Me

Omnichannel marketing platform starter for CRM, campaigns, WhatsApp/social/email adapters, calling hooks, location-aware segmentation, automations, AI assistant tools, and analytics.

## Run
1. `cp .env.example .env`
2. `docker compose up -d`
3. `npm install`
4. `npm run dev`
5. Open http://localhost:3000

The starter uses mock providers by default. Replace provider adapters with official APIs and configure credentials in environment variables. Do not use it for spam; obtain consent and comply with each platform's policies.

## Included
- Responsive Next.js/TypeScript admin UI
- PostgreSQL + Prisma schema
- Redis/BullMQ worker foundation
- CRM/contact/location data model
- Campaign/scheduling data model
- Multi-channel adapter interfaces
- AI assistant tool layer
- Calling/telephony adapter interface
- Docker Compose
