import { PageUserSearchOutSize } from "@/orval_api/model";

/**It is important that this is present in every API.
 * @access For server side only.
 */
export const backendURL = { baseURL: process.env.API_URL };

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE: PageUserSearchOutSize = 10;

export const INSTRUCTIONS_STEPS = [
  {
    id: 1,
    text: "Відкрий магазин додатків на своєму пристрої і знайдіть застосунок Крафтяр",
  },
  {
    id: 2,
    text: "Після знаходження додатка натисніть кнопку Встановити та дочекайтеся завершення процесу встановлення",
  },
  {
    id: 3,
    text: "Відкрийте додаток Крафтяр, зареєструйся і шукай фахівців або завдання, що тебе цікавлять",
  },
];

export function formatDate(dateString: string, lang: string): string {
  const now = new Date();
  const date = new Date(dateString);
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  const seconds = diff;
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const uk = lang === "uk";

  if (seconds < 60) return `${seconds} ${uk ? "секунд тому" : "seconds ago"} `;
  if (minutes < 60) return `${minutes} ${uk ? "хвилин тому" : "minutes ago"}`;
  if (hours < 24) return `${hours} ${uk ? "годин тому" : "hours ago"}`;

  return `${days} ${uk ? "днів тому" : "days ago"}`;
}
