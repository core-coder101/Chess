import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import legacy from "@vitejs/plugin-legacy";
import path from "path";

export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      open: true,
      host: true,
    },
    base: env.VITE_BASE_PATH,
    plugins: [
      react(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
  };
});
