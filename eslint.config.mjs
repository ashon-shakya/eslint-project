import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  { 
    // Adding the semi rule
    rules: { 
      "semi": ["error", "always"] ,
      "camelcase": "error",
      "indent": ["error", 2],
      "quotes": ["error", "double"],
      // "no-console": "warn",
      "no-unused-vars": "warn",
      "eqeqeq": ["warn"],
      "comma-dangle": ["warn", "never"],
      "no-extra-semi": "error",
      "no-undef": "error",
      "no-unused-expressions": "error",
      "no-var": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }]
    }
  } 
];