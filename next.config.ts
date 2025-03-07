// import { withSentryConfig } from "@sentry/nextjs";
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "standalone",
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

// export default withSentryConfig(nextConfig);

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; connect-src 'self' https://services.gouale.com; frame-ancestors 'none'; img-src 'self' https://images.unsplash.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
