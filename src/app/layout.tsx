import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://istanbulmobiltasima.com"),
  title: "İstanbul Mobil Taşıma - Güvenilir Kurye ve Nakliyat Hizmetleri",
  description: "İstanbul'un tüm ilçelerine hızlı, güvenilir ve profesyonel mobil taşıma ve kurye hizmetleri. Kadıköy, Beşiktaş, Üsküdar, Şişli ve diğer tüm ilçelerde 7/24 hizmetinizdeyiz.",
  keywords: [
    "İstanbul mobil taşıma",
    "İstanbul kurye",
    "İstanbul nakliyat",
    "Kadıköy taşıma",
    "Beşiktaş kurye",
    "Üsküdar nakliyat",
    "Şişli taşıma",
    "Beyoğlu kurye",
    "Ataşehir nakliyat",
    "Maltepe taşıma",
    "Bakırköy kurye",
    "Beylikdüzü nakliyat",
    "Pendik taşıma",
    "Kartal kurye",
    "Sarıyer nakliyat",
    "ev taşıma",
    "ofis taşıma",
    "güvenilir nakliyat",
    "hızlı kurye",
    "profesyonel taşıma"
  ],
  authors: [{ name: "İstanbul Mobil Taşıma" }],
  creator: "İstanbul Mobil Taşıma",
  publisher: "İstanbul Mobil Taşıma",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://istanbulmobiltasima.com",
    siteName: "İstanbul Mobil Taşıma",
    title: "İstanbul Mobil Taşıma - Güvenilir Kurye ve Nakliyat Hizmetleri",
    description: "İstanbul'un tüm ilçelerine hızlı, güvenilir ve profesyonel mobil taşıma ve kurye hizmetleri. 7/24 hizmetinizdeyiz.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "İstanbul Mobil Taşıma"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
