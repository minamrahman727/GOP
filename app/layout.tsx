import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: 'Government of Pakistan',
  description: 'The official website of the Government of Pakistan',
  openGraph: {
    title: 'Government of Pakistan',
    description: 'The official website of the Government of Pakistan',
    url: 'https://gov',
    siteName: 'Government of Pakistan',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'federal govt ensignia',
      },
    ],
    locale: 'en_US',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo1.png',
    apple: '/logo1.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
