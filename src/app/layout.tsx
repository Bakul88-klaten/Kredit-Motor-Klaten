import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed } from 'next/font/google';
import './globals.css';

const barlow = Barlow({ subsets: ['latin'], weight: ['300','400','500','600'], variable: '--font-barlow', display: 'swap' });
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['400','600','700','800','900'], style: ['normal','italic'], variable: '--font-barlow-condensed', display: 'swap' });

export const metadata: Metadata = {
  title: 'Kredit Motor Honda Klaten | Angsuran Murah & Proses Cepat – Rio',
  description: 'Kredit motor Honda di Klaten dengan angsuran murah, proses cepat, dan DP ringan mulai 10%. Tersedia BeAT, Vario, Scoopy, PCX, ADV, Stylo, Genio. Hubungi Rio sekarang!',
  keywords: 'kredit motor honda klaten, angsuran motor honda klaten, cicilan motor honda klaten, dealer motor honda klaten, kredit beat klaten, kredit vario klaten',
  authors: [{ name: 'Rio - Kredit Motor Klaten' }],
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Kredit Motor Honda Klaten | Angsuran Murah & Proses Cepat',
    description: 'Kredit motor Honda di Klaten, DP ringan mulai 10%, proses cepat. Hubungi Rio!',
    type: 'website',
    locale: 'id_ID',
    siteName: 'Kredit Motor Klaten',
  },
  alternates: { canonical: 'https://kreditmotorklaten.biz.id/' },
  verification: { google: 'GANTI_DENGAN_KODE_GSC_ANDA' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  name: 'Kredit Motor Honda & Yamaha Klaten – Rio',
  description: 'Dealer kredit motor Honda dan Yamaha di Klaten dengan angsuran murah dan proses cepat',
  telephone: '+62877-8165-8231',
  url: 'https://kreditmotorklaten.biz.id',
  address: { '@type': 'PostalAddress', addressLocality: 'Klaten', addressRegion: 'Jawa Tengah', addressCountry: 'ID' },
  areaServed: ['Klaten','Delanggu','Prambanan','Ceper','Juwiring'],
  contactPoint: { '@type': 'ContactPoint', telephone: '+62877-8165-8231', contactType: 'sales', availableLanguage: 'Indonesian' },
  sameAs: [`https://wa.me/6287781658231`],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
