import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://desentupidora-curitiba.pages.dev'),
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
              "@type": "Plumber",
              "name": "Desentupidora Curitiba Emergencial",
              "description": "Serviço de desentupimento 24 horas em Curitiba e região metropolitana.",
              "url": "https://desentupidora-curitiba.pages.dev",
              "telephone": "+55-96-98432-1456",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rua Exemplo",
                "addressLocality": "Santa Cândida",
                "addressRegion": "Curitiba",
                "addressCountry": "BR"
              },
              "areaServed": [
                { "@type": "Place", "name": "Santa Cândida, Curitiba" },
                { "@type": "Place", "name": "Bacacheri, Curitiba" },
                { "@type": "Place", "name": "Tingui, Curitiba" },
                { "@type": "Place", "name": "Boa Vista, Curitiba" },
                { "@type": "Place", "name": "Cajuru, Curitiba" },
                { "@type": "Place", "name": "Portão, Curitiba" },
                { "@type": "Place", "name": "Água Verde, Curitiba" },
                { "@type": "Place", "name": "Batel, Curitiba" },
                { "@type": "Place", "name": "Centro, Curitiba" }
              ],
              "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
