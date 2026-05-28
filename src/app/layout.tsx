import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SportProvider } from "@/lib/SportContext";

export const metadata: Metadata = {
  title: "Etnolyga | Lietuviški tradiciniai sporto žaidimai",
  description: "Etnolyga – iniciatyva, siekianti inovatyviai plėtoti Lietuvos tradicinius sporto žaidimus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Funnel+Display:wght@600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <SportProvider>
          <Navbar />
          <main className="flex-1 pb-12 pt-14">{children}</main>
          <Footer />
        </SportProvider>
      </body>
    </html>
  );
}
