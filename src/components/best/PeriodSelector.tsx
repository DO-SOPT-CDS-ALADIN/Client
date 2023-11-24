import styled from 'styled-components';

interface PeriodSelectorProps {
  setIsShowSelector: (value: boolean) => void;
}

function PeriodSelector({ setIsShowSelector }: PeriodSelectorProps) {
  return (
    <>
      <Overlay onClick={() => setIsShowSelector(false)} />
      <SelectorWrapper>
        <Selector>일간</Selector>
        <Selector>주간</Selector>
        <Selector>월간</Selector>
        <Selector>연간</Selector>
      </SelectorWrapper>
    </>
  );
}
export default PeriodSelector;

const Overlay = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const SelectorWrapper = styled.div`
  z-index: 3;
  overflow: hidden;
  position: absolute;
  right: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 6.7rem;
  height: 16rem;

  border-radius: 0.4rem;
  border: 0.05rem solid ${({ theme }) => theme.colors.grey_300};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.mini};
`;

const Selector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 6.7rem;
  height: 4rem;

  padding: 1rem 2.3rem 1.1rem 2.3rem;

  color: ${({ theme }) => theme.colors.grey_600};
  text-align: center;
  font: ${({ theme }) => theme.fonts.detail2};
`;
