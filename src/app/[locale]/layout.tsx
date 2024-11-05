import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { MainLayout } from "@/components/layout/main-layout";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const inter = Play({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  keywords: [
    "Kraftjar",
    "фахівці",
    "послуги",
    "Крафтяр",
    "знайти фахівця",
    "сантехнік",
  ],
  title: {
    template: "%s | Kraftjar - знаходьте найкращих фахівців для своїх послуг",
    default: "Kraftjar - знаходьте найкращих фахівців для своїх послуг",
  },
  description:
    "Kraftjar is a platform that helps you to find the best professionals for your services.",
  openGraph: {
    type: "website",
    description:
      "Крафтяр - ваш надійний помічник у пошуку фахівців у будь-яких сферах або знаходженні нових завдань.",
    images: [
      "https://stage.website.kraftjar.net/static/phone/iPhone-15-Pro.png",
    ],
  },
  metadataBase: new URL("https://stage.website.kraftjar.net"),
  alternates: {
    canonical: "https://stage.website.kraftjar.net/uk",
    languages: {
      uk: "https://stage.website.kraftjar.net/uk",
      en: "https://stage.website.kraftjar.net/en",
    },
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <LanguageProvider>
          <MainLayout>{children}</MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
