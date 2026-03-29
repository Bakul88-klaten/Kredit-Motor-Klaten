'use client';
import { useState } from 'react';
import Image from 'next/image';
import { yamahaMotors, yamahaCategories, formatRpY } from '@/data/yamaha';
import type { YamahaCategory } from '@/data/yamaha';

export default function YamahaProducts() {
  const [activeFilter, setActiveFilter] = useState<'all' | YamahaCategory>('all');
  const filtered = activeFilter === 'all' ? yamahaMotors : yamahaMotors.filter((m) => m.cat === activeFilter);

  const goToKalc = (name: string, price: number) => {
    document.getElementById('kalkulator')?.scrollIntoView({ behavior: 'smooth' });
    const sel = document.getElementById('sel-motor-yamaha') as HTMLSelectElement | null;
    if (sel) { sel.value = `${name}|${price}`; sel.dispatchEvent(new Event('change', { bubbles: true })); }
  };

  return (
    <section className="section bgDark" id="produk">
      <div className="sectionInner">
        <div className="sectionLabel">Katalog Motor</div>
        <h2 className="sectionTitle">Semua Tipe<br />Yamaha Tersedia</h2>
        <p className="sectionDesc">Temukan motor Yamaha terbaik sesuai gaya dan kebutuhan Anda di Klaten.</p>
        <div className="filterTabs">
          {yamahaCategories.map((cat) => (
            <button key={cat.value} type="button"
              className={cat.value === activeFilter ? 'filterTab filterTabActive' : 'filterTab'}
              style={activeFilter === cat.value ? {} : { borderColor: '#003087', color: '#003087' }}
              onClick={() => setActiveFilter(cat.value)}>
              {cat.label}
            </button>
          ))}
        </div>
        <div className="productsGrid">
          {filtered.map((motor) => (
            <article key={motor.id} className="productCard">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#f5f5f5' }}>
                <Image src={`/images/yamaha/${motor.img}`} alt={`Motor Yamaha ${motor.name} Klaten`}
                  fill style={{ objectFit: 'cover' }} sizes="(max-width:600px) 50vw, 25vw"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
              </div>
              <div className="cardBody">
                <div className="cardSeries" style={{ color: '#003087' }}>{motor.series}</div>
                <h3 className="cardName">Yamaha {motor.name}</h3>
                <div className="cardPrice" style={{ color: '#003087' }}>{formatRpY(motor.price)}</div>
                <button type="button" className="cardBtn" style={{ background: '#003087' }}
                  onClick={() => goToKalc(motor.name, motor.price)}>
                  Hitung Angsuran
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
