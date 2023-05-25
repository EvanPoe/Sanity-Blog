import { createClient } from "@sanity/client";

const options = {
  dataset: process.env.SANITY_DATASET_NAME,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  // useCdn === true, gives faster response but gives cached data
  // false, slower but gives latest data (good for development)
};

export const client = createClient(options);
