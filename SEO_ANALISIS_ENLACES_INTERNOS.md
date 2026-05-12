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

## Siguiente Acción
1. WebMaster: Unificar teléfono, actualizar footer a 2026, agregar enlaces internos
2. Copywriter: Validar textos del sitio
3. SEODirector: Verificar implementación de enlaces internos