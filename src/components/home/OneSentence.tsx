import styled from 'styled-components';
import { IcCircleMini, IcCloseQuota, IcOpenQuota } from '../../assets/icons';
import { ONE_SENTENCE_LINK } from '../../constants/home';

function OneSentence() {
  return (
    <OneSentenceWrapper>
      <OneSentenceTitle>
        <OneSentenceTitleText>이 책의 한문장</OneSentenceTitleText>
        <IcCircleMini />
      </OneSentenceTitle>
      <BookInfoContainer>
        <StyledIcOpenQuota />
        <StyledIcCloseQuota />
        <BookImg src={ONE_SENTENCE_LINK} />
        <BookInfo>
          <BookDetail>
            이것이 바로 내가 ‘고통의 자원화’ 그리고 ‘침묵 깨기'를 선택한 이유다. 내 지극히 개인적인
            이야기가 혹시 변화의 땔감으로 쓰인다면, 혹시 ‘타인을 살리는’ 기록이 될 수 있다면
            좋겠다고 생각했다. 나는 한 번 더, 용기를 내보기로 했다.
          </BookDetail>
          <BookAuthor>{'- <제가 참사 생존자인가요> 김초롱'}</BookAuthor>
        </BookInfo>
      </BookInfoContainer>
    </OneSentenceWrapper>
  );
}

export default OneSentence;

const OneSentenceWrapper = styled.div`
  width: 100%;
  height: 18.7rem;
  margin-top: 4rem;
  padding: 1.6rem 1.6rem 1.3rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.blue_100};

  overflow: hidden;
`;

const OneSentenceTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`;

const OneSentenceTitleText = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const BookInfoContainer = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  margin-top: 1.4rem;

  column-gap: 3.9rem;
`;

const BookImg = styled.img`
  width: 8rem;
  height: 11.9rem;

  object-fit: cover;

  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const BookInfo = styled.div`
  width: 20.1rem;
`;

const BookDetail = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  width: 100%;

  letter-spacing: -0.06rem;
`;

const BookAuthor = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  width: 100%;
  margin-top: 0.7rem;

  letter-spacing: -0.06rem;
`;

const StyledIcOpenQuota = styled(IcOpenQuota)`
  position: absolute;
  top: 0;
  left: 28%;
`;

const StyledIcCloseQuota = styled(IcCloseQuota)`
  position: absolute;
  top: 70%;
  right: 0;
`;
