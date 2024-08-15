import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
  const t = useTranslations("Home.faq");

  const faqList = [
    {
      id: 1,
      question: t("questions.first.question"),
      answer: t("questions.first.answer"),
    },
    {
      id: 2,
      question: t("questions.second.question"),
      answer: t("questions.second.answer"),
    },
    {
      id: 3,
      question: t("questions.third.question"),
      answer: t("questions.third.answer"),
    },
    {
      id: 4,
      question: t("questions.fourth.question"),
      answer: t("questions.fourth.answer"),
    },
    {
      id: 5,
      question: t("questions.fifth.question"),
      answer: t("questions.fifth.answer"),
    },
  ];

  return (
    <div
      id="faq"
      className="w-full px-20 py-28 desktopEnd:px-4 desktopEnd:py-20"
    >
      <h2 className="mb-14">{t("title")}</h2>

      <Accordion type="single" collapsible className="">
        {faqList.map((faq, i) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className="text-left"
          >
            <AccordionTrigger>
              <div className="flex w-full items-center gap-8 text-left">
                {i + 1 < 10 ? "0" : ""}
                {i + 1}{" "}
                <span className="text-2xl font-bold">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
