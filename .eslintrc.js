module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
        "plugin:prettier/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "prettier", "import"],
    rules: {
        "prettier/prettier": "error",
        "import/extensions": "off",
        "import/no-unresolved": "error",
        "no-console": "off",
        "no-plusplus": "off",
        "no-non-null-assertion": off,
        "import/order": [
            "error",
            {
                "newlines-between": "never",
                groups: [
                    ["builtin", "external"],
                    ["internal", "parent", "sibling", "index"],
                ],
            },
        ],
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,

                project: "./tsconfig.json",
            },
        },
    },
    globals: {
        NodeJS: true,
    },
};
