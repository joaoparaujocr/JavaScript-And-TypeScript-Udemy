module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'react/jsx-filename-extension': 0,
        'react/react-in-jsx-scope': 0,
        'react/jsx-indent': 0,
        'react/state-in-constructor': 0,
    },
};
