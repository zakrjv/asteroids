import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';

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
      <body className="p-4">
        <Header />
        {children}
      </body>
    </html>
  );
}
