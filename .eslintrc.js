module.exports = {
    env: {
        node: true,
        es6: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended"],
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module",
    },
    "settings": {
        "react": {
            "createClass": "createReactClass", // Regex for Component Factory to use,
            // default to "createReactClass"
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "detect", // React version. "detect" automatically picks the version you have installed.
            // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
            // default to latest and warns if missing
            // It will default to "detect" in the future
            "flowVersion": "0.53" // Flow version
        },
        "linkComponents": [
            {"name": "Link", "linkAttribute": "to"},
            {"name": "OutboundLink", "linkAttribute": "to"}
        ]
    },
    rules: {
        "linebreak-style": ["error", "unix"],
        "arrow-spacing": [
            "error",
            {
                before: true,
                after: true,
            },
        ],
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "always-multiline",
            },
        ],
        "function-paren-newline": ["error", "multiline"],
        indent: ["error", 2],
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
        "no-buffer-constructor": "error",
        "no-console": "error",
        "no-multi-spaces": "error",
        "no-param-reassign": ["error"],
        "no-trailing-spaces": ["error"],
        "no-unused-vars": [
            "error",
            {
                args: "none",
            },
        ],
        "object-curly-spacing": ["error", "never"],
        "operator-linebreak": [
            "error",
            "before",
            { overrides: { "=": "none" } },
        ],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "react/jsx-key": ["off"]
    }
};
