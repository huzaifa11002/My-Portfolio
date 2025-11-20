import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import SmoothScroll from "./component/SmoothScroll";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // select weights as needed
  variable: '--font-poppins', // optional for Tailwind
});

export const metadata: Metadata = {
  title: "Huzaifa Khan",
  description: "This is my portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-black text-white antialiased page-load`}>
        <SmoothScroll />
        <Header/>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
