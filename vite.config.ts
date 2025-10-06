import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig(({ command }) => {
  const isDev = command === "serve";

  return {
    plugins: [react()],
    resolve: {
      dedupe: ["react", "react-dom"],
      alias: {
        react: resolve(__dirname, "./node_modules/react"),
        "react-dom": resolve(__dirname, "./node_modules/react-dom"),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, "src/index.ts"),
        name: "LumoraLogin",
        fileName: "lumora-login",
        formats: ["es", "umd"],
      },
      rollupOptions: {
        external: [
          "react",
          "react-dom",
          "@mui/material",
          "@mui/icons-material",
          "@emotion/react",
          "@emotion/styled",
          "react-hook-form",
          "@hookform/resolvers",
          "yup",
          // Only externalize LumoraOTP in production builds
          ...(isDev ? [] : ["@volenday/lumora-otp-component"]),
        ],
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
            "@mui/material": "MaterialUI",
            "@mui/icons-material": "MaterialUIIcons",
            "@emotion/react": "EmotionReact",
            "@emotion/styled": "EmotionStyled",
            "react-hook-form": "ReactHookForm",
            "@hookform/resolvers": "HookformResolvers",
            yup: "Yup",
            ...(isDev ? {} : { "@volenday/lumora-otp-component": "LumoraOTP" }),
          },
        },
      },
    },
    // Add development server configuration
    server: {
      port: 3000,
      open: true,
    },
  };
});
