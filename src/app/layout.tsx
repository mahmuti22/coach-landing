import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Most Wanted Physique Coaching | Elvis & Ardit",
  description:
    "Most Wanted: premium physique coaching led by Elvis and Ardit. Training, nutrition, accountability—one standard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="page-metal-shell relative min-h-full overflow-x-hidden text-zinc-100 antialiased">
        <div className="page-metal-lights" aria-hidden="true" />
        <div className="relative z-0">{children}</div>
      </body>
    </html>
  );
}
