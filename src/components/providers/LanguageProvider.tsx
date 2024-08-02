import { NextIntlClientProvider, useMessages } from "next-intl";

export const LanguageProvider = ({ children }: any) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
