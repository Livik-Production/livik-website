import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/angular",
        destination: "/services/angular-development",
        permanent: true,
      },
      {
        source: "/hire-developers/angular",
        destination: "/hire-angular-js-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/devops",
        destination: "/hire-devops-engineers",
        permanent: true,
      },
      {
        source: "/hire-developers/java",
        destination: "/hire-java-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/next",
        destination: "/hire-next-js-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/node",
        destination: "/hire-node-js-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/php",
        destination: "/hire-php-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/python",
        destination: "/hire-python-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/react-native",
        destination: "/hire-react-native-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/react",
        destination: "/hire-react-js-developers",
        permanent: true,
      },
      {
        source: "/hire-developers/sap",
        destination: "/hire-sap-consultants",
        permanent: true,
      },
      {
        source: "/hire-developers/shopify",
        destination: "/hire-shopify-developers",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/hire-angular-js-developers",
        destination: "/hire-developers/angular",
      },
      {
        source: "/hire-devops-engineers",
        destination: "/hire-developers/devops",
      },
      {
        source: "/hire-java-developers",
        destination: "/hire-developers/java",
      },
      {
        source: "/hire-next-js-developers",
        destination: "/hire-developers/next",
      },
      {
        source: "/hire-node-js-developers",
        destination: "/hire-developers/node",
      },
      {
        source: "/hire-php-developers",
        destination: "/hire-developers/php",
      },
      {
        source: "/hire-python-developers",
        destination: "/hire-developers/python",
      },
      {
        source: "/hire-react-native-developers",
        destination: "/hire-developers/react-native",
      },
      {
        source: "/hire-react-js-developers",
        destination: "/hire-developers/react",
      },
      {
        source: "/hire-sap-consultants",
        destination: "/hire-developers/sap",
      },
      {
        source: "/hire-shopify-developers",
        destination: "/hire-developers/shopify",
      },
    ];
  },
};

export default nextConfig;
