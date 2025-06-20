import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chatbot with Together AI',
  description: 'A chatbot powered by Together AI and deployed on Vercel',
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
