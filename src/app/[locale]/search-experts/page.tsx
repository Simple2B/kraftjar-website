import { SearchParamsProps } from "@/types/general";

export default async function SearchExpertsPage({
  searchParams,
}: SearchParamsProps) {
  console.log("searchParams: ", searchParams);

  return (
    <div>
      <h1>Search Experts Page</h1>
    </div>
  );
}
