import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Xara - Banking on WhatsApp',
  description: 'Instant Banking. No Apps. Just WhatsApp.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
