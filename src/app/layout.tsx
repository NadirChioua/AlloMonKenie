import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import LanguageSelectorModal from "../components/LanguageSelectorModal";
import { Providers } from "../components/Providers";

export const metadata: Metadata = {
  title: "Allo mon kiné - Kinésithérapie à domicile à Tanger",
  description: "Service professionnel de kinésithérapie à domicile à Tanger. Pour seniors, adultes et post-opératoire. Soins de qualité chez vous.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased min-h-screen flex flex-col bg-white text-slate-800">
        <Providers>
          <LanguageSelectorModal />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </Providers>
      </body>
    </html>
  );
}
