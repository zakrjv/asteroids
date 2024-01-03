import type { Metadata } from 'next';
import Header from '@/components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Asteroids',
  description:
    'Online service for monitoring and destroying dangerous asteroids',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="p-4 before:content-[url(/planet-mobile.png)] before:fixed before:z-[-1] before:left-0 md:before:content-[url(/planet-tablet.png)] xl:before:content-[url(/planet-desktop.png)]">
        <Header />
        {children}
      </body>
    </html>
  );
}
