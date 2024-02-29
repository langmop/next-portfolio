import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

async function fetchEntries() {
  try {
    const entries = await client.getEntries({ content_type: "portfolioNext" });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for Portfolio.`);
  } catch (error) {
    console.log(error);
  }
}

export default fetchEntries;
