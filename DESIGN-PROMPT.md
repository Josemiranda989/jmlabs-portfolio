# Design AI Prompt — jmlabs.app Portfolio

> **Cómo usarlo**: copiar TODO el contenido debajo de la línea `---PROMPT START---` hasta `---PROMPT END---` y pegarlo en tu IA de diseño preferida (v0.dev, Lovable, Bolt.new, Claude, ChatGPT, Stitch). Si el tool acepta archivos, adjuntar también `BRIEF.md` como contexto extendido.

> **Output esperado**: HTML + Tailwind CSS listos para adaptar a Astro. Dark mode default. Bilingüe (ES/EN). Mobile-first.

---PROMPT START---

# Role

You are a senior product designer who specializes in developer portfolios. You have shipped design work at the caliber of Brittany Chiang's site, Lee Robinson's blog, and Paco Coursey's portfolio. You deeply understand what signals "this dev ships real product" vs "this dev just finished a bootcamp."

# Context

I am José Miranda. I'm a full-stack developer pivoting toward AI-focused product roles. I need a complete portfolio website at **jmlabs.app** that reflects my actual current level (4 years of shipping, AI integrations, own infra) — NOT my junior-dev level portfolio from 2 years ago.

My story in one line:
> "I went from Occupational Safety engineer to building AI-integrated products with my own self-hosted infrastructure."

## Who's my audience

- **Primary**: Hiring managers and recruiters at product SaaS/AI companies (think: AI-first startups, tools-for-devs, product engineering teams)
- **Secondary**: Freelance clients who need end-to-end ownership (dev + deploy + infra)
- **Tertiary**: Fellow developers who might refer me

## What the site must achieve

1. Convey that I build real products (not just toy projects)
2. Showcase AI integration experience (real Gemini API work, prompt engineering, not "I wrapped ChatGPT")
3. Signal infrastructure ownership (self-hosted, Cloudflare Zero Trust)
4. Reflect my unique combo: dev + educator + maker
5. Convert visitors into: (a) demo checkers, (b) email/LinkedIn contacts

# Deliverables

Produce in order:

## 1. Design system
- Color palette (dark mode default + light mode variant)
- Typography scale (serif + sans-serif)
- Spacing system (8px base)
- Component tokens (buttons, cards, links, nav)

## 2. Full portfolio page (long-scroll, single page)
HTML + Tailwind CSS, semantic markup, mobile-first, responsive breakpoints at sm/md/lg/xl.
Should be easily portable to Astro (no complex JS frameworks).

## 3. Bilingual structure
- ES as default, EN via toggle in nav
- URLs: `/` (ES) and `/en` (EN)
- Locale-aware `lang` attribute on `<html>`

## 4. Dark/light mode toggle
Default: dark. Toggle visible in nav. Remember preference via `localStorage`.

# Tech stack (non-negotiable)

- **Framework**: Astro (you write in HTML+Tailwind, I'll adapt to Astro components)
- **Styling**: Tailwind CSS v4
- **Deploy**: Cloudflare Pages
- **Fonts**: Self-hosted. Suggestions welcome (e.g., Fraunces, Newsreader, or Editorial New for serif; Geist, Inter, or General Sans for sans-serif)
- **No**: React, Next.js, Vue. No heavy JS frameworks. Pure HTML + Tailwind + minimal vanilla JS for toggles.
- **Performance budget**: <200KB initial JS. Lighthouse Performance 95+, Accessibility 100, SEO 100.

# Persona summary

- **Name**: José Miranda
- **Age**: 32
- **Location**: Aguilares, Tucumán, Argentina (remote-friendly)
- **Current roles**:
  - **Pulpou** (Nov 2024-present): Web developer focused on scraping and DOM manipulation
  - **Digital House** (2022-present): Full-stack Node.js professor + Technical Community Manager
- **Side creator**: PrintAll.tuc — 3D printing studio (Klipper, Raspberry Pi, Fusion 360)
- **Previous career**: Licenciado en Higiene y Seguridad Laboral (career pivot to dev in 2021)

## Skills to highlight (organize by layer in the design)

**Frontend**: React, Next.js 16, TypeScript, Astro, Tailwind CSS, semantic HTML

**Backend**: Node.js, Prisma ORM, SQL (SQLite, MySQL, PostgreSQL), MongoDB, REST APIs, NextAuth, JWT

**AI & Data**: Google Gemini API, Groq (Llama 3.3 70B), prompt engineering, DOM manipulation, web scraping, structured data extraction

**Infra & DevOps**: Docker, docker-compose, Cloudflare (Tunnel, Access, Pages), Linux, Windows Server, n8n, Git, self-hosting

**Hardware/Maker**: 3D printing (Klipper firmware), Raspberry Pi, Fusion 360, Home Assistant

# Page structure (long-scroll, anchor-linked)

```
1. NAV (sticky)
   [jmlabs logo]  [Projects] [About] [Stack] [Contact]   [ES|EN] [☀|🌙]

2. HERO
   - Large headline: "José Miranda"
   - Subheading: "Full-stack developer construyendo productos con IA"
   - Elevator pitch (2 lines)
   - CTAs: "Ver proyectos" (primary), "Contactar" (secondary)

3. FEATURED PROJECTS (2 projects, fully-featured cards)
   - Project 1: CoachIA (anchor, bigger emphasis)
   - Project 2: Homelab Infrastructure (case study format)

4. ABOUT
   - Photo (optional placeholder if not provided)
   - Story arc (see copy below)
   - Quick facts sidebar (location, current roles, languages)

5. STACK
   - Organized by layer (Frontend / Backend / AI & Data / Infra / Hardware)
   - NOT skill bars with percentages — just clean groupings

6. TEACHING & CREATOR
   - Two columns (desktop) / stacked (mobile)
   - Digital House teaching (3+ years)
   - PrintAll.tuc (Instagram + WhatsApp links)

7. EXPERIENCE (compact timeline)
   - Vertical timeline with dates + company + role + 1-line description
   - Link to LinkedIn at the end

8. CONTACT
   - Large action buttons: Email / LinkedIn / GitHub / WhatsApp
   - NO contact form (direct links convert better)

9. FOOTER
   - Minimal. Copyright, link to source code if public, last updated timestamp.
```

# Content / Copy (use exactly or translate as needed)

## Hero

**Headline (ES)**: José Miranda
**Subheading (ES)**: Full-stack developer construyendo productos con IA

**Elevator pitch (ES)**:
> Construyo aplicaciones end-to-end con integración de IA, desde la base de datos hasta el deploy en mi propia infraestructura. También enseño a otros a hacerlo.

**Elevator pitch (EN)**:
> I build end-to-end applications with AI integration, from database to deploy on my own infrastructure. I also teach others how to do it.

## Featured Project 1 — CoachIA

**Tagline (ES)**: Coach digital personalizado con IA para entrenamientos de gym y ciclismo
**Tagline (EN)**: AI-powered personal coach for strength training and cycling workouts

**Problem (ES)**:
> Conseguir un coach personal es caro e inflexible. CoachIA genera rutinas de entrenamiento personalizadas usando IA, integra datos de Strava (ciclismo) y permite logging manual de sets/reps del gym. Pensado para atletas que combinan ciclismo + fuerza.

**Tech stack to display as chips/tags**:
Next.js 16 · TypeScript · Prisma · SQLite · Gemini API · NextAuth · Resend · Strava OAuth · Telegram Bot · Docker · Cloudflare Tunnel

**Highlights (bullet list)**:
- Prompt engineering real con Gemini (rutinas que se adaptan al progreso)
- OAuth completo con Strava (incluye refresh token handling)
- Sistema de forgot-password con JWT + Resend
- Deploy self-hosted con Cloudflare Zero Trust
- Migración de dev mode a prod mode con debugging de Turbopack

**CTAs**:
- "Ver demo live" → `https://coachia.jmlabs.app`
- "Ver código" (si es repo público — placeholder por ahora)

**Assets placeholder**: Design should include 3-4 screenshot slots (desktop dashboard, mobile view, AI-generated routine, metrics view). Use placeholder images like `/images/coachia-dashboard.png` etc.

## Featured Project 2 — Homelab Infrastructure

**Tagline (ES)**: Migración completa: de DuckDNS + Nginx Proxy Manager a Cloudflare Zero Trust en un día, sin downtime
**Tagline (EN)**: Full migration from DuckDNS + Nginx Proxy Manager to Cloudflare Zero Trust in one day, zero downtime

**Type**: Technical case study (not a traditional project — it's infrastructure ownership demonstration)

**What to show**:
- Before/After architecture diagram (placeholder — will be generated with Mermaid or SVG)
- Key metrics:
  - **7 subdominios** expuestos vía Cloudflare Tunnel
  - **0 puertos incoming** abiertos en el router
  - **US$54/año** ahorrados vs VPS alternative
  - **6 apps privadas** protegidas con Cloudflare Access + Google OAuth
  - **1 día** de implementación total

**Tech stack chips**:
Cloudflare Tunnel · Cloudflare Access · Docker · Windows Service · Raspberry Pi · Let's Encrypt · Zero Trust

**Highlights**:
- 7 subdominios routing correctos sin puertos abiertos externos
- Cloudflare Access con Google OAuth + whitelist para apps privadas (Immich, Jellyfin, Home Assistant, n8n, Portainer, Overseerr)
- Home Assistant en Raspberry Pi accesible externamente vía tunnel
- Troubleshooting real: Docker credential helper, Windows Service + cloudflared binPath

**CTAs**:
- "Leer case study completo" (expand in-line or link to blog post — future)

## About

**Story arc (ES)** — draft to polish:

> Soy un ingeniero en Higiene y Seguridad Laboral que se enamoró del código y nunca volvió.
>
> Empecé en 2021 haciendo un bootcamp de Full-stack. Hoy, 4 años después, construyo productos con IA, enseño a cientos de alumnos en Digital House, y opero mi propia infraestructura en un homelab conectado por Cloudflare Tunnel.
>
> Me muevo entre el frontend y el backend con la misma facilidad con la que troubleshooteo una impresora 3D. Me obsesionan las integraciones limpias con APIs externas, el prompt engineering aplicado, y los sistemas que sobreviven al boot sin intervención.
>
> Si estás construyendo algo que mezcla producto + IA + infra — hablemos.

**Quick facts sidebar**:
- 📍 Aguilares, Tucumán, Argentina (remote-friendly)
- 💼 Currently at Pulpou & Digital House
- 🗣️ Español (native) · English (intermediate)
- 🎓 Técnico Superior en Programación (in progress, Teclab 2024-2025)

## Experience (compact timeline)

```
Nov 2024 – Now       Pulpou                 Developer — scraping & DOM manipulation
May 2024 – Now       Digital House          Technical Community Manager
Jul 2023 – Now       Digital House          Full-stack Instructor + Content Manager
Aug 2022 – Now       PrintAll.tuc           Founder — 3D printing studio
Feb 2022 – Jul 2023  Digital House          Full-stack Node.js Instructor
Jul 2017 – Nov 2017  Jais Servicios         Occupational Safety Specialist (previous career)
```

## Teaching & Creator side (two-column section)

**Column 1 — Teaching**:
> **Digital House · 2022 – present**
> Profesor del curso Certified Tech Developer (Full-stack Node.js). Community Manager Técnico apoyando a cientos de alumnos en modalidad On-Demand. Experiencia simplificando conceptos complejos sin perder rigor técnico.

**Column 2 — Creator side**:
> **PrintAll.tuc · 2022 – present**
> Studio propio de impresión 3D. Klipper firmware, Raspberry Pi, Fusion 360, Tinkercad. Donde experimento con el lado maker cuando no estoy codeando.
> [Ver en Instagram →] [Contactar por WhatsApp →]

## Contact (large CTAs)

- 📧 **Email**: josemiranda989@gmail.com
- 💼 **LinkedIn**: linkedin.com/in/josemiranda989
- 💻 **GitHub**: (placeholder — will provide)
- 📱 **WhatsApp**: direct chat link

# Visual direction

## Style reference
Between **Brittany Chiang (brittanychiang.com)** [serious, typography-heavy, dark mode] and a slight touch of Latin American warmth. Think: "serious but warm."

**DO NOT copy Josh Comeau's site** — too playful for this professional target.

## Color palette (suggested — propose alternatives if you have better ideas)

**Dark mode (default)**:
- Background: near-black with subtle warmth (e.g., #0A0A0A or #111111)
- Surface: slightly lighter (#1A1A1A)
- Text primary: near-white (#F5F5F5)
- Text secondary: warm gray (#A3A3A3)
- Accent: warm terracotta or orange (#DC2626 or #EA580C — inspired by CoachIA's own palette)
- Links / CTAs: use accent

**Light mode**:
- Background: off-white (#FAFAFA)
- Surface: pure white (#FFFFFF)
- Text primary: near-black (#0A0A0A)
- Accent: same as dark mode

## Typography

**Serif (headlines, hero)**: Fraunces, Newsreader, or Editorial New. Self-hosted, variable font.

**Sans-serif (body, UI)**: Geist, Inter, or General Sans. Self-hosted.

**Scale**:
- Hero headline: ~clamp(3rem, 8vw, 7rem)
- Section headlines: ~clamp(2rem, 5vw, 4rem)
- Body: 1rem / 1.125rem
- Small / caption: 0.875rem

## Spacing and layout

- Generous whitespace
- Max content width: ~720px (reading) or ~1200px (grid)
- Consistent vertical rhythm
- 8px spacing grid

## Micro-interactions

- Subtle fade-ins on scroll (respecting `prefers-reduced-motion`)
- Hover states on interactive elements
- Clean focus states for keyboard navigation
- NO scroll hijacking, NO parallax, NO heavy animations

# Accessibility (non-negotiable)

- AAA contrast ratio on body text
- Full keyboard navigation
- Semantic HTML (h1 once per page, logical heading hierarchy)
- Focus visible states
- Respect `prefers-reduced-motion`
- Respect `prefers-color-scheme` for initial theme
- `alt` text on all images
- `lang` attribute on html + language-specific content blocks

# Bilingual implementation

- Default: Spanish
- Toggle: visible in nav (e.g., "ES | EN" text toggle)
- URLs: `/` = Spanish, `/en/` = English
- Persist selection in `localStorage`
- Include `hreflang` meta tags
- Don't translate: tech stack names, company names, proper nouns

# Must-haves checklist

- [ ] Hero with clear headline and elevator pitch
- [ ] 2 featured project cards with screenshots (placeholders OK)
- [ ] About section with story arc
- [ ] Skills organized by layer
- [ ] Teaching + Creator section
- [ ] Experience timeline
- [ ] Contact with 4 direct channels
- [ ] Working ES/EN toggle
- [ ] Working dark/light mode toggle
- [ ] Mobile-first responsive (320px, 768px, 1024px, 1440px breakpoints)
- [ ] Lighthouse Performance 95+, Accessibility 100
- [ ] Semantic HTML, no divitis

# Anti-patterns (do NOT do)

- ❌ Terminal emulator hero ("I am a hacker" cliché)
- ❌ Typewriter effect on headings
- ❌ 3D hero animations (Three.js)
- ❌ Scroll hijacking / snap-scroll for the whole page
- ❌ Heavy parallax effects
- ❌ Loading screens / preloaders
- ❌ Skill bars with percentages ("80% React")
- ❌ Tech logo soup dispersed randomly
- ❌ "Coming soon" for anything (only show what exists)
- ❌ Generic clichés: "passionate developer", "team player", "fast learner"
- ❌ Stock photos of "developer at laptop"
- ❌ Emoji-heavy design (use sparingly, with intent)

# Output format

Provide the result as:

1. **Design system** (CSS custom properties / Tailwind config)
2. **Full HTML page** in a single file (I'll split it into Astro components myself)
3. **Minimal vanilla JS** for:
   - ES/EN toggle
   - Dark/light mode toggle
   - Smooth scroll anchors
4. **Brief explanation** of key design decisions (paragraph max)
5. **List of assumptions made** where copy/assets were placeholders

If you produce React/Next code because that's your default — please provide HTML/Tailwind equivalent too. The final stack is Astro, so framework-specific abstractions hurt portability.

# First deliverable (if you want to iterate)

If the output will be long, start with just these to validate direction:
1. Design system (colors, typography, spacing)
2. Hero section
3. CoachIA project card (featured project, the anchor)

I'll review and then we iterate on the rest.

# Important final note

This is **not a junior developer portfolio**. It's for someone who already ships product and operates infrastructure. The design needs to reflect that maturity — without overstating. Clean, confident, content-forward. Let the work speak.

---PROMPT END---

## Tips para usar este prompt según la IA

**v0.dev / Lovable / Bolt.new** (output directo en código):
- Pegar tal cual, probablemente van a generar React. En tu caso aceptá React y después lo portás a Astro.
- Si te queda muy largo, dividilo: primero pedí solo "design system + hero", después "featured projects", después "el resto".

**Claude / ChatGPT / Sonnet** (IA chat, output flexible):
- Pegar completo. Pedir output como HTML + Tailwind primero, no React.
- Podés iterar en el mismo chat pidiendo cambios.

**Stitch / Galileo AI** (mockups visuales):
- Resumir las secciones "Visual direction" + "Page structure" + "Content" — sacá las secciones técnicas.
- Subí también screenshots de referencia (Brittany Chiang, Lee Robinson).

**Cursor / Claude Code** (dev workflow):
- Usá este prompt + el BRIEF.md como contexto. Pedí implementación directa en Astro.

## Tips para evaluar el output

Después de recibir la primera versión, preguntate:
1. ¿Se entiende **qué hace José** en los primeros 5 segundos?
2. ¿El hero **transmite madurez** o parece portfolio de junior?
3. ¿Los proyectos featured **parecen reales** y no placeholder?
4. ¿La navegación es **accesible con teclado** sin ver el mouse?
5. ¿En mobile (375px) se ve **genial**, no solo "funciona"?
6. ¿Corriendo Lighthouse da **95+ en performance**?

Si alguna respuesta es "no", iterá con el AI señalando específicamente qué mejorar.
