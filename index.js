module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "prettier", "react", "react-hooks"],
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/type-annotation-spacing": "off",
    "@typescript-eslint/camelcase": "off",
    "consistent-return": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "default-case": ["error", { commentPattern: "^no default$" }],
    eqeqeq: ["error", "always", { null: "ignore" }],
    "no-console": "off",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-nested-ternary": "error",
    "no-unneeded-ternary": "error",
    "no-useless-return": "error",
    "object-shorthand": ["error", "always", { ignoreConstructors: false, avoidQuotes: true }],
    "prefer-const": "error",
    "prefer-destructuring": "error",
    "prefer-object-spread": "error",
    "prefer-spread": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "never" }],
    "react/jsx-pascal-case": ["error", { allowAllCaps: true, ignore: [] }],
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-string-refs": "error",
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unsafe": "error",
    "react/no-unused-state": "error",
    "react/prop-types": "off"
  }
};
