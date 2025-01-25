import globals from "globals";
import pluginJs from "@eslint/js";
// import nodePlugin from "eslint-plugin-node";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        process: "readonly", // Definisikan 'process' sebagai variabel global
      },
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
];
