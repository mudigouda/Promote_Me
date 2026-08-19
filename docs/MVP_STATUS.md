# Promote_Me MVP status

## Core workflow
Find prospects -> save/import -> manage contacts -> create campaign -> follow up -> convert -> measure.

## Verified repository foundations
- PostgreSQL + Prisma schema is present.
- Seed script and database commands are present.
- Authentication/session and tenant membership helpers are present.
- Contacts and campaigns have persistence-backed API routes.
- Business discovery API is provider-neutral and intended for permitted data sources.
- Deals, tasks and documents now have persistence-backed API routes.

## Deferred
Advanced AI, calling/transcription, A/B testing, advanced analytics, complex approvals, and enterprise workflow features remain optional and should not block the promotion MVP.

## Production checklist
- Configure DATABASE_URL.
- Run `npm run db:generate`.
- Run `npm run db:push` for the current schema.
- Run `npm run db:seed` for demo data.
- Run `npm run check` before deployment.
- Configure licensed messaging/business-discovery providers before real outreach.
