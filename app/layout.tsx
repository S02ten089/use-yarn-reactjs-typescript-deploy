// app/layout.tsx
import React from 'react';

export const metadata = {
  title: 'My App',
  description: 'This is my app layout',
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
