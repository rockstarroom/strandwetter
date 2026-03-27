import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strandwetter",
  description: "Strandwetter auf Borkum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
