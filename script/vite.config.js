import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "decimal-demo",
        replacement: path.resolve(__dirname, "../packages/decimal-demo"),
      },
      {
        find: "lodash-demo",
        replacement: path.resolve(__dirname, "../packages/lodash-demo"),
      },
    ],
  },
});
