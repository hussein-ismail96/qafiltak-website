/** @type {import('next').NextConfig} */
import nextIntl from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
};

const withNextIntl = nextIntl("./src/i18n.ts");
export default bundleAnalyzer(withNextIntl(nextConfig));
