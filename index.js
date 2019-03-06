module.exports = {
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["@typescript-eslint", "prettier", "react", "react-hooks", "react-native"],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  },
  "env": {
    "es6": true,
    "node": true,
    "browser": true
  },
  "rules": {
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/type-annotation-spacing": 0,
    "consistent-return": 2,
    "default-case": [2, { "commentPattern": "^no default$" }],
    "eqeqeq": [2, "always", { "null": "ignore" }],
    "no-console": 0,
    "no-const-assign": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-useless-return": 2,
    "object-shorthand": [2, "always", { "ignoreConstructors": false, "avoidQuotes": true }],
    "prefer-const": 2,
    "prefer-destructuring": 2,
    "prefer-object-spread": 2,
    "prefer-spread": 2,
    "react-hooks/rules-of-hooks": 2,
    "react-native/no-color-literals": 2,
    "react/display-name": 0,
    "react/jsx-curly-brace-presence": [2, { "props": "never", "children": "never" }],
    "react/jsx-pascal-case": [2, { "allowAllCaps": true, "ignore": [] }],
    "react/no-access-state-in-setstate": 2,
    "react/no-array-index-key": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-redundant-should-component-update": 2,
    "react/no-string-refs": 2,
    "react/no-this-in-sfc": 2,
    "react/no-typos": 2,
    "react/no-unsafe": 2,
    "react/no-unused-state": 2,
    "react/prop-types": 0
  }
}