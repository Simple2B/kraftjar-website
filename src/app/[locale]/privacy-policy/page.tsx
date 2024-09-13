import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("PrivacyPolicy");
  const content = [
    {
      id: 1,
      title: t("list1.title"),
      text: t("list1.text"),
      list: [
        { id: 1, text: t("list1.point1") },
        { id: 2, text: t("list1.point2") },
        { id: 3, text: t("list1.point3") },
      ],
    },
    {
      id: 2,
      title: t("list2.title"),
      text: t("list2.text"),
      list: [
        { id: 1, text: t("list2.point1") },
        { id: 2, text: t("list2.point2") },
        { id: 3, text: t("list2.point3") },
        { id: 4, text: t("list2.point4") },
        { id: 5, text: t("list2.point5") },
      ],
    },
    {
      id: 3,
      title: t("list3.title"),
      text: t("list3.text"),
      list: [
        { id: 1, text: t("list3.point1") },
        { id: 2, text: t("list3.point2") },
      ],
    },
    {
      id: 4,
      title: t("list4.title"),
      text: t("list4.text"),
    },
    {
      id: 5,
      title: t("list5.title"),
      text: t("list5.text"),
      list: [
        { id: 1, text: t("list5.point1") },
        { id: 2, text: t("list5.point2") },
        { id: 3, text: t("list5.point3") },
      ],
    },
    {
      id: 6,
      title: t("list6.title"),
      text: t("list6.text"),
    },
    {
      id: 7,
      title: t("list7.title"),
      text: t("list7.text"),
    },
    {
      id: 8,
      title: t("list8.title"),
      text: (
        <>
          {t("list8.text")}{" "}
          {
            <Link
              className="text-blueMain"
              href="mailto:simple2b.info@gmail.com"
            >
              simple2b.info@gmail.com
            </Link>
          }
        </>
      ),
    },
  ];

  return (
    <div className="p-20">
      <h1 className="mb-4">{t("title")}</h1>
      <p className="mb-5">{t("description")}</p>

      {content.map((item) => (
        <div key={item.id} className="mb-5">
          <h2>{item.title}</h2>
          <span>{item.text}</span>

          <ul className="mx-8 list-disc">
            {item.list?.map((listItem) => (
              <li key={listItem.id}>{listItem.text}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="font-bold">{t("bottomText")}</div>
    </div>
  );
}
