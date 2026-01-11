import localFont from 'next/font/local'
import { Inter, Pacifico, Poppins, Yellowtail } from 'next/font/google'

// Fonte principal para headings - TT Runs Trial
export const ttRuns = localFont({
  src: [
    {
      path: '../../public/fonts/TT Runs Trial Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TT Runs Trial Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TT Runs Trial Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TT Runs Trial Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-tt-runs',
  display: 'swap',
  fallback: ['Bebas Neue', 'Oswald', 'sans-serif'],
})

// Fonte para corpo de texto - Inter
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Fonte cursiva para destaques - Pacifico
export const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

// Fonte para Hero - Poppins
export const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

// Fonte cursiva para internacional - Yellowtail
export const yellowtail = Yellowtail({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-yellowtail',
  display: 'swap',
})
