import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

const globals = {
  // Define necessary global variables without any trailing spaces
  AudioWorkletGlobalScope: true,
  // Add other globals as needed
  window: true,
  document: true,
  console: true,
};

export default [
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: globals,
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];

