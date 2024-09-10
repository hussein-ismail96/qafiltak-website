import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "@/AuthProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../globals.css";
import "@style";

const cairo = Cairo({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.SITE_NAME,
  description: process.env.DESCRIPTION,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <AuthProvider>
        <html lang="en">
          <body className={cairo.className}>
            <NextUIProvider>{children}</NextUIProvider>
          </body>
        </html>
      </AuthProvider>
    </NextIntlClientProvider>
  );
}
