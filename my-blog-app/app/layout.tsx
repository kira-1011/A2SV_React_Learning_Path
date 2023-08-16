import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../redux/features/Providers";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bloggy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-600 p-2">
        <header className="px-8 py-4">
          <nav className="flex justify-between">
            <div className="font-bold text-5xl">
              <Link href="/">
                Bloggy
              </Link>
            </div>
            <div>
              <Link
                href={`/blogs/create`}
                className="inline-block space-y-4"
              >
                <button className=" font-bold border border-gray-400 px-4 py-2 rounded hover:bg-gray-600 hover:text-white disabled:bg-gray-200 disabled:text-gray-500">
                  Create blog
                </button>
              </Link>
            </div>
          </nav>
        </header>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}