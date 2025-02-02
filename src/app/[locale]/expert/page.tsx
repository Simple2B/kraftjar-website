import { ExpertProfile } from "@/components/experts/expert-profile";
import { AboutApp } from "@/components/home/about-app";
import { backendURL } from "@/lib/constants";
import { getLanguage } from "@/lib/utils";
import { getUsers } from "@/orval_api/users/users";
import type { SearchParamsProps } from "@/types/general";
import { getLocale } from "next-intl/server";

export async function generateMetadata({ searchParams }: SearchParamsProps) {
  let query = "";

  if (!!searchParams && typeof searchParams.uuid === "string") {
    query = searchParams.uuid;
  }

  const { aPIGetUserProfile } = getUsers();
  const { data } = await aPIGetUserProfile(query, {}, backendURL);

  return {
    title: data.fullname,
    openGraph: {
      title: data.fullname,
      description: data.description,
      images: [data.avatar_url || ""],
    },
  };
}

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  let query = "";

  const locale = await getLocale();

  if (!!searchParams && typeof searchParams.uuid === "string") {
    query = searchParams.uuid;
  }

  const { aPIGetUserProfile } = getUsers();
  const { data } = await aPIGetUserProfile(
    query,
    { lang: getLanguage(locale) },
    backendURL,
  );

  return (
    <>
      <ExpertProfile expert={data} />
      <AboutApp />
    </>
  );
}
