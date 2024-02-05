import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Burnout Index",
  description: "Hackweek Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen w-full">
          <header>
            <Navbar />
          </header>
          <div className="flex-grow w-4/5 mx-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}
