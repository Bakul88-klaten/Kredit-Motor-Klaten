'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WA_HONDA = 'https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20tanya%20kredit%20motor%20Honda%20di%20Klaten';
const WA_YAMAHA = 'https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20tanya%20kredit%20motor%20Yamaha%20di%20Klaten';

export default function Header() {
  const pathname = usePathname();
  const isYamaha = pathname?.startsWith('/yamaha');
  const waLink = isYamaha ? WA_YAMAHA : WA_HONDA;

  return (
    <header className="header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link href="/" className="logo">KREDIT<span>MOTOR</span></Link>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Link href="/" style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', background: !isYamaha ? '#CC0000' : '#eee', color: !isYamaha ? '#fff' : '#555', textDecoration: 'none', borderRadius: '2px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Honda</Link>
          <Link href="/yamaha" style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', background: isYamaha ? '#003087' : '#eee', color: isYamaha ? '#fff' : '#555', textDecoration: 'none', borderRadius: '2px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Yamaha</Link>
        </div>
      </div>
      <nav className="nav">
        <Link href={isYamaha ? '/yamaha#produk' : '/#produk'}>Motor</Link>
        <Link href={isYamaha ? '/yamaha#kalkulator' : '/#kalkulator'}>Kalkulator</Link>
        <Link href={isYamaha ? '/yamaha#keunggulan' : '/#keunggulan'}>Keunggulan</Link>
        <Link href={isYamaha ? '/yamaha#syarat' : '/#syarat'}>Syarat</Link>
        <Link href={isYamaha ? '/yamaha#kontak' : '/#kontak'}>Kontak</Link>
        <Link href="/#artikel">Artikel</Link>
      </nav>
      <a href={waLink} target="_blank" rel="noopener noreferrer" className="headerCta" style={{ background: isYamaha ? '#003087' : '#CC0000' }}>
        Chat Sekarang
      </a>
    </header>
  );
}
