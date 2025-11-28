import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";
import Header from "@/components/modules/Header/Header";
import Footer from "@/components/modules/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const iranSans = localFont({
  src: [
    { path: "./../fonts/iransans_regular.ttf", weight: "400", style: "normal" },
    { path: "./../fonts/iransans_medium.ttf", weight: "500", style: "normal" },
    { path: "./../fonts/iransans_bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-iransans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مجموعه آریانا وب",
  description: "آموزش خرید از سایت دربار و راهنمای مراحل سفارش",
  icons: "/Ariyana Logo.png",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();
  const isRtl = locale === "fa" || locale === "ar";

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${iranSans.variable} font-sans antialiased bg-white`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}