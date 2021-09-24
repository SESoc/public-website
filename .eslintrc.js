module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  settings: {
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
      flowVersion: "0.53",
    },
    linkComponents: [
      { name: "Link", linkAttribute: "to" },
      { name: "OutboundLink", linkAttribute: "to" },
    ],
  },
  rules: {
    "no-console": "warn",
    "no-param-reassign": "error",
    "react/jsx-key": ["off"],
  },
  // Use prettier for code formatting and eslint soley for linting
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
};
