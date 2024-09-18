import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import AuthProvider from "@/AuthProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { StoreProvider } from "@/store/StoreProvider";

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
    <html lang={params.locale} dir={params.locale === "en" ? "ltr" : "rtl"}>
      <body className={cairo.className}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <AuthProvider>
            <StoreProvider>
              <NextUIProvider>{children}</NextUIProvider>
            </StoreProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
