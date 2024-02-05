import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manuvantara Development',
  description:
    'Manuvantara is a strategic web3 agency that empowers its clients to adopt blockchain technology for the good of their businesses.',
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
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
        <Script
          defer
          src='https://static.cloudflareinsights.com/beacon.min.js'
          data-cf-beacon='{"token": "0a8d1a9d266241fb92bf399c243dd13c"}'
          strategy='afterInteractive'
        />
      </body>
    </html>
  );
}
