# Promote_Me — Find → Promote → Convert → Retain

Responsive omnichannel marketing + CRM foundation. The product combines customer CRM, sales pipeline, promotion campaigns, business discovery, conversations, calling, automations, analytics and AI-ready workflows.

## Implemented in this iteration
- Responsive CRM-style web UI for desktop/tablet/mobile
- Dashboard, Contacts, Companies, Leads, Deals, Activities, Campaigns, Inbox, Calls, Automations, Business Finder, Analytics, AI Assistant and Settings navigation
- PostgreSQL/Prisma models for CRM, companies, deals, activities, campaigns, conversations, calls, automations, consent and business prospects
- REST APIs for contacts, companies, deals, campaigns, activities, dashboard stats and business prospects
- Demo database seed script
- Provider-neutral business discovery API designed for licensed/public business-data providers
- Consent fields and audit-log foundation

## Run locally
```cmd
copy .env.example .env
npm install
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```
Open http://localhost:3000.

After `npm run db:seed`, copy the printed business ID into `.env` as `DEFAULT_BUSINESS_ID`, then restart `npm run dev`.

## Product workflow
**Find prospects → capture leads → segment → create promotion → send → converse → call → convert → measure ROI → follow up → retain.**

## Integrations
Use official APIs/provider agreements for WhatsApp, Meta, X, email, SMS, telephony and AI. The repository keeps provider credentials server-side and supports mock mode while integrations are configured.

Business discovery must use sources whose terms permit the intended search, storage and export. Do not scrape restricted services or collect private personal information.
