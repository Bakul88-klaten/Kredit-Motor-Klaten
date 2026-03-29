import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-barlow',
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-barlow-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kredit Motor Honda Klaten | Angsuran Murah & Proses Cepat',
  description: 'Kredit motor Honda di Klaten dengan angsuran murah, proses cepat, dan DP ringan. Tersedia BeAT, Vario, Scoopy, PCX, ADV, Stylo, Genio. Hubungi Rio sekarang!',
  keywords: 'kredit motor honda klaten, angsuran motor honda klaten, beli motor honda klaten, cicilan motor honda klaten, dealer motor honda klaten, kredit beat klaten, kredit vario klaten, kredit scoopy klaten, kredit pcx klaten',
  authors: [{ name: 'Rio - Kredit Motor Honda Klaten' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Kredit Motor Honda Klaten | Angsuran Murah & Proses Cepat',
    description: 'Kredit motor Honda di Klaten dengan angsuran murah, proses cepat, dan DP ringan.',
    type: 'website',
    locale: 'id_ID',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Kredit Motor Honda Klaten',
  description: 'Dealer kredit motor Honda di Klaten dengan angsuran murah dan proses cepat',
  telephone: '+62877-8165-8231',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Klaten',
    addressRegion: 'Jawa Tengah',
    addressCountry: 'ID',
  },
  areaServed: 'Klaten',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+62877-8165-8231',
    contactType: 'sales',
    availableLanguage: 'Indonesian',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
