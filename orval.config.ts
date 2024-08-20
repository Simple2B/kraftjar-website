import { defineConfig } from "orval";

// require("dotenv").config();

module.exports = defineConfig({
  api: {
    output: {
      // baseUrl: "http://127.0.0.1:5002",
      mode: "tags-split",
      target: "src/orval_api/api.generated.ts",
      schemas: "src/orval_api/model",
      client: "axios",
    },
    input: "./openapi.json",
  },
});
