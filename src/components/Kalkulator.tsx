'use client';
import { useState } from 'react';
import { motors, formatRp } from '@/data/motors';

const TENORS = [12, 18, 24, 30, 36, 48];
const SERIES = ['BeAT', 'Genio', 'Scoopy', 'Vario 125', 'Vario 160', 'Stylo 160', 'PCX 160', 'ADV 160'];

// Rate flat 1.75%/bulan sesuai leasing Klaten
function getBunga(tenor: number): number {
  if (tenor <= 12) return 0.0150;
  if (tenor <= 18) return 0.0165;
  if (tenor <= 24) return 0.0175;
  if (tenor <= 30) return 0.0178;
  if (tenor <= 36) return 0.0180;
  return 0.0185;
}

export default function Kalkulator() {
  const [motorVal, setMotorVal] = useState('');
  const [dpPct, setDpPct] = useState(20);
  const [tenor, setTenor] = useState(24);

  const result = (() => {
    if (!motorVal) return null;
    const [name, priceStr] = motorVal.split('|');
    const harga = parseInt(priceStr);
    const dp = Math.round(harga * dpPct / 100);
    const pokok = harga - dp;
    const rateBulan = getBunga(tenor);
    // Rumus angsuran flat: (pokok + pokok * rate * tenor) / tenor
    const bungaTotal = pokok * rateBulan * tenor;
    const angsuran = Math.round((pokok + bungaTotal) / tenor);
    return { name, harga, dp, pokok, rateBulan, angsuran, tenor };
  })();

  const waMsg = result
    ? encodeURIComponent(`Halo Rio, saya tertarik kredit Honda ${result.name}, DP ${dpPct}% = ${formatRp(result.dp)}, tenor ${tenor} bulan. Angsuran ~${formatRp(result.angsuran)}/bln. Mohon diproses segera!`)
    : '';
  const waLink = `https://wa.me/6287781658231${waMsg ? '?text=' + waMsg : ''}`;

  return (
    <section className="section bgDark2" id="kalkulator">
      <div className="sectionInner">
        <div className="sectionLabel">Simulasi Kredit</div>
        <h2 className="sectionTitle">Kalkulator<br />Angsuran</h2>
        <p className="sectionDesc">Hitung cicilan bulanan Anda sekarang. DP ringan, tenor fleksibel, proses cepat!</p>

        <div className="kalkulatorGrid">
          {/* FORM */}
          <div className="kalcForm">
            <div className="formGroup">
              <label htmlFor="sel-motor">Pilih Motor</label>
              <div className="selectWrap">
                <select id="sel-motor" value={motorVal} onChange={(e) => setMotorVal(e.target.value)}>
                  <option value="">-- Pilih Tipe Motor --</option>
                  {SERIES.map((s) => (
                    <optgroup key={s} label={s + ' Series'}>
                      {motors.filter((m) => m.series === s).map((m) => (
                        <option key={m.id} value={`${m.name}|${m.price}`}>
                          {m.name} — {formatRp(m.price)}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>

            <div className="formGroup">
              <label>
                Uang Muka (DP) —{' '}
                <strong style={{ color: '#111' }}>
                  {dpPct}%{result ? ` = ${formatRp(result.dp)}` : ''}
                </strong>
              </label>
              <div className="dpSliderWrap">
                <input type="range" min={10} max={70} step={5} value={dpPct}
                  onChange={(e) => setDpPct(+e.target.value)} />
                <div className="dpValue"><span>10%</span><span>70%</span></div>
              </div>
            </div>

            <div className="formGroup">
              <label>Tenor</label>
              <div className="tenorGrid">
                {TENORS.map((t) => (
                  <button key={t} type="button"
                    className={t === tenor ? 'tenorBtn tenorBtnActive' : 'tenorBtn'}
                    onClick={() => setTenor(t)}>
                    {t} Bln
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RESULT */}
          <div className="kalcResult">
            <div className="resultHeader">Hasil Simulasi Kredit</div>
            <div className="resultMotor">
              {result ? `Honda ${result.name}` : 'Pilih motor terlebih dahulu'}
            </div>

            <div className="resultRow">
              <span className="resultLabel">Harga OTR Klaten</span>
              <span className="resultVal">{result ? formatRp(result.harga) : '—'}</span>
            </div>
            <div className="resultRow">
              <span className="resultLabel">Uang Muka ({dpPct}%)</span>
              <span className="resultVal">{result ? formatRp(result.dp) : '—'}</span>
            </div>
            <div className="resultRow">
              <span className="resultLabel">Jumlah Kredit</span>
              <span className="resultVal">{result ? formatRp(result.pokok) : '—'}</span>
            </div>
            <div className="resultRow">
              <span className="resultLabel">Tenor</span>
              <span className="resultVal">{tenor} Bulan</span>
            </div>

            <div className="resultAngsuran">
              <div className="angsuranLabel">Angsuran Per Bulan</div>
              <div className="angsuranAmount">{result ? formatRp(result.angsuran) : '—'}</div>
              {result && <div className="angsuranSub">selama {tenor} bulan · rate {(result.rateBulan * 100).toFixed(2)}%/bln</div>}
            </div>

            {result && (
              <div className="promoBox">
                <div className="promoText">
                  🎉 <strong>Motor bisa langsung dibawa pulang!</strong><br />
                  Proses disetujui dalam 1 hari kerja.<br />
                  Hubungi Rio sekarang untuk <strong>dapatkan promo terbaik</strong>!
                </div>
              </div>
            )}

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="resultCta">
              📱 Proses Kredit Sekarang via WhatsApp
            </a>
            <p className="disclaimer">*Estimasi berdasarkan rate leasing berlaku di Klaten. Hubungi Rio untuk simulasi resmi & promo spesial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
