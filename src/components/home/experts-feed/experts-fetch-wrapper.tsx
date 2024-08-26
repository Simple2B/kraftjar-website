import { backendURL } from "@/lib/constants";
import { getUsers } from "@/orval_api/users/users";
import { ExpertsCarousel } from "./experts-carousel";

export async function ExpertsFetchWrapper() {
  const { aPIGetPublicTopExperts } = getUsers();

  const {
    data: { top_experts },
  } = await aPIGetPublicTopExperts({}, backendURL);

  return <ExpertsCarousel experts={top_experts} />;
}
