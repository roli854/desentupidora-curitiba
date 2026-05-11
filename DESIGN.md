---
name: Emergency Service Utility
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#43474e'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#006d2f'
  on-secondary: '#ffffff'
  secondary-container: '#5dfd8a'
  on-secondary-container: '#007232'
  tertiary: '#4b0003'
  on-tertiary: '#ffffff'
  tertiary-container: '#730007'
  on-tertiary-container: '#ff7367'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#66ff8e'
  secondary-fixed-dim: '#3de273'
  on-secondary-fixed: '#002109'
  on-secondary-fixed-variant: '#005322'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ab'
  on-tertiary-fixed: '#410002'
  on-tertiary-fixed-variant: '#93000b'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1'
  button-text:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-padding-desktop: 80px
  section-padding-mobile: 40px
  gutter: 24px
  touch-target-min: 48px
  container-max-width: 1200px
---

## Brand & Style

The design system is centered on **Immediate Utility** and **Unwavering Reliability**. The target audience consists of homeowners and business managers in Curitiba facing urgent plumbing crises. The visual language avoids aesthetic "fluff" in favor of a "Basic, High-Converting" approach that prioritizes information density and clarity.

The style is a blend of **Functional Minimalism** and **Corporate Utility**. It leverages high-contrast elements and a clear visual hierarchy to guide the user toward a single primary action: contact via WhatsApp. The emotional response is one of relief and confidence—communicating that a professional solution is available 24/7 without technical or visual friction.

## Colors

The palette is strictly functional, using color as a tool for navigation and urgency.

- **Primary (#1a365d):** Navy Blue is used for headers, icons, and trust-building elements. It signals authority and institutional stability.
- **Secondary (#25D366):** WhatsApp Green is reserved exclusively for the primary conversion buttons. Its high contrast against the light background ensures it is the first thing a user sees.
- **Urgency/Alert (#dc2626):** A deep red used sparingly for "24h" or "Emergência" badges to signal immediate availability.
- **Neutral Background (#f3f4f6):** A soft light grey reduces eye strain compared to pure white while maintaining a clean, professional "canvas."
- **Text (#111827):** Near-black for maximum legibility and AA/AAA accessibility compliance.

## Typography

This design system uses **Inter** for all roles to ensure a systematic, utilitarian appearance. The scale is aggressive to ensure that key value propositions (e.g., "Chegamos em 30 min") are impossible to miss.

- **Headlines:** Use heavy weights (700-800) and tight letter spacing to convey a sense of density and importance.
- **Body Text:** Set with generous line heights to facilitate rapid scanning.
- **Mobile Optimization:** Headlines scale down significantly on mobile to prevent awkward text wrapping, ensuring the "Call" or "WhatsApp" buttons remain above the fold.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain a professional, structured appearance, transitioning to a fully **Fluid Layout** for mobile.

- **Mobile First:** Given the emergency nature, the design is optimized for one-handed thumb use. All interactive elements (buttons, accordion headers) must meet the 48px minimum touch target.
- **Vertical Rhythm:** Sections are separated by generous padding (80px desktop / 40px mobile) to prevent information overload.
- **Alignment:** Left-aligned text is preferred for faster reading speeds in emergency situations.

## Elevation & Depth

To maintain the "functional and direct" aesthetic, this design system avoids complex shadows and depth.

- **Low-Contrast Outlines:** Instead of shadows, use 1px solid borders (#d1d5db) to define cards and input fields.
- **Flat Surfaces:** Cards use a white background against the #f3f4f6 page background to create a subtle "lift" without relying on blur effects.
- **State Changes:** Interactive elements use simple color shifts (e.g., a slightly darker green on hover/tap) rather than physical elevation changes.

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a professional, modern finish without appearing overly "playful" or "tech-startup."

- **Buttons:** 4px border radius.
- **Service Cards:** 8px (rounded-lg) to subtly differentiate them from the main background.
- **Input Fields:** 4px border radius for a structured, reliable look.

## Components

### Conversion Buttons
The "WhatsApp" button is the primary component. It must span the full width of the screen on mobile, featuring a large WhatsApp icon and bold text. It should be "sticky" or fixed to the bottom of the viewport on mobile devices.

### Service Cards
Simple white containers with a 1px border. They include a bold headline, a 2-line description, and a clear "Ver preço" or "Solicitar agora" text link. Icons should be functional (e.g., a drain, a pipe) in Navy Blue.

### Urgency Badges
Small rectangular tags with a background of Urgency Red or Navy Blue. Text is white, all-caps, and bold (e.g., "ATENDIMENTO 24H").

### Trust Accordions (FAQ)
Clean, text-heavy accordions that answer critical conversion blockers: "Qual o preço?", "Quanto tempo demora?", "Quais bairros atendem?". Use a simple plus/minus toggle.

### Trust Badges / Social Proof
A horizontal strip of simple logos (Credit Card icons, "Empresa Registrada", "Garantia de 90 dias") displayed in grayscale to avoid distracting from the main CTA.