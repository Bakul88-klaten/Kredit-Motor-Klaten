export type YamahaCategory = 'mio' | 'freego' | 'filano' | 'aerox' | 'nmax' | 'lexi' | 'xmax';

export interface YamahaMotor {
  id: string;
  name: string;
  series: string;
  cat: YamahaCategory;
  price: number;
  img: string;
}

export const yamahaMotors: YamahaMotor[] = [
  { id: 'mio-m3',         name: 'Mio M3 125',           series: 'Mio',    cat: 'mio',    price: 17150000, img: 'mio-m3-125.webp' },
  { id: 'mio-s',          name: 'Mio S 125',            series: 'Mio',    cat: 'mio',    price: 18650000, img: 'mio-s-125.webp' },
  { id: 'mio-aerox-s',    name: 'Mio Aerox 125 S',      series: 'Mio',    cat: 'mio',    price: 23400000, img: 'mio-aerox-125-s.webp' },
  { id: 'freego-s',       name: 'FreeGo S 125',         series: 'FreeGo', cat: 'freego', price: 21450000, img: 'freego-s-125.webp' },
  { id: 'freego-s-abs',   name: 'FreeGo S 125 ABS',     series: 'FreeGo', cat: 'freego', price: 23150000, img: 'freego-s-125-abs.webp' },
  { id: 'filano-hybrid',  name: 'Filano Hybrid',        series: 'Filano', cat: 'filano', price: 25900000, img: 'filano-hybrid.webp' },
  { id: 'filano-hybrid-connected', name: 'Filano Hybrid Connected', series: 'Filano', cat: 'filano', price: 27500000, img: 'filano-hybrid-connected.webp' },
  { id: 'aerox-s',        name: 'Aerox S 155',          series: 'Aerox',  cat: 'aerox',  price: 30800000, img: 'aerox-s-155.webp' },
  { id: 'aerox-s-abs',    name: 'Aerox S 155 ABS',      series: 'Aerox',  cat: 'aerox',  price: 33100000, img: 'aerox-s-155-abs.webp' },
  { id: 'nmax-turbo',     name: 'NMax Turbo',           series: 'NMax',   cat: 'nmax',   price: 36500000, img: 'nmax-turbo.webp' },
  { id: 'nmax-turbo-tech', name: 'NMax Turbo Tech Max', series: 'NMax',   cat: 'nmax',   price: 40500000, img: 'nmax-turbo-tech-max.webp' },
  { id: 'lexi-s',         name: 'Lexi S 125',           series: 'Lexi',   cat: 'lexi',   price: 24200000, img: 'lexi-s-125.webp' },
  { id: 'lexi-s-abs',     name: 'Lexi S 125 ABS',       series: 'Lexi',   cat: 'lexi',   price: 26000000, img: 'lexi-s-125-abs.webp' },
  { id: 'xmax-connected', name: 'XMax Connected',       series: 'XMax',   cat: 'xmax',   price: 56000000, img: 'xmax-connected.webp' },
];

export const yamahaCategories: { value: 'all' | YamahaCategory; label: string }[] = [
  { value: 'all',     label: 'Semua' },
  { value: 'mio',     label: 'Mio' },
  { value: 'freego',  label: 'FreeGo' },
  { value: 'filano',  label: 'Filano' },
  { value: 'aerox',   label: 'Aerox' },
  { value: 'nmax',    label: 'NMax' },
  { value: 'lexi',    label: 'Lexi' },
  { value: 'xmax',    label: 'XMax' },
];

export function getBungaYamaha(tenor: number): number {
  if (tenor <= 12) return 0.0150;
  if (tenor <= 18) return 0.0165;
  if (tenor <= 24) return 0.0175;
  if (tenor <= 30) return 0.0178;
  if (tenor <= 36) return 0.0180;
  return 0.0185;
}

export function formatRpY(num: number): string {
  return 'Rp ' + Math.round(num).toLocaleString('id-ID');
}
