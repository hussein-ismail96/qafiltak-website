import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "@/AuthProvider";
import "./globals.css";
import "@style";

const cairo = Cairo({ weight: "400", subsets: ["latin"] });

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
      <body className={cairo.className}>
        <AuthProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
