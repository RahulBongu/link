import type { Metadata } from 'next';
import './globals.css';
import SiteShell from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'DevLink | Your Entire Developer Identity',
  description: 'A premium developer identity platform for portfolios, recruiting, and hiring.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
