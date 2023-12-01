import styled from 'styled-components';
import { IcDownXs } from '../../assets/icons';
import { useState } from 'react';
import PeriodSelector from './PeriodSelector';

function Period() {
  const [isShowSelector, setIsShowSelector] = useState(false);
  const showSelector = () => {
    setIsShowSelector(prev => !prev);
  };
  return (
    <>
      <PeriodWrapper>
        <PeriodButton onClick={showSelector}>
          <PeriodText>주간</PeriodText>
          <IcDownXs />
        </PeriodButton>
      </PeriodWrapper>
      {isShowSelector && <PeriodSelector setIsShowSelector={setIsShowSelector} />}
    </>
  );
}
export default Period;

const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 37.5rem;
  padding: 1.6rem 0.8rem 0rem 31.7rem;

  background: ${({ theme }) => theme.colors.white};
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey_300};
`;

const PeriodButton = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  justify-content: center;

  width: 5rem;
  height: 4rem;
  padding: 1rem 0.2rem 1rem 0.3rem;
`;

const PeriodText = styled.p`
  ${({ theme }) => theme.fonts.body2};
`;
