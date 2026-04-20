# jmlabs.app — portfolio

Portfolio personal de José Miranda. Full-stack developer con foco en productos AI + infraestructura self-hosted.

Dominio destino: **https://jmlabs.app** (apex) · deploy en Cloudflare Pages.

## Stack

- **Astro 5** — static site generator
- **Vanilla CSS** — design tokens en `:root` + custom properties, sin Tailwind
- **Google Fonts CDN** — Fraunces (serif), Geist (sans), Geist Mono (mono) — TODO: self-host vía Fontsource para privacy + perf
- **Bilingüe ES/EN** — client-side toggle via `html[lang]` + `data-i18n` spans
- **Dark mode default** — warm-tinted (`#0e0d0b`) con toggle a light
- **Accent**: terracotta `#ea580c`

## Scripts

```bash
npm install        # instalar deps
npm run dev        # dev server en http://localhost:4321
npm run build      # build estático a dist/
npm run preview    # preview del build local
```

## Estructura

```
src/
├── layouts/Layout.astro    # <head>, fonts, pre-paint theme script
├── pages/index.astro       # página única long-scroll
└── styles/global.css       # design tokens + todos los estilos
public/                     # assets estáticos (favicon TODO, OG image TODO)
```

## TODOs antes de go-live

- [ ] Confirmar/reemplazar handle de GitHub en `index.astro` (actualmente `josemiranda989`)
- [ ] Agregar favicon en `public/favicon.svg`
- [ ] Agregar OG image (1200x630) en `public/og.png` + meta tags en Layout
- [ ] Self-hostear fonts vía Fontsource (opcional — mejora privacy + perf)
- [ ] Conectar repo a Cloudflare Pages
- [ ] Apuntar apex `jmlabs.app` a Cloudflare Pages
- [ ] Lighthouse check (target: Perf 95+, A11y 100, SEO 100)
- [ ] Expandir case study del homelab (link actualmente apunta a `#`)

## Diseño original

El diseño base fue generado en Claude Design usando el prompt en `D:\Development\jmlabs-portfolio\DESIGN-PROMPT.md`. El handoff bundle exportado (HTML + chats) está en `design-handoff/` (gitignored).

## Decisiones intencionales (no accidentes)

- **Sin Tailwind**: el diseño usa un design system custom con CSS vars. Meter Tailwind solo suma toolchain sin beneficio.
- **Sin routing i18n**: toggle client-side mantiene la UX instantánea y simplifica el site. `hreflang` cubre el SEO case.
- **Mocks en lugar de screenshots reales**: CoachIA mock UI se construye con HTML/SVG inline (accesible, escalable, mantenible). Cuando haya screenshots reales, reemplazar el bloque `.mock-window` por `<img>`.
- **Tweaks panel fuera**: el diseño original traía un panel runtime de accent/serif/density — es tool interno de Claude Design, no parte de la UX de producción.
