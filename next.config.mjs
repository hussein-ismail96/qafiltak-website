/** @type {import('next').NextConfig} */
import nextIntl from "next-intl/plugin";


const nextConfig = {
  reactStrictMode: false,
  output: "standalone",
};

const withNextIntl = nextIntl("./src/i18n.ts");
export default withNextIntl(nextConfig);
