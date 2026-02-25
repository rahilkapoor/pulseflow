import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wardrobe",
  description: "Manage your wardrobe with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
