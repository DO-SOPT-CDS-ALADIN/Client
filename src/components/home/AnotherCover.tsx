import styled from 'styled-components';
import { ANOTHER_COVER_LINK } from '../../constants/home';

function AnotherCover() {
  return (
    <AnotherCoverWrapper>
      <BlackTag>
        <BlackTagText>어나더커버</BlackTagText>
      </BlackTag>
      <AnotherCoverImg src={ANOTHER_COVER_LINK} />
      <AnotherCoverTitleWrapper>
        <AnotherCoverSubTitle>농부 부부의 꽉 찬 1년을 담은 그림책</AnotherCoverSubTitle>
        <AnotherCoverTitle>농부 달력 (리커버)</AnotherCoverTitle>
      </AnotherCoverTitleWrapper>
    </AnotherCoverWrapper>
  );
}

export default AnotherCover;

const AnotherCoverWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 38rem;
  margin-top: 4rem;
`;

const AnotherCoverImg = styled.img`
  width: 100%;
  height: 33rem;

  object-fit: cover;
`;

const AnotherCoverTitleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 35.9rem;
  height: 9.2rem;
  padding: 2rem 11.4rem 2rem 2rem;

  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: ${({ theme }) => theme.shadows.mini};
`;

const AnotherCoverSubTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_reg};

  color: ${({ theme }) => theme.colors.grey_400};
`;

const AnotherCoverTitle = styled.p`
  ${({ theme }) => theme.fonts.head2};

  color: ${({ theme }) => theme.colors.black};
`;

const BlackTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 27.5rem;
  right: 0.8rem;
  z-index: 2;

  width: 7rem;
  height: 2.4rem;

  background-color: ${({ theme }) => theme.colors.black};
`;

const BlackTagText = styled.p`
  ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -0.06rem;
`;
