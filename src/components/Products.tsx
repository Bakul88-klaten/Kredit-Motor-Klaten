'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motors, categories, formatRp } from '@/data/motors';
import type { MotorCategory } from '@/data/motors';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState<'all' | MotorCategory>('all');
  const filtered = activeFilter === 'all' ? motors : motors.filter((m) => m.cat === activeFilter);

  const goToKalc = (name: string, price: number) => {
    document.getElementById('kalkulator')?.scrollIntoView({ behavior: 'smooth' });
    const sel = document.getElementById('sel-motor') as HTMLSelectElement | null;
    if (sel) {
      sel.value = `${name}|${price}`;
      sel.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <section className="section bgDark" id="produk">
      <div className="sectionInner">
        <div className="sectionLabel">Katalog Motor</div>
        <h2 className="sectionTitle">Semua Tipe<br />Honda Tersedia</h2>
        <p className="sectionDesc">Temukan motor Honda terbaik sesuai gaya dan kebutuhan Anda.</p>

        <div className="filterTabs">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={cat.value === activeFilter ? 'filterTab filterTabActive' : 'filterTab'}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="productsGrid">
          {filtered.map((motor) => (
            <article key={motor.id} className="productCard">
              <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3', background: '#222' }}>
                <Image
                  src={`/images/${motor.img}`}
                  alt={`Motor Honda ${motor.name} Klaten`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 600px) 50vw, 25vw"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="cardBody">
                <div className="cardSeries">{motor.series}</div>
                <h3 className="cardName">Honda {motor.name}</h3>
                <div className="cardPrice">{formatRp(motor.price)}</div>
                <button type="button" className="cardBtn" onClick={() => goToKalc(motor.name, motor.price)}>
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
