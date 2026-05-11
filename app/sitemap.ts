import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://desentupidoracuritiba365.com.br/',
      lastModified: new Date(),\n      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://desentupidoracuritiba365.com.br/#servicos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}

