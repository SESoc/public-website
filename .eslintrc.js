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
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "detect",
            "flowVersion": "0.53"
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
