export type MotorCategory = 'beat' | 'genio' | 'scoopy' | 'vario125' | 'vario160' | 'stylo' | 'pcx' | 'adv';

export interface Motor {
  id: string;
  name: string;
  series: string;
  cat: MotorCategory;
  price: number;
  img: string;
}

export const motors: Motor[] = [
  { id: 'beat-sporty-cbs',    name: 'BeAT Sporty CBS',           series: 'BeAT',      cat: 'beat',     price: 20890000, img: 'beat-sporty-cbs.webp' },
  { id: 'beat-iss-deluxe',    name: 'BeAT ISS Deluxe',           series: 'BeAT',      cat: 'beat',     price: 21690000, img: 'beat-iss-deluxe.webp' },
  { id: 'beat-iss-deluxe-sk', name: 'BeAT ISS Deluxe Smart Key', series: 'BeAT',      cat: 'beat',     price: 22290000, img: 'beat-iss-deluxe-smart-key.webp' },
  { id: 'beat-street',        name: 'BeAT Street',               series: 'BeAT',      cat: 'beat',     price: 21080000, img: 'beat-street.webp' },
  { id: 'genio-cbs',          name: 'Genio CBS',                 series: 'Genio',     cat: 'genio',    price: 21820000, img: 'genio-cbs.webp' },
  { id: 'genio-cbs-sc',       name: 'Genio CBS Special Color',   series: 'Genio',     cat: 'genio',    price: 22090000, img: 'genio-cbs-special-color.webp' },
  { id: 'genio-cbs-iss',      name: 'Genio CBS ISS',             series: 'Genio',     cat: 'genio',    price: 22380000, img: 'genio-cbs-iss.webp' },
  { id: 'scoopy-fashion',     name: 'Scoopy Fashion',            series: 'Scoopy',    cat: 'scoopy',   price: 24910000, img: 'scoopy-fashion.webp' },
  { id: 'scoopy-prestige',    name: 'Scoopy Prestige & Stylish', series: 'Scoopy',    cat: 'scoopy',   price: 25800000, img: 'scoopy-prestige-stylish.webp' },
  { id: 'vario125-cbs',       name: 'Vario 125 CBS',             series: 'Vario 125', cat: 'vario125', price: 26190000, img: 'vario-125-cbs.webp' },
  { id: 'vario125-iss',       name: 'Vario 125 ISS',             series: 'Vario 125', cat: 'vario125', price: 28040000, img: 'vario-125-iss.webp' },
  { id: 'vario125-street',    name: 'Vario 125 Street',          series: 'Vario 125', cat: 'vario125', price: 28595000, img: 'vario-125-street.webp' },
  { id: 'vario160-cbs',       name: 'Vario 160 CBS',             series: 'Vario 160', cat: 'vario160', price: 29890000, img: 'vario-160-cbs.webp' },
  { id: 'vario160-cbs-se',    name: 'Vario 160 CBS SE',          series: 'Vario 160', cat: 'vario160', price: 30140000, img: 'vario-160-cbs-se.webp' },
  { id: 'vario160-abs',       name: 'Vario 160 ABS',             series: 'Vario 160', cat: 'vario160', price: 33010000, img: 'vario-160-abs.webp' },
  { id: 'stylo160-cbs',       name: 'Stylo 160 CBS',             series: 'Stylo 160', cat: 'stylo',    price: 30980000, img: 'stylo-160-cbs.webp' },
  { id: 'stylo160-abs',       name: 'Stylo 160 ABS',             series: 'Stylo 160', cat: 'stylo',    price: 34050000, img: 'stylo-160-abs.webp' },
  { id: 'pcx160-cbs',         name: 'PCX 160 CBS',               series: 'PCX 160',   cat: 'pcx',      price: 36060000, img: 'pcx-160-cbs.webp' },
  { id: 'pcx160-abs',         name: 'PCX 160 ABS',               series: 'PCX 160',   cat: 'pcx',      price: 39860000, img: 'pcx-160-abs.webp' },
  { id: 'pcx160-abs-rs',      name: 'PCX 160 ABS Roadsync',      series: 'PCX 160',   cat: 'pcx',      price: 43020000, img: 'pcx-160-abs-roadsync.webp' },
  { id: 'adv160-cbs',         name: 'ADV 160 CBS',               series: 'ADV 160',   cat: 'adv',      price: 38280000, img: 'adv-160-cbs.webp' },
  { id: 'adv160-abs',         name: 'ADV 160 ABS',               series: 'ADV 160',   cat: 'adv',      price: 41120000, img: 'adv-160-abs.webp' },
];

export const categories: { value: 'all' | MotorCategory; label: string }[] = [
  { value: 'all',      label: 'Semua' },
  { value: 'beat',     label: 'BeAT' },
  { value: 'genio',    label: 'Genio' },
  { value: 'scoopy',   label: 'Scoopy' },
  { value: 'vario125', label: 'Vario 125' },
  { value: 'vario160', label: 'Vario 160' },
  { value: 'stylo',    label: 'Stylo 160' },
  { value: 'pcx',      label: 'PCX 160' },
  { value: 'adv',      label: 'ADV 160' },
];

export function getBunga(tenor: number): number {
  if (tenor <= 12) return 0.055;
  if (tenor <= 18) return 0.069;
  if (tenor <= 24) return 0.072;
  if (tenor <= 30) return 0.075;
  if (tenor <= 36) return 0.078;
  return 0.085;
}

export function formatRp(num: number): string {
  return 'Rp ' + Math.round(num).toLocaleString('id-ID');
}
