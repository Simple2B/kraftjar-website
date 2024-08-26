import { Suspense } from "react";
import { getJobs } from "@/orval_api/jobs/jobs";
import { backendURL } from "@/lib/constants";
import { UkraineMap } from "./ukraine-map";

export async function MapFetchWrapper() {
  const { aPIGetPublicJobStatistics } = getJobs();

  const {
    data: { statistics },
  } = await aPIGetPublicJobStatistics(backendURL);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UkraineMap statistics={statistics} />
    </Suspense>
  );
}
