module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'no-duplicate-imports': 'error', //중복 Import 방지
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }], //콘솔은 확인했으면 코드 지우기
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error', //사용하지 않은 변수 없애기
    'no-multiple-empty-lines': 'error', //공백 금지
    'no-undef': 'error', //정의 안 한 변수 사용 x
    indent: ['error', 2], //들여쓰기 2칸
    'no-trailing-spaces': 'error', // 쓸데없는 공백 없애기
    'import/newline-after-import': ['error', { count: 1 }], //import 구문들 뒤에 한 칸 띄우고 코드 작성
    //참고로 import 의 경우에는 따로 import 플러그인을 설치해야 하고 .eslintrc 의 plugin 배열에 import 를 추가해야 한다.
  },
};
