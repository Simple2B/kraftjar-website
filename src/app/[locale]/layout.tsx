import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { MainLayout } from "@/components/layout/main-layout";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

const inter = Play({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kraftjar - знаходьте найкращих фахівців для своїх послуг",
    default: "Kraftjar - знаходьте найкращих фахівців для своїх послуг",
  },
  description:
    "Kraftjar is a platform that helps you to find the best professionals for your services.",
  openGraph: {},
  twitter: {},
  robots: {},
  metadataBase: new URL("https://stage.website.kraftjar.net"),
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  return (
    <html lang={locale}>
      <body
        className={cn(inter.className, "mx-auto min-h-screen max-w-maxDesktop")}
      >
        <LanguageProvider>
          <MainLayout>{children}</MainLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
