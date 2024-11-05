import { backendURL } from "@/lib/constants";
import { getUsers } from "@/orval_api/users/users";

export default async function sitemap() {
  const baseUrlUK = "https://stage.website.kraftjar.net/uk";
  const { aPIGetUsers } = getUsers();

  const {
    data: { items },
  } = await aPIGetUsers({ query: "" }, backendURL);

  const users = items.map((user) => {
    return {
      url: `${baseUrlUK}/expert/${user.uuid}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrlUK,
      lastModified: new Date(),
    },
    ...users,
  ];
}
