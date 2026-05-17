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
      <body className="relative min-h-full overflow-x-hidden bg-zinc-950 text-zinc-100 antialiased">
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 100% 55% at 50% -10%, rgba(161,161,170,0.12), transparent 45%), radial-gradient(ellipse 70% 50% at 100% 0%, rgba(39,39,42,0.55), transparent 42%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(24,24,27,0.9), transparent 50%)",
          }}
        />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
