import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const config = {
    plugins: [react()],
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
    define: {
      "process.env.REACT_PUBLIC_API_BASE_URL": JSON.stringify(
        env.REACT_PUBLIC_API_BASE_URL
      ),
    },
    base: "/",
  };
  if (command !== "serve") {
    config.base = "/task-manager-front-end/";
  }

  return config;
});

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.REACT_PUBLIC_API_BASE_URL': JSON.stringify(env.REACT_PUBLIC_API_BASE_URL)
//     },
//     plugins: [react()],
//   }
// })
