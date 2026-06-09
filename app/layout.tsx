import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cedrick Alegsao | Portfolio",
  description: "Created to showcase my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
