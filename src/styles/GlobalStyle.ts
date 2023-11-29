import { createGlobalStyle, css } from 'styled-components';
import AppleSDGothicNeoRegular from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoR.ttf';

export const reset = css`
  * {
    margin: 0;
    padding: 0;

    font-size: 62.5%;
    color: inherit;
    vertical-align: baseline;
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  :root {
    line-height: 1.5;
    text-size-adjust: 100%;
    text-size-adjust: 100%;
    word-break: break-word;
    overflow-wrap: break-word;
    tab-size: 4;

    background-color: ${({ theme }) => theme.colors.grey_200};

    -webkit-tap-highlight-color: transparent;
  }
  html,
  body {
    height: 100%;
  }
  button {
    cursor: pointer;
    background: none;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
`;

export const GlobalStyle = createGlobalStyle`
${reset}

 @font-face {
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    src: local("AppleSDGothicNeoR"), url(${AppleSDGothicNeoRegular}) format('truetype');
}

#root, body, html {
    scrollbar-width: none; /* 파이어폭스 */

    overflow-y: auto;

    max-width: 43rem;
    margin: 0 auto;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
}

#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
`;

export default GlobalStyle;
