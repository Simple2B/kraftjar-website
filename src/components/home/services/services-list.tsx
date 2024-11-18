import { Link } from "@/navigation";
import { getService } from "@/orval_api/service/service";
import { backendURL } from "@/lib/constants";
import { formatURI, getLanguage } from "@/lib/utils";
import { getLocale } from "next-intl/server";

export const ServicesList = async () => {
  const locale = await getLocale();
  const { aPIGetPopularServices } = getService();

  const {
    data: { services },
  } = await aPIGetPopularServices({ lang: getLanguage(locale) }, backendURL);

  return (
    <div className="mb-3 grid grid-cols-[repeat(auto-fill,minmax(max-content,294px))] grid-rows-4 place-content-center place-items-center gap-y-6">
      {services.map((service) => (
        <div key={service.name}>
          <Link
            className="link-style text-lg font-bold"
            href={formatURI({ query: service.name })}
          >
            {service.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
