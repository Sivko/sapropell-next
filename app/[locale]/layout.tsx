import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Cursor from "@/components/cursor";
import Modals from "@/modals";

export const metadata: Metadata = {
  title: "Sapropell",
  description: "Natural unique component - sapropel fertilizer",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const locale = (await params).locale
  return (
    <html lang={locale}>
      <body>
        {/* <NextIntlClientProvider messages={messages}>
          <Cursor />
          {children}
          <Modals />
        </NextIntlClientProvider> */}
      </body>
    </html>
  );
}
