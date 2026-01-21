import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Footer, Navbar } from "@/components/global";

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://soberanotricolor.com.br"),
  title: {
    default: "Soberano Tricolor | Notícias do São Paulo FC",
    template: "%s | Soberano Tricolor"
  },
  description: "O maior portal independente de notícias sobre o São Paulo Futebol Clube. Análises, mercado da bola e tudo sobre o MorumBIS.",
  keywords: ["São Paulo FC", "SPFC", "Notícias SPFC", "MorumBIS", "Tricolor Paulista"],
  icons: {
    icon: "/favicon.ico", // Coloque seu favicon na pasta public
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-SEU_ID_AQUI"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
