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
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
`;

const SelectorWrapper = styled.div`
  position: absolute;
  z-index: 3;
  right: 0.8rem;

  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 6.7rem;
  height: 16rem;

  background: ${({ theme }) => theme.colors.white};
  border: 0.05rem solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.shadows.mini};
`;

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6.7rem;
  height: 4rem;
  padding: 1rem 2.3rem 1.1rem 2.3rem;

  ${({ theme }) => theme.fonts.detail2};

  color: ${({ theme }) => theme.colors.grey_600};
  text-align: center;
`;
