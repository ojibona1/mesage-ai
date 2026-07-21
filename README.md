# MesageAI

Multi-channel business AI platform. Autonomous AI agents serve businesses across WhatsApp, Telegram, and web chat with per-business persona switching, tools, skills, and vector search.

## Architecture

```
backend/       # Hono + Baileys API server
  src/
    routes/    # REST API endpoints
    pipeline/  # AI processing, tools, skills
    whatsapp/  # Baileys multi-session manager
  data/        # SQLite schemas and migrations
frontend/      # Next.js dashboard
  src/
    app/       # Route pages (dashboard, ai, auth)
    components/# UI components
  public/
```

## Stack
Hono, Baileys, TypeScript, SQLite, Next.js, Tailwind, Sage Inference
