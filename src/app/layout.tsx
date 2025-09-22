import type { Metadata } from "next";
import { Poppins, Lato } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
});

const lato = Lato({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-proxima',
});

export const metadata: Metadata = {
  title: "E-Comm Product Page",
  description: "Frontend Intern Test",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${lato.variable} font-proxima bg-gray-50`}>
        {/* This single container now wraps your entire page, ensuring consistent width */}
        <div className="container mx-auto">
          <Header />
          <div className="bg-divider h-[1px]" />
          <main className="bg-white">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}