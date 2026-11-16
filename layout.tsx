import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'JEETU AI Super Agent', description: 'Your 12-agent AI workspace' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="hi"><body>{children}</body></html>; }
