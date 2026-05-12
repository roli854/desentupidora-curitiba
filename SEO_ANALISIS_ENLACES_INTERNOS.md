# Análisis de Estructura de Enlaces Internos
## Proyecto: Desentupidora Curitiba (TEC-60)

## Estado Actual

### Teléfono Inconsistente (CRÍTICO)
- **Homepage**: `+5596984321456`
- **Páginas de servicio**: `+5541999999999`
- **Layout**: `+5596984321456`
- **Contato**: `+5541999999999`

**Acción requerida**: Unificar a un solo número en todo el sitio.

### Footer con año 2024
- El footer del homepage dice "© 2024 Desentupidora Curitiba Emergencial"
- **Acción requerida**: Actualizar a 2026

### CTA (Correcto ✓)
- Todas las páginas ya tienen "Solicitar Orçamento via WhatsApp"

### Estructura de Enlaces Internos (FALTANTE)
Según el stitch-prompt, el footer debe incluir:
- Servicios (todas las páginas de servicios)
- Bairros (/bairros)
- FAQ (/faq)
- Contato (/contato)

**Estado actual**: Las páginas NO tienen enlaces internos entre sí. Solo tienen enlaces a TEL y WhatsApp.

**Enlaces internos faltantes**:
1. Homepage → /servicos/* (cada servicio)
2. Homepage → /bairros
3. Homepage → /faq
4. Homepage → /contato
5. Cada página de servicio → otras páginas de servicios relacionados
6. Footer de cada página → /servicos, /bairros, /faq, /contato

## Recomendaciones de Estructura de Enlaces Internos

### Homepage (page.tsx)
- Servicios (6 enlaces):
  - /servicos/desentupidora-pia
  - /servicos/desentupidora-vaso
  - /servicos/desentupidora-ralo
  - /servicos/desentupidora-esgoto
  - /servicos/hidrojateamento
  - /servicos/caca-vazamentos
- Enlaces adicionales: /bairros, /faq, /contato

### Páginas de Servicios
- Cada página de servicio debe tener:
  - Enlace al Homepage
  - Enlace a otras páginas de servicios relacionados (ej: desentupidora-pia → otros servicios)
  - Sección de "Outros Serviços" con enlaces a otras páginas de servicios

### Footer (todas las páginas)
- Links: Serviços | Bairros | FAQ | Contato
- Copyright actualizado a 2026

## Coordinación con Copywriter
El Copywriter debe validar:
1. Que los textos de todas las páginas sean coherentes
2. Que los textos de los CTAs sean consistentes
3. Que los textos de los enlaces internos sean claros
4. Que no haya texto duplicado entre páginas que cause cannibalización

## Seguimiento post-Stitch (Board comment 2026-05-12)

El board identificó 3 problemas adicionales en [TEC-76](/TEC/issues/TEC-76#comment-48fd0a00):

### Child Issues creadas

| Child Issue | Owner | Descripción | Prioridad |
|-------------|-------|-------------|-----------|
| [TEC-77](/TEC/issues/TEC-77) | WebMaster | Homepage: cards → /servicos/*, Ver todos → /bairros, footer nav | Alta |
| [TEC-78](/TEC/issues/TEC-78) | WebMaster | Uniformizar header/footer en todas las páginas | Alta |
| [TEC-79](/TEC/issues/TEC-79) | WebMaster | WhatsAppButton reutilizado en todo el sitio | Media |

### Requisitos SEO para TEC-77 (enlaces internos homepage)

1. **Cards de servicios → páginas de servicio** (PageRank distribution):
   - Desentupidora de Pia → `/servicos/desentupidora-pia`
   - Desentupidora de Vaso → `/servicos/desentupidora-vaso`
   - Desentupidora de Ralo → `/servicos/desentupidora-ralo`
   - Desentupidora de Esgoto → `/servicos/desentupidora-esgoto`
   - Hidrojateamento → `/servicos/hidrojateamento`
   - Caça Vazamentos → `/servicos/caca-vazamentos`

2. **"Ver todos..."** → `/bairros`

3. **Footer navigation**: Homepage, Serviços, Bairros (/bairros), FAQ (/faq), Contato (/contato)

### Validación post-implementación (SEODirector)

Cuando TEC-77 esté listo, verificar:
- [ ] Cada service card tiene un `<a>` que apunta a la página de servicio correcta
- [ ] "Ver todos..." enlaza a /bairros
- [ ] Footer tiene navegación a todos los pages internos
- [ ] URL structure: máximo 1 clic desde homepage hasta cualquier servicio
- [ ] No hay enlaces rotos (verificar con crawl manual)

## Siguiente Acción
1. ~~Unificar teléfono~~ (TEC-76 ✓)
2. ~~Actualizar footer a 2026~~ (TEC-76 ✓)
3. **WebMaster**: Implementar TEC-77, TEC-78, TEC-79
4. **SEODirector**: Validar implementación de enlaces internos post-TEC-77
5. **Copywriter**: Re-validar textos post-fixes