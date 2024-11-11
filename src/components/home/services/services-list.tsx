import { Link } from "@/navigation";
import { getService } from "@/orval_api/service/service";
import { backendURL } from "@/lib/constants";
import { formatURI } from "@/lib/utils";

export const ServicesList = async () => {
  const { aPIGetPopularServices } = getService();
  const {
    data: { services },
  } = await aPIGetPopularServices(backendURL);

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
