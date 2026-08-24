import { createFileRoute } from "@tanstack/react-router";
import { DiscoverPathPage } from "@/components/discover/DiscoverPathPage";

const title = "Discover Your Path | Rishi Sidhasamdhi Yoga Foundation";
const description =
  "Find the yoga and meditation practices that support your body, mind and awareness. Choose your intention and begin where you are.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DiscoverPathPage,
});
