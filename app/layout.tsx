import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  metadataBase: new URL('https://desentupidoracuritiba365.com.br'),
  title: 'Desentupidora 24h Curitiba - Orçamento Grátis | Santa Cândida, Bacacheri, Tingui',
  description: 'Desentupidora 24h em Curitiba. Chegamos em 30 min! Desentupimento de pia, vaso, ralo e esgoto. Atendimento em Santa Cândida, Bacacheri, Tingui e toda Curitiba. Solicite orçamento grátis agora!',
  keywords: 'desentupidora curitiba, desentupidora 24h, desentupidora santa candida, desentupimento curitiba',
  openGraph: {
    title: 'Desentupidora 24h Curitiba - Orçamento Grátis',
    description: 'Desentupidora 24h em Curitiba. Chegamos em 30 min! Solicite orçamento grátis agora!',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Plumber"],
              "name": "Desentupidora Curitiba Emergencial",
              "description": "Serviço de desentupimento 24 horas em Curitiba e região metropolitana. Atendimento ultra-rápido para residencial e comercial.",
              "url": "https://desentupidoracuritiba365.com.br",
              "telephone": "+5596984321456",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Exemplo, 100",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "addressCountry": "BR",
                "postalCode": "83602-000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -25.4284,
                "longitude": -49.2733
              },
              "areaServed": [
                { "@type": "City", "name": "Curitiba" },
                { "@type": "AdministrativeArea", "name": "Região Metropolitana de Curitiba" }
              ],
              "openingHoursSpecification": [
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Monday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Tuesday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Wednesday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Thursday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "00:00", "closes": "23:59" },
                { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "00:00", "closes": "23:59" }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Desentupimento",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desentupidora de Pia" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desentupidora de Vaso Sanitário" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desentupidora de Ralo" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Desentupidora de Esgoto" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hidrojateamento" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Caça Vazamentos" } }
                ]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

