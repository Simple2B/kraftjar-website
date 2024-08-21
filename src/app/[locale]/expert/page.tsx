import { ExpertProfile } from "@/components/experts/expert-profile";
import { AboutApp } from "@/components/home/about-app";
import { backendURL } from "@/lib/constants";
import { getUsers } from "@/orval_api/users/users";
import type { SearchParamsProps } from "@/types/general";

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  let query = "";

  if (!!searchParams && typeof searchParams.uuid === "string") {
    query = searchParams.uuid;
  }

  const { aPIGetPublicUserProfile } = getUsers();
  const { data } = await aPIGetPublicUserProfile(query, {}, backendURL);

  return (
    <>
      <ExpertProfile expert={data} />
      <AboutApp />
    </>
  );
}
