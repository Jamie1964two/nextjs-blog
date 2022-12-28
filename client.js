// client.js
//import sanityClient from "@sanity/client";

// export default sanityClient({
//   projectId: "your-project-id", // you can find this in sanity.json
//   dataset: "production", // or the name you chose in step 1
//   useCdn: true, // `false` if you want to ensure fresh data
// });

import { createClient } from "next-sanity";

const client = createClient({
  projectId: "565dv1ol",
  dataset: "production",
  apiVersion: "2022-12-28",
  useCdn: false,
});

export default client;
