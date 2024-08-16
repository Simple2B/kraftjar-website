import { getUsers } from "@/orval_api/users/users";
import type { SearchParamsProps } from "@/types/general";

import { ExpertsList } from "@/components/experts/experts-list";
import { AboutApp } from "@/components/home/about-app";
import { Faq } from "@/components/home/faq";

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  let query = "";

  if (!!searchParams && typeof searchParams.name === "string") {
    query = searchParams.name;
  }

  const { aPIPublicSearchUsers } = getUsers();

  const services = await aPIPublicSearchUsers({
    lang: "ua",
    selected_locations: [],
    query: query,
  });

  return (
    <>
      <ExpertsList experts={services.data} />
      <AboutApp />
      <Faq />
    </>
  );
}
