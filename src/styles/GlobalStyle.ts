import { createGlobalStyle, css } from 'styled-components';
import AppleSDGothicNeoR from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoR.ttf';
import AppleSDGothicNeoT from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoT.ttf';
import AppleSDGothicNeoUL from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoUL.ttf';
import AppleSDGothicNeoL from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoL.ttf';
import AppleSDGothicNeoM from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.ttf';
import AppleSDGothicNeoSB from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoSB.ttf';
import AppleSDGothicNeoB from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoB.ttf';
import AppleSDGothicNeoEB from '../assets/fonts/AppleSDGothicNeo/AppleSDGothicNeoEB.ttf';

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
    overflow-x: hidden;
    overflow-y: scroll;

    width: 100%;

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
    font-smooth: never;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
    font-weight: 100;
    src: local("AppleSDGothicNeoT"), url(${AppleSDGothicNeoT}) format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 200;
    src: local("AppleSDGothicNeoUL"), url(${AppleSDGothicNeoUL}) format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 300;
    src: local("AppleSDGothicNeoL"),url(${AppleSDGothicNeoL}) format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    src: local("AppleSDGothicNeoR"),url(${AppleSDGothicNeoR}) format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 500;
    src: local("AppleSDGothicNeoM"),url(${AppleSDGothicNeoM}) format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 600;
    src: local("AppleSDGothicNeoSB"),url(${AppleSDGothicNeoSB}) format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 700;
    src: local("AppleSDGothicNeoB"),url(${AppleSDGothicNeoB}) format("truetype");
}

@font-face {
    font-family: "AppleSDGothicNeo";
    font-weight: 800;
    src:local("AppleSDGothicNeoEB"),url(${AppleSDGothicNeoEB}) format("truetype");
}

#root, body, html {
    scrollbar-width: none; /* 파이어폭스 */
    max-width: 43rem;
    margin: 0 auto;

    -ms-overflow-style: none; /* 인터넷 익스플로러 */
}

#root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
}
`;

export default GlobalStyle;
