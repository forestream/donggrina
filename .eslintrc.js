module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    parser: '@typescript-eslint/parser', // ESLint 파서를 지정합니다.
    parserOptions: {
      ecmaFeatures: {
        jsx: true, // JSX를 파싱할 수 있습니다.
      },
      ecmaVersion: 12, // Modern ECMAScript를 파싱할 수 있습니다.
      sourceType: 'module', // import, export를 사용할 수 있습니다.
    },
    plugins: ['@typescript-eslint', 'prettier'],
  
    rules: {
      // ESLint 규칙을 지정합니다. extends에서 지정된 규칙을 덮어 쓸수도 있습니다.
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect', // 현재 사용하고 있는 react 버전을 eslint-plugin-react가 자동으로 감지합니다.
      },
    },
  };