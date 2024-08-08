import { SearchParamsProps } from "@/types/general";

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  let query = "";

  if (!!searchParams && typeof searchParams.name === "string") {
    query = searchParams.name;
  }

  return (
    <div>
      <h1>Search Experts Page</h1>
      <h2>Query: {query}</h2>
    </div>
  );
}
