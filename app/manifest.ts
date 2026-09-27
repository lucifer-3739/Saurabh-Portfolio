import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Saurabh Sharma | Creative Developer & UI/UX Designer",
    short_name: "Saurabh Sharma",
    description:
      "Portfolio of Saurabh Sharma, a creative developer & UI/UX designer crafting high-end, responsive digital experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
