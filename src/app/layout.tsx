import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RE Arquitetura & Design",
  description: "High-end architecture firm specializing in vertical construction and premium design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
