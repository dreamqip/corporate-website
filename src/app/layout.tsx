import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Manuvantara Development',
  description:
    'Manuvantara is a strategic web3 agency that empowers its clients to adopt blockchain technology for the good of their businesses.',
  manifest: '/site.webmanifest',
  themeColor: '#FFFFFF',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='motion-safe:scroll-smooth'>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
