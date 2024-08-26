import { Suspense } from "react";
import { backendURL } from "@/lib/constants";
import { getUsers } from "@/orval_api/users/users";
import { ExpertsCarousel } from "./experts-carousel";

export async function ExpertsFetchWrapper() {
  const { aPIGetPublicTopExperts } = getUsers();

  const {
    data: { top_experts },
  } = await aPIGetPublicTopExperts({}, backendURL);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExpertsCarousel experts={top_experts} />
    </Suspense>
  );
}
