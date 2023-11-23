import Router from './components/Router';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { useEffect } from 'react';

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);
  max-width: var(--app-max-width, 375px);
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

function App() {
  function setScreenSize() {
    //vh 화면 비율 적용
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // vw 화면 비율 적용
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(375, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  }

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
