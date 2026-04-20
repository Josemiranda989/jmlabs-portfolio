# UX/UI Audit — jmlabs.app portfolio

**Fecha**: 2026-04-20
**Método**: Playwright headless (desktop 1440×900, mobile 375×812) + DOM/CSS inspection + heurística manual.
**No testeado**: Lighthouse real, screen readers (JAWS/NVDA/VO), dispositivos físicos, red real.

## Veredicto rápido

El diseño base es **sólido**: jerarquía tipográfica fuerte, paleta coherente, dos modos funcionando, responsive sin overflow horizontal. Pero hay **5 issues HIGH** que arreglar antes de ir live + varios MEDIUM de pulido.

---

## 🔴 CRITICAL (blockers para go-live)

### C1. Falta favicon — produce 404 en cada carga
**Evidencia**: Consola muestra `GET /favicon.ico 404`.
**Impacto**: Error visible en DevTools, mal signal de profesionalismo.
**Fix**: Crear `public/favicon.svg` (escalable, respeta dark/light via `prefers-color-scheme`) + `favicon.ico` fallback. Agregar `<link rel="icon" ...>` en Layout.

### C2. Sin Open Graph image
**Evidencia**: `<meta property="og:image">` no existe.
**Impacto**: Cuando compartas el link en Slack/LinkedIn/WhatsApp → preview genérico sin imagen. Pierde el pitch visual del hero.
**Fix**: Crear `public/og.png` (1200×630) con tu nombre + headline + URL. Agregar meta tags.

### C3. "Leer case study completo" del Homelab es link muerto (`href="#"`)
**Evidencia**: DOM inspection — 3 links con `href="#"` (los otros 2 son intencionales: código privado + mock interno).
**Impacto**: El CTA principal del segundo proyecto featured rompe la promesa. Click → scroll al top, nada más.
**Fix**: Opción A (rápida): quitar el botón. Opción B (correcta): escribir el blog post del case study y linkearlo (puede ser una página aparte en Astro `/blog/homelab-migration.astro`).

---

## 🟠 HIGH (UX friction real)

### H1. Mobile: se pierde la navegación por anclas
**Evidencia**: `nav-links` oculto `<860px` (design intencional), pero **no hay hamburger menu** ni alternativa. El logo "jmlabs" va al top pero el resto de secciones solo son alcanzables scrolleando.
**Impacto**: En mobile (70% del tráfico probable), el recruiter que quiere saltar directo a "Contacto" no puede.
**Fix recomendado**: agregar botón hamburger que abra drawer con los 5 links. O más simple: pinear un **CTA flotante** de "Contactar" en mobile.

### H2. Contraste text-mute insuficiente en light mode
**Evidencia**: `--text-mute: #8a8073` sobre `--bg: #faf8f3` = **~3.5:1**. WCAG AA requiere 4.5:1 para texto normal.
**Impacto**: Labels, section-eyebrows, footer, hero-meta, métricas — todo el texto pequeño auxiliar falla AA en light mode. Cualquier usuario con visión reducida se pierde información.
**Fix**: oscurecer a mínimo `#6b6356` (~5:1) o rediseñar el gris cálido. En dark mode (#756b5e sobre #0e0d0b ≈ 4.2:1) también está al borde — mejor subir a `#8a7f71` (~5.2:1).

### H3. Heading hierarchy salta de H2 a H4 en Stack
**Evidencia**: Secciones tienen `<h2>` de título + `<h4>` en stack columns ("Frontend", "Backend", etc). Falta H3.
**Impacto**: Screen readers anuncian estructura "H2 > H4" → confuso. Afecta lectura semántica del documento.
**Fix**: cambiar los `<h4>` de stack-col a `<h3>`.

### H4. Heading tags dentro del mock UI no tienen sentido semántico
**Evidencia**: El mock CoachIA tiene `<h3>Buenos días, José.</h3>` y `<h4>Entrenamiento de Hoy</h4>` — semánticamente parecen headings reales de la página.
**Impacto**: Los screen readers los incluyen en el outline del documento como si fueran secciones propias. Ruido semántico.
**Fix**: cambiar a `<div class="ci-greeting">` y `<div class="ci-feature-title">` con estilos heading-like (font-family, size, weight). Son decorativos, no estructurales.

### H5. Sin `scroll-margin-top` en anchor targets
**Evidencia**: Nav es sticky (60px alto aprox). Al hacer click en "#projects" → smooth scroll posiciona el top de la section **debajo** del nav → primeras líneas tapadas.
**Impacto**: UX sutilmente roto en el jump-link principal.
**Fix**: CSS global:
```css
.section, .hero { scroll-margin-top: 80px; }
```

---

## 🟡 MEDIUM (pulido, baja prioridad)

### M1. No hay skip-to-content link para teclado
**Evidencia**: Primera tab siempre va al logo. Usuarios keyboard-only tienen que tabular por los 5 nav links + 2 controls antes de llegar al contenido.
**Fix**: agregar al inicio del `<body>`:
```html
<a href="#top" class="skip-link">Saltar al contenido</a>
```
Con CSS para que aparezca solo con focus.

### M2. SVGs decorativos sin `aria-hidden="true"`
**Evidencia**: 2 SVGs (moon, sun del theme toggle) no tienen `aria-hidden`. El botón padre tiene `aria-label="Toggle theme"` así que AT no duplica, pero es menos explícito.
**Fix**: agregar `aria-hidden="true"` a los SVGs de moon/sun (y a todos los decorativos del mock).

### M3. Reveal-on-scroll en todas las sections puede sentirse over-animado
**Evidencia**: Cada `.section`, `.project`, `.col-card`, `.contact-card` entra con fade+translate 700ms.
**Impacto**: En scroll rápido se ven 3-4 fades simultáneos. Sobrecarga visual.
**Fix sugerido**: limitar reveal solo a `.project` y `.col-card`. Secciones pueden aparecer directamente.

### M4. Uso semántico incorrecto de `<strong>` en hero-meta
**Evidencia**: `<strong data-i18n="es">Ubicación:</strong>` → se usa para estilo (label mono), no para énfasis.
**Impacto**: Screen readers enfatizan con voz → ruido innecesario.
**Fix**: cambiar a `<span class="hero-meta-label">` con estilos iguales.

### M5. Email en texto plano atrae scrapers de spam
**Evidencia**: `josemiranda989@gmail.com` visible directo en HTML.
**Impacto**: Bots van a juntarlo + vas a recibir spam.
**Fix rápido**: ofuscar con JavaScript:
```html
<span class="contact-v" data-email="josemiranda989" data-domain="gmail.com">
  <!-- JS lo arma en el load -->
</span>
```
O cambiar el `mailto:` a redirección vía Cloudflare Worker.

### M6. GitHub handle no verificado
**Evidencia**: `https://github.com/josemiranda989` es placeholder. En el LinkedIn PDF no aparecía URL de GitHub.
**Impacto**: Si no es tu handle real → 404 cuando alguien clickea.
**Fix**: confirmá tu GitHub real y updatea `index.astro` + el TODO.

---

## 🟢 LOW (nice-to-have, fase 2)

### L1. No hay sitemap.xml ni robots.txt
**Fix**: agregar `@astrojs/sitemap` integration + `public/robots.txt`.

### L2. Sin estilos para print (Ctrl+P)
**Fix**: `@media print` con estilos simples o esconder nav/footer.

### L3. Hero tag "Disponible para oportunidades" es hardcoded
**Nota**: Cuando ya tengas trabajo estable y no estés buscando, acordate de sacar esto. Podría ser condicional por build-time variable.

### L4. No hay indicador "active" en nav-links cuando estás en esa sección
**Nota**: Scroll spy con IntersectionObserver que agrega `.active` al link correspondiente cuando la section está visible. UX pro para long-scroll.

### L5. No hay TOC lateral en desktop
**Nota**: Sidebar con "01 Proyectos, 02 Sobre mí..." estilo docs. Ayuda a orientarse en scroll largo. Brittany Chiang tiene algo así.

### L6. Mock CoachIA no cambia con light mode
**Evidencia**: El mock tiene colores hardcoded para dark (bg `#09090b`). En light mode el mock sigue siendo dark.
**Nota**: intencional — el app real ES dark. Mostrar un mock dark en light mode crea contraste interesante. No cambiar.

---

## 📊 Métricas observables

| Métrica | Valor | Target | Status |
|---------|-------|--------|--------|
| H1 count | 1 | 1 | ✅ |
| Horizontal overflow mobile | No | No | ✅ |
| Images without alt | 0/0 | 0 | ✅ |
| External links sin `noopener` | 0 | 0 | ✅ |
| Focusable elements | 22 | razonable | ✅ |
| Placeholder links (`href="#"`) | 3 | 0-1 | ⚠️ |
| OG image | No | Sí | 🔴 |
| Favicon | No | Sí | 🔴 |
| Lang attribute | `es` ✓ | válido | ✅ |
| Hreflang set | ES + EN + x-default | completo | ✅ |
| Contraste body text (dark/light) | ~14:1 / ~15:1 | AAA | ✅ |
| Contraste text-mute (dark/light) | ~4.2 / ~3.5:1 | ≥4.5:1 | 🔴 / 🔴 |
| Theme toggle funcional | Sí | Sí | ✅ |
| Lang toggle funcional | Sí | Sí | ✅ |
| Prefers-reduced-motion respetado | Sí | Sí | ✅ |

---

## 🛠 Orden recomendado de fixes

1. **[C1]** Favicon (15 min)
2. **[C2]** OG image (20 min)
3. **[H1]** Mobile nav solution (45 min)
4. **[H2]** Subir contraste text-mute (10 min)
5. **[H3]** Stack h4 → h3 (5 min)
6. **[H4]** Mock headings → divs (10 min)
7. **[H5]** scroll-margin-top (2 min)
8. **[C3]** Case study link (deferible si creás el post después)
9. MEDIUM en un segundo pase — skip link, aria-hidden en SVGs, reveal tuning, strong → span
10. LOW — sitemap, robots, print styles

**Tiempo total fixes críticos + high**: ~2 hs.

---

## ✅ Lo que está muy bien hecho

- Typography scale con `clamp()` fluido — escala naturalmente
- Dark mode default con respeto a `prefers-color-scheme`
- Pre-paint script evita flash de theme incorrecto
- CSS custom properties limpias, fácil de mantener
- Mock UI de CoachIA con colores reales del app — **muy buena decisión**
- Diagrama SVG del homelab es claro y escala bien
- Copy tiene personalidad (no genérico bootcamp)
- Story arc del About → engancha desde la primera línea
- Sin dependencias pesadas (no React runtime, no Tailwind build)
- Build de Astro en 800ms — rápido

---

## Siguiente paso propuesto

Arrancamos por los 2 CRITICAL (favicon + OG image) porque son pre-requisito para cualquier compartida del link. Después los 5 HIGH. MEDIUM y LOW pueden ir en futuras sesiones.

¿Vamos con C1+C2+H1-H5 ahora en batch?
