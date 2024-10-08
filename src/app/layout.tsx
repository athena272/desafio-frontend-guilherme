import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/theme/ThemeRegistry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Desafio Front-end Guilherme',
  description: 'Um minigame com sistema de batalha entre os heróis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={ inter.className }>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
