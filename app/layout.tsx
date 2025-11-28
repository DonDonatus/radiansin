import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Radiansin | Professional Ushering Services for Unforgettable Events",
  description: "Radiansin provides exceptional ushering services that elevate your events. From weddings to corporate gatherings, our trained professionals ensure seamless guest experiences with grace and sophistication.",
  keywords: [
    "ushering services",
    "event ushers",
    "professional ushers",
    "wedding ushers",
    "corporate event staff",
    "event management",
    "hospitality services",
    "guest services"
  ],
  authors: [{ name: "Radiansin" }],
  openGraph: {
    title: "Radiansin - Professional Ushering Services",
    description: "Elevating Events with Grace and Professionalism",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`font-sans ${playfair.className}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}