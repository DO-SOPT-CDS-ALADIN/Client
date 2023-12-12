import Router from './components/Router';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { useSetScreenSizeOnResizeEvent } from './hooks/useSetScreenSizeOnResizeEvent';

const Wrapper = styled.div`
  position: relative;

  max-width: var(--app-max-width, 375px);
  min-height: calc(var(--vh, 1vh) * 100);
  margin-right: auto;
  margin-left: auto;

  border: none;
`;

function App() {
  useSetScreenSizeOnResizeEvent();
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
