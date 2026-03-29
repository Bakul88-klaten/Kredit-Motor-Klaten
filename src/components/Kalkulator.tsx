'use client';
import { useState } from 'react';
import { motors, getBunga, formatRp } from '@/data/motors';

const TENORS = [12, 18, 24, 30, 36, 48];
const SERIES = ['BeAT', 'Genio', 'Scoopy', 'Vario 125', 'Vario 160', 'Stylo 160', 'PCX 160', 'ADV 160'];

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
    const bunga = getBunga(tenor);
    const bungaTotal = pokok * bunga * (tenor / 12);
    const angsuran = Math.round((pokok + bungaTotal) / tenor);
    const total = pokok + bungaTotal + dp;
    return { name, harga, dp, pokok, bunga, angsuran, total };
  })();

  const waMsg = result
    ? encodeURIComponent(`Halo Rio, saya tertarik kredit Honda ${result.name} DP ${dpPct}% (${formatRp(result.dp)}), tenor ${tenor} bulan. Angsuran ~${formatRp(result.angsuran)}/bln. Mohon info lebih lanjut.`)
    : '';
  const waLink = `https://wa.me/6287781658231${waMsg ? '?text=' + waMsg : ''}`;

  return (
    <section className="section bgDark2" id="kalkulator">
      <div className="sectionInner">
        <div className="sectionLabel">Simulasi Kredit</div>
        <h2 className="sectionTitle">Kalkulator<br />Angsuran</h2>
        <p className="sectionDesc">Hitung estimasi angsuran sesuai motor, uang muka, dan tenor pilihan Anda.</p>

        <div className="kalkulatorGrid">
          <div className="kalcForm">
            {/* Pilih Motor */}
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

            {/* DP */}
            <div className="formGroup">
              <label>Uang Muka (DP) — <strong style={{ color: '#fff' }}>{dpPct}%{result ? ` = ${formatRp(result.dp)}` : ''}</strong></label>
              <div className="dpSliderWrap">
                <input type="range" min={10} max={70} step={5} value={dpPct} onChange={(e) => setDpPct(+e.target.value)} />
                <div className="dpValue"><span>10%</span><span>70%</span></div>
              </div>
            </div>

            {/* Tenor */}
            <div className="formGroup">
              <label>Tenor</label>
              <div className="tenorGrid">
                {TENORS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={t === tenor ? 'tenorBtn tenorBtnActive' : 'tenorBtn'}
                    onClick={() => setTenor(t)}
                  >
                    {t} Bln
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="kalcResult">
            <div className="resultHeader">Hasil Simulasi Kredit</div>
            <div className="resultMotor">{result ? `Honda ${result.name}` : 'Pilih motor terlebih dahulu'}</div>

            <div className="resultRow">
              <span className="resultLabel">Harga OTR Klaten</span>
              <span className="resultVal">{result ? formatRp(result.harga) : '—'}</span>
            </div>
            <div className="resultRow">
              <span className="resultLabel">Uang Muka ({dpPct}%)</span>
              <span className="resultVal">{result ? formatRp(result.dp) : '—'}</span>
            </div>
            <div className="resultRow">
              <span className="resultLabel">Jumlah Pinjaman</span>
              <span className="resultVal">{result ? formatRp(result.pokok) : '—'}</span>
            </div>
            <div className="resultRow">
              <span className="resultLabel">Bunga Flat/Tahun</span>
              <span className="resultVal">{result ? `${(result.bunga * 100).toFixed(1)}%` : '—'}</span>
            </div>
            <div className="resultRow">
              <span className="resultLabel">Tenor</span>
              <span className="resultVal">{tenor} Bulan</span>
            </div>

            <div className="resultAngsuran">
              <div className="angsuranLabel">Angsuran Per Bulan</div>
              <div className="angsuranAmount">{result ? formatRp(result.angsuran) : '—'}</div>
              {result && <div className="angsuranSub">selama {tenor} bulan</div>}
            </div>

            <div className="resultRow">
              <span className="resultLabel">Total Pembayaran</span>
              <span className="resultVal">{result ? formatRp(result.total) : '—'}</span>
            </div>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="resultCta">
              Ajukan Kredit via WhatsApp →
            </a>
            <p className="disclaimer">*Estimasi saja. Angsuran final tergantung kebijakan leasing. Hubungi Rio untuk info lengkap.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
