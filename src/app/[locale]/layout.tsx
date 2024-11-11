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
    "Крафтяр",
    "Kraftjar",
    "фахівці",
    "послуги",
    "знайти фахівця",
    "сантехнік",
  ],
  title: {
    template: "%s | Kraftjar - знаходьте найкращих фахівців для своїх послуг",
    default: "Kraftjar - знаходьте найкращих фахівців для своїх послуг",
  },
  description:
    "Крафтяр - ваш надійний помічник у пошуку фахівців у будь-яких сферах або знаходженні нових завдань.",
  openGraph: {
    type: "website",
    description:
      "Крафтяр - ваш надійний помічник у пошуку фахівців у будь-яких сферах або знаходженні нових завдань.",
    images: ["https://kraftjar.net/static/phone/iPhone-15-Pro.png"],
  },
  metadataBase: new URL("https://kraftjar.net"),
  alternates: {
    canonical: "https://kraftjar.net/uk",
    languages: {
      uk: "https://kraftjar.net/uk",
      en: "https://kraftjar.net/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
