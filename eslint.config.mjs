import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    ignores: [
      ".DS_Store",
      ".next/**",
      ".next_corrupt_1771786151/**",
      "node_modules/**",
      "public/sequence/**",
      "Animation/**",
    ],
  },
];

export default config;
