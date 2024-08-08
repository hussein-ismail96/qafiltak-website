import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "@/AuthProvider";
import "./globals.css";
import "@style";


const inter = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.SITE_NAME,
  description: process.env.DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
        <AuthProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </AuthProvider>
        </main>
      </body>
    </html>
  );
}
