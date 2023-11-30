import styled from 'styled-components';
import { IcBtnPage, IcCircleMini } from '../../assets/icons';

function TodayPoem() {
  return (
    <TodayPoemWrapper>
      <BackgroundImg src="https://s3-alpha-sig.figma.com/img/d594/7217/a7937dd52f26cd424cd64872011578fd?Expires=1702252800&Signature=pzKqU1bBKRCJrgoRFZ7zeh56ouslUciohw~tMRVrmMffrfF2p~V8qdv6xQJwbhpT7BXXSmLJx8s0JeMJMVEv~JjAk7kMiBuczreuw~EjWBEqAn1TycuTNiznP-P24mv0Wx-5eSw~ibQQfV894I3-Y72TFglG0m6M5alpQeyIPEtTMY1yKPLbcRL9~dEqBuIVHb11XIl1FORO5W77tvJuTFwSymwXEq~JwX6~fveJeNes30A6ojsfsqY3Pyx3YMhVpcZ~7b--V-dVzAuP5pBvWW33d-xLC32MLZfTUlHn~JfjEOMroDNb0jujKKD6uorHA7VNZgRA1v2CSvuw1zmx2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <TodayPoemInfo>
        <TodayPoemHeader>
          <TodayPoemTitle>
            <TodayPoemTitleText>오늘의 시</TodayPoemTitleText>
            <IcCircleMini />
          </TodayPoemTitle>
          <DateText>2023.11.03</DateText>
        </TodayPoemHeader>
        <MiddleContainer>
          <TodayPoemContentBox>
            <TodayPoemContent>
              슬픔도 알맞게 치대고 반죽하면 일용할 양식이라고 이 뒷길 어디선가 빵 굽는 냄새가 짙다.
            </TodayPoemContent>
          </TodayPoemContentBox>
          <TodayPoemAuthor>노향림 「붉은 담쟁이덩굴이 있는」</TodayPoemAuthor>
        </MiddleContainer>
        <BottomContainer>
          <IcBtnPage />
        </BottomContainer>
      </TodayPoemInfo>
    </TodayPoemWrapper>
  );
}

export default TodayPoem;

const TodayPoemWrapper = styled.div`
  width: 100%;
  height: 22.1rem;
  margin-top: 4rem;
  position: relative;
`;

const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

const TodayPoemInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
  padding: 1.2rem 1.6rem;
`;

const TodayPoemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodayPoemTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  padding: 1rem 0;
`;

const TodayPoemTitleText = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const DateText = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.grey_400};
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

const TodayPoemContentBox = styled.div`
  width: 34.3rem;
  height: 7.2rem;
  background-color: ${({ theme }) => theme.colors.translucent};
  padding: 1.6rem;
  border-radius: ${({ theme }) => theme.radius.m};
`;

const TodayPoemContent = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.white};
  line-height: 140%;
`;

const TodayPoemAuthor = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  margin-top: 1.6rem;
  color: ${({ theme }) => theme.colors.grey_400};
  line-height: 160%;
  letter-spacing: -0.06rem;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
