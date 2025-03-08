import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const districts = [
    'kadikoy', 'besiktas', 'uskudar', 'sisli', 'beyoglu', 'atasehir',
    'maltepe', 'bakirkoy', 'beylikduzu', 'pendik', 'kartal', 'sariyer',
    'umraniye', 'fatih', 'zeytinburnu', 'eyup', 'kagithane', 'bahcelievler',
    'avcilar', 'bagcilar', 'gungoren', 'esenyurt', 'kucukcekmece', 'buyukcekmece',
    'basaksehir', 'sultangazi', 'gaziosmanpasa', 'esenler', 'bayrampasa',
    'sultanbeyli', 'sancaktepe', 'cekmekoy', 'beykoz', 'tuzla', 'silivri',
    'catalca', 'arnavutkoy', 'adalar'
  ];

  const baseUrl = 'https://mobiltasima.vercel.app';

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...districts.map((district) => ({
      url: `${baseUrl}/ilce/${district}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];

  return routes;
} 