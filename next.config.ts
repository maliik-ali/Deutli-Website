import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // B1 Course and Playbook pages stay live (just unlinked) while the landing page focuses on the platform.
  async rewrites() {
    return [
      { source: "/course", destination: "/course.html" },
      { source: "/playbook", destination: "/playbook.html" },
    ];
  },
  async redirects() {
    return [{ source: "/index.html", destination: "/", permanent: false }];
  },
  async headers() {
    return [
      { source: "/course.html", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
      { source: "/playbook.html", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
};

export default nextConfig;
