'use client';
import Link from 'next/link';

const WA = 'https://wa.me/6287781658231?text=Halo%20Rio%2C%20saya%20mau%20tanya%20kredit%20motor%20Honda%20di%20Klaten';

export default function Header() {
  return (
    <header className="header">
      <Link href="#hero" className="logo">
        HONDA <span>KLATEN</span>
      </Link>
      <nav className="nav">
        <Link href="#produk">Motor</Link>
        <Link href="#kalkulator">Kalkulator</Link>
        <Link href="#keunggulan">Keunggulan</Link>
        <Link href="#syarat">Syarat</Link>
        <Link href="#kontak">Kontak</Link>
      </nav>
      <a href={WA} target="_blank" rel="noopener noreferrer" className="headerCta">
        Chat Sekarang
      </a>
    </header>
  );
}
