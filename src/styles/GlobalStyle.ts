import { createGlobalStyle, css } from 'styled-components';

export const reset = css`
  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    vertical-align: baseline;
    color: inherit;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    tab-size: 4;
  }
  html,
  body {
    height: 100%;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
${reset}

 @font-face {
        font-family: "AppleSDGothicNeo";
  src: local("Apple SD Gothic Neo Regular"), url('AppleSDGothicNeoT.woff2') format('woff2');
        font-style: normal;
  }

#root, body, html {
    max-width: 43rem;
    margin: 0 auto;
    overflow-y: auto;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
}

#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
`;

export default GlobalStyle;
