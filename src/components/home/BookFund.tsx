import styled from 'styled-components';
import { BOOKFUND_BOOK_LINK } from '../../constants/home';
import { IcFundingBar, IcPeople } from '../../assets/icons';

function BookFund() {
  return (
    <BookFundWrapper>
      <BookFundTitle>좋은 책에 투자하는 당신의 안목, 북펀드</BookFundTitle>
      <BookFundInfo>
        <BookImg src={BOOKFUND_BOOK_LINK} />
        <BookTitle>알베르 카뮈 소설 전집 세트 - 전5권</BookTitle>
        <TargetAmountBox>
          <TargetAmount>목표금액 3,000,000원</TargetAmount>
        </TargetAmountBox>
        <IcFundingBar />
        <FundingInfoWrapper>
          <IcPeople />
          <FundingInfo>107권 펀딩 6,045,640원</FundingInfo>
        </FundingInfoWrapper>
      </BookFundInfo>
    </BookFundWrapper>
  );
}

export default BookFund;

const BookFundWrapper = styled.div`
  width: 100%;
  height: 50rem;
  padding-left: 1.6rem;
  padding-top: 2.4rem;
  margin-top: 4rem;

  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.blue_600} 50%,
    ${({ theme }) => theme.colors.grey_100} 50%
  );
`;

const BookFundTitle = styled.p`
  ${({ theme }) => theme.fonts.head3};
  width: 27.7rem;

  line-height: normal;

  color: ${({ theme }) => theme.colors.white};

  white-space: initial;
`;

const BookFundInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookImg = styled.img`
  width: 15.4rem;
  height: 17.8rem;
  margin-top: 5.5rem;
  object-fit: cover;
  border: 0.2rem solid ${({ theme }) => theme.colors.blue_400};
  box-shadow: ${({ theme }) => theme.shadows.mini};
`;

const BookTitle = styled.p`
  ${({ theme }) => theme.fonts.title1_bold};

  margin-top: 1.6rem;

  color: ${({ theme }) => theme.colors.black};
`;

const TargetAmountBox = styled.div`
  width: 15.6rem;
  height: 2.4rem;
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
  background-color: ${({ theme }) => theme.colors.blue_100};
  border-radius: ${({ theme }) => theme.radius.s};
  text-align: center;
`;

const TargetAmount = styled.p`
  ${({ theme }) => theme.fonts.body1};

  color: ${({ theme }) => theme.colors.blue_600};
`;

const FundingInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  margin-top: 1.2rem;
`;

const FundingInfo = styled.p`
  ${({ theme }) => theme.fonts.title1_bold};

  color: ${({ theme }) => theme.colors.black};

  line-height: normal;
`;
