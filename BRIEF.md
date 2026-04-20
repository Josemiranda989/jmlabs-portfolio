# Portfolio Brief — José Miranda (jmlabs.app)

> Documento de handoff para diseñador/IA de diseño. Contiene TODO el contexto necesario para proponer dirección visual, wireframes y mockups antes de implementación.

**Fecha**: 2026-04-20
**Dominio destino**: `https://jmlabs.app` (apex — todo el site vive acá)
**Stack técnico confirmado**: Astro + Tailwind + Cloudflare Pages (deploy automático vía GitHub)
**Idiomas**: Español (default) + Inglés (toggle visible)
**Audiencia primaria**: Recruiters y hiring managers de empresas de producto con foco en AI / full-stack. Audiencia secundaria: comunidad técnica (otros devs).

---

## 1. Quién es José Miranda

**Datos biográficos clave**:
- 32 años, basado en Aguilares, Tucumán, Argentina
- Giro de carrera: Licenciado en **Higiene y Seguridad Laboral** (2010-2017) → dev desde 2021
- Propietario de Drugstore San Cayetano (negocio familiar, desde 2007 — **no resaltar en portfolio**, contexto personal)
- **Maker**: opera PrintAll.tuc (3D printing studio) desde 2022 — Klipper, Raspberry Pi, Fusion 360, Tinkercad, Inkscape

**Rol actual**:
- **Pulpou** (Nov 2024 - presente): Desarrollador web, enfocado en **scraping y manipulación de DOM**. Expertise en extracción de datos estructurados de sitios complejos.
- **Digital House** (2022 - presente, concurrent): Profesor + Community Manager Técnico del curso Certified Tech Developer (modalidad On-Demand). Apoya a cientos de alumnos en Full-stack Node.js.

**Historial dev** (desde 2021):
- Digital House — Full-stack bootcamp (Jul-Dic 2021)
- r/Argentina-programa — Full Stack (Feb-Abr 2022)
- Teclab Instituto Técnico Superior — Técnico en Programación (2024-2025, en curso)
- Open English — inglés (2022)

**Contacto**:
- Email: josemiranda989@gmail.com
- WhatsApp: +54 381 6563940
- LinkedIn: linkedin.com/in/josemiranda989
- GitHub: (obtener URL actual del usuario antes de publicar)

---

## 2. Posicionamiento del portfolio

### Statement core

> **"Full-stack developer turned AI product builder, con ownership completo del stack — desde infraestructura hasta UI."**

### Diferenciadores únicos (lo que lo hace único vs otros devs full-stack)

1. **AI integration real en producto**: no es "hice un wrapper de ChatGPT" — integró Gemini en CoachIA para generar rutinas de entrenamiento personalizadas, con lógica de prompts pensada.
2. **Scraping y DOM manipulation expertise** (vía Pulpou): habilidad diferenciadora en pipelines de datos / AI.
3. **Ownership de infraestructura**: self-host con Cloudflare Zero Trust, Docker, Tunnel, Access. Diseñó y ejecutó una migración completa de homelab en 1 día.
4. **Experiencia educadora**: 2+ años enseñando Full-stack a alumnos de Digital House → madurez técnica y comunicativa.
5. **Background maker/hardware**: 3D printing, Klipper, Raspberry Pi. No es solo "dev de oficina" — construye cosas tangibles.
6. **Story arc**: pivot de Higiene y Seguridad → dev → profesor → AI product builder. Señal de madurez y autoaprendizaje.

### Target audience

- **Primario**: Empresas de producto SaaS/AI buscando full-stack (Nov 2025+). Roles tipo "Full-stack engineer", "AI product engineer", "Product engineer". Empresas como: Buildkite-style SaaS, startups de AI, agencias de dev con foco en data/AI.
- **Secundario**: Freelance clients que buscan alguien "end-to-end" (dev + deploy + infra).
- **Tangencial**: Otros devs que lo encuentran y podrían referirlo.

### Call to action (qué debe hacer el visitante)

En orden de prioridad:
1. **Ver CoachIA live** (demo clickeable) → el anchor
2. **Leer el case study del homelab** → credibilidad infra
3. **Contactar** (email/LinkedIn/WhatsApp)
4. **Leer el About** → conectar con la persona

---

## 3. Estructura de secciones

El portfolio vive en **una sola página long-scroll** con anchor navigation, NO un SPA multi-página. Razones:
- Un portfolio se consume top-to-bottom
- Mejor para SEO inicial
- Menos fricción

```
┌─────────────────────────────────────┐
│ NAV FIJO                            │
│ [logo jmlabs]     ES|EN   Contact   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 1. HERO                             │
│    Nombre grande + headline         │
│    Elevator pitch (2 líneas)        │
│    CTA primario: "Ver proyectos"    │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 2. FEATURED PROJECTS (2)            │
│    - CoachIA (anchor principal)     │
│    - Homelab Infrastructure         │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 3. ABOUT                            │
│    Story arc + foto                 │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 4. SKILLS / STACK                   │
│    Organizado por capa              │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 5. TEACHING & CREATOR SIDE          │
│    - Digital House (2+ años)        │
│    - PrintAll.tuc (maker context)   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 6. EXPERIENCE (timeline compacto)   │
│    Link a LinkedIn para detalle     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ 7. CONTACT                          │
│    LinkedIn / GitHub / Email / WA   │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ FOOTER                              │
└─────────────────────────────────────┘
```

---

## 4. Contenido detallado por sección

### 4.1 Hero

**Headline principal**:
- ES: "José Miranda"
- Subheading ES: "Full-stack developer construyendo productos con IA"
- Subheading EN: "Full-stack developer building AI-first products"

**Elevator pitch** (2 líneas, usar en ES y traducir):
- ES: "Construyo aplicaciones end-to-end con integración de IA, desde la base de datos hasta el deploy en mi propia infraestructura. También enseño a otros a hacerlo."
- EN: "I build end-to-end applications with AI integration, from database to deploy on my own infrastructure. I also teach others how to do it."

**CTAs**:
- Primario: "Ver proyectos" / "See projects"
- Secundario: "Contactar" / "Get in touch"

**Elementos visuales sugeridos**:
- Nombre grande, typography-heavy (estilo Brittany Chiang)
- Sutil indicador de que el sitio es bilingüe (toggle visible en nav)
- NO hero images de stock. Si hay imagen, es foto real del usuario (opcional) o algo abstract-technical.

### 4.2 Featured Projects

#### Proyecto 1: CoachIA (ANCHOR — tratar como protagonista)

**Tagline**: "Coach digital personalizado con IA para entrenamientos de gym y ciclismo"

**Stack**:
- Frontend: Next.js 16 (prod mode), TypeScript, React
- Backend: Node.js, Prisma, SQLite
- AI: Google Gemini API (generación de rutinas semanales/mensuales)
- Auth: NextAuth (credentials provider)
- Email: Resend (password reset, notificaciones)
- Integrations: Strava (OAuth2, actividades de ciclismo), Telegram Bot (notificaciones)
- Deploy: Docker + Cloudflare Tunnel en `coachia.jmlabs.app`
- DB: Prisma + SQLite con migrations

**Problema que resuelve**:
Conseguir un coach personal es caro e inflexible. CoachIA genera rutinas de entrenamiento personalizadas usando IA, integra datos de Strava (ciclismo) y permite logging manual de sets/reps del gym. Pensado para atletas que combinan ciclismo + fuerza.

**Highlights técnicos para mostrar**:
- Prompt engineering real con Gemini (rutinas que se adaptan a progreso)
- OAuth completo con Strava (incluye refresh token handling)
- Sistema de forgot-password con JWT + Resend
- Deploy self-hosted con Cloudflare Zero Trust
- Migración de dev mode → prod mode con troubleshooting de Turbopack

**Assets necesarios del usuario**:
- [ ] 3-4 screenshots: dashboard, vista de rutina, vista mobile, vista de métricas
- [ ] (Opcional pero potente) GIF o video corto de una rutina siendo generada por IA
- [ ] Demo URL: `https://coachia.jmlabs.app` (pública, con login opcional — considerar crear user demo o "Try demo")
- [ ] Link al repo si es público (o aclarar que es privado)

**CTAs por proyecto**:
- "Ver demo live" → coachia.jmlabs.app
- "Ver código" → GitHub (si público)
- "Leer case study" → expandir contenido inline

#### Proyecto 2: Homelab Infrastructure Case Study

**Tagline**: "Migración completa de infraestructura: de DuckDNS + Nginx Proxy Manager a Cloudflare Zero Trust"

**Qué mostrar**:
Este NO es un proyecto clásico — es un **case study técnico** que demuestra ownership de infraestructura, decisiones arquitectónicas y troubleshooting real.

**Highlights**:
- 7 subdominios expuestos vía Cloudflare Tunnel sin puertos abiertos en el router
- Cloudflare Access con Google OAuth + whitelist para apps privadas (Immich, Jellyfin, Home Assistant, n8n, Portainer, Overseerr)
- Home Assistant en Raspberry Pi (192.168.x.x LAN) accesible externamente vía tunnel
- Troubleshooting real: Docker credential helper roto, Windows Service + cloudflared binPath
- Cero downtime durante migración

**Formato sugerido**:
- Diagrama "before → after" de arquitectura (antes: DuckDNS + port forwarding, después: Cloudflare Tunnel, zero ports open)
- Stack visual: Docker, Cloudflare Tunnel, Cloudflare Access, Windows, Raspberry Pi
- Algunas métricas: "US$54/año ahorrados al descartar VPS", "0 puertos incoming abiertos", "7 subdominios migrados"

**Assets necesarios**:
- [ ] Diagrama de arquitectura (puede generarse con Mermaid/Excalidraw embebido o como imagen SVG)
- [ ] (Opcional) blog post más largo con el proceso completo

### 4.3 About

**Story arc sugerido (ES)** — el usuario va a pulir este copy:

> Soy un ingeniero en Higiene y Seguridad Laboral que se enamoró del código y nunca volvió.
>
> Empecé en 2021 haciendo un bootcamp de Full-stack. Hoy, 4 años después, construyo productos con IA, enseño a cientos de alumnos en Digital House, y opero mi propia infraestructura en un homelab conectado por Cloudflare Tunnel.
>
> Me muevo entre el frontend y el backend con la misma facilidad con la que troubleshooteo una impresora 3D. Me obsesionan las integraciones limpias con APIs externas, el prompt engineering aplicado, y los sistemas que sobreviven al boot sin intervención.
>
> Si estás construyendo algo que mezcla producto + IA + infra — hablemos.

**(EN version to translate from this, not re-write)**

**Elementos a incluir**:
- [ ] Foto del usuario (opcional pero recomendado — humaniza mucho)
- Story arc arriba
- Ubicación: "Aguilares, Tucumán, Argentina 🇦🇷" (posible remote)

### 4.4 Skills / Stack

**Formato**: Grid organizado por capas, iconos simples (no logos). Tipografía clara, NO abrumador.

```
FRONTEND
├── React / Next.js 16
├── TypeScript
├── Astro
├── Tailwind CSS
└── HTML / CSS semantic

BACKEND
├── Node.js
├── Prisma ORM
├── SQL (SQLite, MySQL, PostgreSQL)
├── MongoDB
├── REST APIs
└── NextAuth / JWT

AI & DATA
├── Google Gemini API
├── Groq (Llama 3.3 70B)
├── Prompt engineering
├── DOM manipulation / web scraping
└── Structured data extraction

INFRA & DEVOPS
├── Docker / docker-compose
├── Cloudflare (Tunnel, Access, Pages, Workers)
├── Linux / Windows Server
├── n8n (workflow automation)
├── Git / GitHub
└── Self-hosting (homelab)

HARDWARE & MAKER
├── 3D printing (Klipper firmware)
├── Raspberry Pi
├── Fusion 360 / Inkscape
└── Home Assistant
```

**Nota importante para la UI**:
- NO logos dispersos como guirnalda (patrón cliché)
- NO "80% React / 70% Node.js" tipo skill bars (no aportan, todos mienten)
- SÍ: agrupamiento lógico por capa, con tooltip o breve descripción opcional

### 4.5 Teaching & Creator Side

**Digital House (2022-presente)**
- Profesor del curso **Certified Tech Developer** (Full-stack Node.js)
- Actualmente **Community Manager Técnico** — soporte a alumnos en modalidad On-Demand
- 3+ años acumulados en rol docente
- Highlight: capacidad de simplificar conceptos técnicos, mentorship

**PrintAll.tuc (Creator side — contexto, no "proyecto")**
- Studio de impresión 3D propio desde 2022
- Conocimiento de: Klipper firmware, Raspberry Pi, Fusion 360, Tinkercad, Inkscape, Orca/Cura Slicer
- Vía: "También hago impresiones 3D — es donde exploro el lado maker. Link a @printall.tuc en Instagram, contacto por WhatsApp."

**Diseño sugerido**: dos columnas en desktop, stack en mobile. Cada una con 1 párrafo corto + link.

### 4.6 Experience (timeline compacto)

Formato tipo timeline vertical con fechas + empresa + rol + 1 línea. Link al final hacia LinkedIn para detalle completo.

```
Nov 2024 - Present    Pulpou                    Desarrollador web (scraping, DOM)
Jul 2023 - Present    Digital House             Profesor + Content Manager
May 2024 - Present    Digital House             Community Manager Técnico
Aug 2022 - Present    PrintAll.tuc              Fundador (3D printing studio)
Feb 2022 - Jul 2023   Digital House             Profesor Full-stack Node.js
Mar 2007 - Present    Drugstore San Cayetano    Propietario (contexto personal)
Jul 2017 - Nov 2017   Jais Servicios Mineros    Especialista higiene (carrera previa)
```

### 4.7 Contact

Botones grandes y claros con iconos:
- 📧 Email — josemiranda989@gmail.com
- 💼 LinkedIn — linkedin.com/in/josemiranda989
- 💻 GitHub — (URL cuando confirmado)
- 📱 WhatsApp — link a chat directo

**Nota**: un form de contacto embedded es overhead innecesario. Links directos convierten mejor.

---

## 5. Tone & Voice

### Español (default)
- **Rioplatense pero profesional** — "vos" en vez de "tú", pero sin ser excesivamente casual
- Frases directas, sin relleno tipo "Apasionado por la tecnología"
- Evitar jerga bootcamp genérica ("en constante aprendizaje", "hambriento por conocimiento")
- Mostrar personalidad sin ser chistoso a la fuerza

### English
- **Casual professional** — estilo Lee Robinson, Brittany Chiang
- Contracciones OK ("I've", "don't")
- Technical but not gatekeepy

### Qué NO hacer
- ❌ Emojis por todos lados (uno o dos con intención, no como decoración)
- ❌ Frases vacías ("team player", "fast learner", "passionate about X")
- ❌ Listas de 30 tecnologías — prefiere curaduría de 15 que realmente domina
- ❌ "Coming soon" en nada (solo muestra lo que YA existe)
- ❌ Términos marketinge-ros vacíos ("soluciones innovadoras", "cutting-edge")

---

## 6. Visual Direction

### Referencias a estudiar (pedirle al diseñador que las revise)

- **brittanychiang.com** — gold standard para "dev que envía". Typography-heavy, dark mode default, minimalismo con personalidad. Mirar arquitectura visual y jerarquía.
- **leerob.io** — pragmático, fast, content-first. Bueno para inspiración de "sin-fluff".
- **joshwcomeau.com** — el otro extremo: muy animado/juguetón. Útil como contraste — **NO copiar este estilo**, sería too much para el target profesional que buscamos.

### Mi sugerencia de dirección

**"Serious but warm"** — entre Brittany Chiang (serio) y un poquito de calidez latinoamericana:

- **Paleta**: dark mode por default con toggle light. Base neutra (grays), con UN acento cálido (naranja tipo #EA580C o rojo terracota #DC2626 — inspirado en la paleta que CoachIA ya usa)
- **Typography**: serif para headlines (algo como Fraunces, Editorial New, o Newsreader) + sans-serif limpio para body (Inter, Geist, o General Sans)
- **Layout**: grid bien definido, generous whitespace, NO parallax ni scroll hijacking
- **Micro-animations**: SUTILES (hover states, fade-ins on scroll). Nada agresivo.
- **Dark mode**: default. Light mode como opción. Toggle visible.

### Accessibility (no negociable)

- Contrast ratio AAA en texto body
- Keyboard navigation completa
- Semantic HTML (no divitis)
- `prefers-reduced-motion` respetado
- Toggle de idioma accesible por teclado
- Alt text en todas las imágenes
- Focus states visibles

### Performance targets

- **Lighthouse**: Performance 95+, Accessibility 100, SEO 100, Best Practices 100
- **Core Web Vitals**: LCP < 1.5s, CLS < 0.05, INP < 200ms
- **Tamaño**: página principal < 200KB JS inicial (Astro ayuda con esto)
- **Images**: WebP/AVIF con fallback, lazy-load below fold

---

## 7. Internationalización (ES/EN)

- **Toggle**: visible en nav, no esconderlo en hamburger mobile
- **Default**: español (coincide con audiencia Argentina + LATAM hiring managers)
- **URLs**: `jmlabs.app` (ES) y `jmlabs.app/en` (EN) — dos paths, SEO-friendly
- **hreflang tags**: correctos en `<head>`
- **Persistencia**: usar localStorage para recordar la preferencia del usuario
- **Contenido NO traducido**: nombres propios, stack técnico, tags de código

---

## 8. Tecnología — constraints firmes

### Stack (no negociar)
- **Astro** (framework)
- **TypeScript** (tipar componentes)
- **Tailwind CSS** (styling)
- **Cloudflare Pages** (deploy, conectado a repo GitHub)
- **MDX** para los case studies (permite mezclar markdown con componentes)

### Constraints adicionales
- NO client-side routing (usa navegación nativa del browser)
- JS solo donde realmente se necesita (toggle idioma, tal vez algún hover effect)
- Imágenes: usar `<Image>` de Astro para optimización automática
- Fonts: self-hosted (NO Google Fonts CDN) para privacy + perf

---

## 9. Must-haves / Nice-to-haves

### MUST-HAVE (no launch sin esto)
- [ ] Hero con headline claro
- [ ] 2 proyectos featured (CoachIA + Homelab case study) con screenshots reales
- [ ] About con story arc personal
- [ ] Stack técnico organizado por capa
- [ ] Teaching section
- [ ] Contact con 4 canales (email, LinkedIn, GitHub, WhatsApp)
- [ ] Toggle ES/EN funcionando
- [ ] Dark/light mode toggle
- [ ] Responsive mobile-first
- [ ] Lighthouse 95+
- [ ] Deployado en `jmlabs.app` (apex)
- [ ] SEO básico (meta tags, Open Graph, sitemap, robots.txt)
- [ ] Favicon custom (no el default de Astro)

### NICE-TO-HAVE (fase 2)
- [ ] Blog section con posts técnicos (empezar con el case study del homelab)
- [ ] RSS feed
- [ ] Timeline interactivo para la experience
- [ ] Screenshot carousel para CoachIA
- [ ] Stats dinámicas ("X alumnos enseñados", "X proyectos live") si tenés la data
- [ ] Dark mode con detección de `prefers-color-scheme`

### NO-GO (no hacer esto aunque te tiente)
- ❌ Terminal emulator tipo "sos un hacker" — cliché y no aporta
- ❌ 3D animations pesadas (Three.js hero, etc.) — kill performance
- ❌ Loading screens / preloader — anti-usuario
- ❌ Scroll hijacking / parallax agresivo
- ❌ Typewriter effect en el hero (clichísimo)
- ❌ Enlaces a plataformas obsoletas (dev.to si no publica, Twitter si no lo usa)
- ❌ Iconos de skills dispersos tipo "tech soup"

---

## 10. Assets que el usuario debe preparar

Checklist para que José junte ANTES de empezar la implementación visual:

### CoachIA
- [ ] 3-4 screenshots de alta calidad (1920x1080 o superior, sin info personal sensible)
  - [ ] Dashboard principal
  - [ ] Vista de una rutina generada por IA
  - [ ] Vista mobile (puede ser un mockup con Dimensions o real screenshot en device)
  - [ ] Vista de métricas/progreso
- [ ] (Opcional) GIF/MP4 corto (<10s) de la IA generando una rutina
- [ ] 1 párrafo bien escrito explicando el "problema que resuelve" (3-4 frases)
- [ ] Demo URL decidida (si va a ser pública o con user demo)

### Homelab case study
- [ ] Diagrama "antes/después" de la arquitectura
- [ ] Lista de métricas ganadoras (se pueden pedir del engram topic `infra/migration-roadmap-jmlabs`)

### Personal
- [ ] Foto (opcional): retrato limpio, fondo neutro, 800x800 mínimo. O avatar ilustrado si no quiere foto real.
- [ ] CV actualizado (para linkearlo como PDF descargable)
- [ ] URL actual de GitHub confirmada
- [ ] Handle de Instagram de PrintAll confirmado

### Copy
- [ ] Pulir el story arc del About (el draft está arriba, ajustar en primera persona)
- [ ] Elevator pitch corto en ES y EN (2 versiones a elegir por cada idioma no hacen daño)

---

## 11. SEO inicial

- **Title tag**: "José Miranda — Full-stack Developer & AI Product Builder"
- **Meta description**: 150-160 chars, mencionar AI + full-stack + ubicación Argentina
- **Open Graph image**: generar una imagen custom 1200x630 con nombre + headline + URL
- **Schema.org**: marcar Person + WebSite con datos estructurados
- **Sitemap**: `jmlabs.app/sitemap.xml`
- **robots.txt**: permitir crawl, apuntar al sitemap
- **Google Search Console**: registrar el sitio una vez deployado

---

## 12. Notas finales para el diseñador/IA

### Principio guía
> "Este no es un portfolio de junior dev. Es de alguien que ya envía producto y opera infra. El diseño debe reflejar esa madurez — sin overstatement."

### Tests antes de declarar 'done'
1. **Test 5 segundos**: una persona random debería entender qué hace José en los primeros 5 segundos
2. **Test del recruiter distraído**: scrolleando rápido, ¿el signal principal (full-stack + AI) llega?
3. **Test mobile-first**: 70% del tráfico probablemente es mobile — debe verse hermoso ahí PRIMERO
4. **Test sin JS**: desactivá JS, el contenido principal debe seguir siendo accesible (Astro ayuda con esto)
5. **Test axe/Lighthouse**: sin warnings en ninguna categoría

### Enlaces útiles al contexto técnico (engram topic keys)
- `infra/migration-roadmap-jmlabs` — historia completa de la migración homelab
- `infra/cloudflared-windows-service` — detalles técnicos del tunnel
- `coachia/prod-mode-migration` — decisiones técnicas de CoachIA
- `infra/homelab` — setup general del homelab + dominio
- `coachia/resend-api-key-rotation` — integración email
- `coachia/auth/forgot-password-fase2` — integración Resend E2E
- `infra/fase7-tunnel-access-plan` — Zero Trust setup

---

## 13. Fuera de scope (para futuras iteraciones, NO fase 1)

- Blog con posts técnicos (empezar en fase 2, cuando el portfolio esté live y estable)
- Section de "Open source contributions" (agregarla cuando existan)
- Newsletter / email capture
- Analytics más allá de Cloudflare Web Analytics (simple, sin cookies)
- Testimonios de alumnos / clientes (agregarlo post-launch si se consiguen quotes reales)

---

## Resumen para el diseñador

> **Construir un portfolio long-scroll en Astro + Tailwind, deployado en `jmlabs.app`. Target: hiring managers de empresas de producto con AI. Mostrar a José Miranda como full-stack dev + AI builder + infra operator + educador. 2 proyectos flagship (CoachIA + homelab case study), bilingüe ES/EN, dark mode default, estilo "serious but warm" inspirado en Brittany Chiang. MUST-HAVEs priorizados arriba. Evitar clichés de portfolios de junior dev (parallax, terminal fake, typewriter, etc.). Performance y accessibility no negociables.**
