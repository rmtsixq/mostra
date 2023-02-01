import { Inter, Outfit } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Team Mostra | Robotik, Elektrikli Araçlar ve Otonom Teknoloji',
  description: 'Team Mostra - Robotik, elektrikli araçlar ve otonom teknoloji alanlarında geleceği inşa eden bir takım. FRC 10396.',
  keywords: ['robotik', 'FRC', 'Team Mostra', 'elektrikli araç', 'otonom', 'FIRST Robotics'],
  authors: [{ name: 'Team Mostra' }],
  icons: {
    icon: '/images/mostralogo-yesil.png',
    shortcut: '/images/mostralogo-yesil.png',
    apple: '/images/mostralogo-yesil.png',
  },
  openGraph: {
    title: 'Team Mostra | Robotik, Elektrikli Araçlar ve Otonom Teknoloji',
    description: 'Team Mostra - Robotik, elektrikli araçlar ve otonom teknoloji alanlarında geleceği inşa eden bir takım.',
    url: 'https://teammostra.com',
    siteName: 'Team Mostra',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team Mostra | Robotik ve Teknoloji',
    description: 'Robotik, elektrikli araçlar ve otonom teknoloji alanlarında geleceği inşa ediyoruz.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
