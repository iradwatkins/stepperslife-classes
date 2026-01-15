# SteppersLife Classes

Dance instructor portal for the SteppersLife platform.

**Domain:** classes.stepperslife.com
**Port:** 3016
**Role:** Creator portal for dance instructors

## Purpose

Dance instructors use this portal to:
- Create and schedule classes
- Manage class attendance via QR codes
- Track student reviews and ratings
- View analytics and earnings
- Process split payments

## Tech Stack

- Next.js 16 + React 19 + TypeScript
- Convex (shared backend)
- Stripe + PayPal payments
- Tailwind CSS 4 + Radix UI
- QR code generation/scanning

## Development

```bash
npm install
npm run dev          # http://localhost:3016
```

## Build & Deploy

```bash
npm run build:with-convex   # Build with Convex deploy
```

Deploy via Coolify, then purge Cloudflare cache.

## Testing

```bash
npm run test              # Unit tests
npm run test:e2e          # E2E tests
npm run test:payment:all  # Payment tests
```

## Related

- Platform docs: `~/.claude/references/stepperslife-platform.md`
- Main aggregator: stepperslife-landing
