import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  images: {
    // Sponsor and partner logos are supplied as SVG. Next.js refuses to serve
    // SVG through next/image unless this is set, because an SVG can carry
    // scripts. Uploads are admin-only, and the CSP below neutralises any
    // embedded script, which is the mitigation Next.js documents for this.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default withPayload(nextConfig);
