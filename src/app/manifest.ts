import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Крафтяр | Знаходьте найкращих фахівців для своїх послуг",
    short_name: "Крафтяр",
    description:
      "Крафтяр - ваш надійний помічник у пошуку фахівців у будь-яких сферах або знаходженні нових завдань",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/static/logos/logo.svg",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
