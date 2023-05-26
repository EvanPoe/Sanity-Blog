import { client } from "./sanity.js";

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{title, subtitle, slug}`);
  return results;
}
