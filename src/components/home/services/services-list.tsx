import { Link } from "@/navigation";
import { getService } from "@/orval_api/service/service";
import { backendURL, DEFAUL_PAGE_SIZE } from "@/lib/constants";
import { OrderType, UsersOrderBy } from "@/orval_api/model";

export const ServicesList = async () => {
  const { aPIGetPopularServices } = getService();
  const {
    data: { services },
  } = await aPIGetPopularServices(backendURL);

  const serchParams = `&page=1&size=${DEFAUL_PAGE_SIZE}&order_type=${OrderType.desc}&order_by=${UsersOrderBy.average_rate}`;

  return (
    <div className="mb-3 grid grid-cols-[repeat(auto-fill,minmax(max-content,294px))] grid-rows-4 place-content-center place-items-center gap-y-6">
      {services.map((service) => (
        <div key={service.name}>
          <Link
            className="link-style text-lg font-bold"
            href={`/search-experts/?name=${service.name}` + serchParams}
          >
            {service.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
