'use client';
import { useState } from 'react';
import { yamahaMotors, getBungaYamaha, formatRpY } from '@/data/yamaha';

const TENORS = [12, 18, 24, 30, 36, 48];
const SERIES = ['Mio', 'FreeGo', 'Filano', 'Aerox', 'NMax', 'Lexi', 'XMax'];

export default function YamahaKalkulator() {
  const [motorVal, setMotorVal] = useState('');
  const [dpPct, setDpPct] = useState(20);
  const [tenor, setTenor] = useState(24);

  const result = (() => {
    if (!motorVal) return null;
    const [name, priceStr] = motorVal.split('|');
    const harga = parseInt(priceStr);
    const dp = Math.round(harga * dpPct / 100);
    const pokok = harga - dp;
    const rateBulan = getBungaYamaha(tenor);
    const bungaTotal = pokok * rateBulan * tenor;
    const angsuran = Math.round((pokok + bungaTotal) / tenor);
    return { name, harga, dp, pokok, rateBulan, angsuran };
  })();

  const waMsg = result
    ? encodeURIComponent(`Halo Rio, saya tertarik kredit Yamaha ${result.name}, DP ${dpPct}% = ${formatRpY(result.dp)}, tenor ${tenor} bulan. Angsuran ~${formatRpY(result.angsuran)}/bln. Mohon diproses segera!`)
    : '';
  const waLink = `https://wa.me/6287781658231${waMsg ? '?text=' + waMsg : ''}`;
  const blue = '#003087';

  return (
    <section className="section bgDark2" id="kalkulator">
      <div className="sectionInner">
        <div className="sectionLabel" style={{ color: blue }}>Simulasi Kredit</div>
        <h2 className="sectionTitle">Kalkulator<br />Angsuran</h2>
        <p className="sectionDesc">Hitung cicilan bulanan Yamaha Anda. DP ringan, tenor fleksibel, proses cepat!</p>
        <div className="kalkulatorGrid">
          <div className="kalcForm">
            <div className="formGroup">
              <label htmlFor="sel-motor-yamaha">Pilih Motor</label>
              <div className="selectWrap">
                <select id="sel-motor-yamaha" value={motorVal} onChange={(e) => setMotorVal(e.target.value)}>
                  <option value="">-- Pilih Tipe Motor --</option>
                  {SERIES.map((s) => (
                    <optgroup key={s} label={s + ' Series'}>
                      {yamahaMotors.filter((m) => m.series === s).map((m) => (
                        <option key={m.id} value={`${m.name}|${m.price}`}>{m.name} — {formatRpY(m.price)}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>
            <div className="formGroup">
              <label>Uang Muka (DP) — <strong style={{ color: '#111' }}>{dpPct}%{result ? ` = ${formatRpY(result.dp)}` : ''}</strong></label>
              <div className="dpSliderWrap">
                <input type="range" min={10} max={70} step={5} value={dpPct} onChange={(e) => setDpPct(+e.target.value)}
                  style={{ accentColor: blue }} />
                <div className="dpValue"><span>10%</span><span>70%</span></div>
              </div>
            </div>
            <div className="formGroup">
              <label>Tenor</label>
              <div className="tenorGrid">
                {TENORS.map((t) => (
                  <button key={t} type="button"
                    className={t === tenor ? 'tenorBtn tenorBtnActive' : 'tenorBtn'}
                    style={t === tenor ? { background: blue, borderColor: blue } : {}}
                    onClick={() => setTenor(t)}>{t} Bln</button>
                ))}
              </div>
            </div>
          </div>
          <div className="kalcResult">
            <div className="resultHeader">Hasil Simulasi Kredit</div>
            <div className="resultMotor">{result ? `Yamaha ${result.name}` : 'Pilih motor terlebih dahulu'}</div>
            {[['Harga OTR Klaten', result ? formatRpY(result.harga) : '—'],
              [`Uang Muka (${dpPct}%)`, result ? formatRpY(result.dp) : '—'],
              ['Jumlah Kredit', result ? formatRpY(result.pokok) : '—'],
              ['Tenor', `${tenor} Bulan`]].map(([l, v]) => (
              <div key={l} className="resultRow"><span className="resultLabel">{l}</span><span className="resultVal">{v}</span></div>
            ))}
            <div className="resultAngsuran" style={{ background: blue }}>
              <div className="angsuranLabel">Angsuran Per Bulan</div>
              <div className="angsuranAmount">{result ? formatRpY(result.angsuran) : '—'}</div>
              {result && <div className="angsuranSub">selama {tenor} bulan · rate {(result.rateBulan * 100).toFixed(2)}%/bln</div>}
            </div>
            {result && (
              <div className="promoBox">
                <div className="promoText">🎉 <strong>Motor bisa langsung dibawa pulang!</strong><br />Proses disetujui dalam 1 hari kerja.<br />Hubungi Rio untuk <strong>dapatkan promo terbaik</strong>!</div>
              </div>
            )}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="resultCta">📱 Proses Kredit Sekarang via WhatsApp</a>
            <p className="disclaimer">*Estimasi berdasarkan rate leasing berlaku di Klaten. Hubungi Rio untuk simulasi resmi & promo spesial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
