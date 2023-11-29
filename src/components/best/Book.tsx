import styled from 'styled-components';
import {
  IcRanknumber,
  IcEye,
  IcBestIstarSmall,
  IcMileage,
  IcHeartOff,
  IcCart,
} from '../../assets/icons';
import book from '../../assets/imgs/bookImg.png';
import { TAG } from '../../constants/tag';

interface BookProps {
  rank: number;
  tagCount: number;
}

interface TagProps {
  type: number;
}

function Book({ rank, tagCount }: BookProps) {
  return (
    <BookWrapper>
      <BookInner>
        <Left>
          <BookImg src={book} />
          <PreviewButton>
            <IcEye />
            <PreviewText>미리보기</PreviewText>
          </PreviewButton>
        </Left>
        <Right>
          <Rank>
            <IcRanknumber />
            <RankNum>{rank}</RankNum>
          </Rank>
          <Title>
            <LargeBlackText>기적의 자세요정</LargeBlackText>
            <GreyText>- 무너진 자세를 바로 세우는</GreyText>
          </Title>
          <Writer>
            <BlackText>자세요정</BlackText>
            <GreyText>(지은이)</GreyText>
          </Writer>
          <Writer>
            <BlackText>다산라이프</BlackText>
            <GreyText>I 2023년 10월</GreyText>
          </Writer>
          <Info>
            <IcBestIstarSmall />
            <Score>4.0</Score>
          </Info>
          <TagWrapper>
            {tagCount >= 1 && <Tag type={TAG.DELIVERY.ID}>{TAG.DELIVERY.TEXT}</Tag>}
            {tagCount >= 2 && <Tag type={TAG.GIFT.ID}>{TAG.GIFT.TEXT}</Tag>}
            {tagCount >= 3 && <Tag type={TAG.RESERVATION.ID}>{TAG.RESERVATION.TEXT}</Tag>}
          </TagWrapper>
          <Price>
            <Discount>10%</Discount>
            <LargeBlackText>19,800원</LargeBlackText>
            <Mileage>
              <IcMileage />
              <GreyText>1,100원</GreyText>
            </Mileage>
            <ButtonWrapper>
              <Button>
                <IcHeartOff />
              </Button>
              <Button>
                <IcCart />
              </Button>
            </ButtonWrapper>
          </Price>
        </Right>
      </BookInner>
    </BookWrapper>
  );
}
export default Book;

const BookWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  width: 37.5rem;
  padding: 1.6rem;

  border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey_300};
`;

const BookImg = styled.img`
  width: 8.2rem;
  height: 12.4rem;
  border: 0.05rem solid ${({ theme }) => theme.colors.grey_200};
`;

const BookInner = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

const PreviewButton = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;

  width: 8.2rem;
  height: 2.7rem;
  margin-top: 0.6rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.2rem;
`;

const PreviewText = styled.p`
  font: ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.grey_400};
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: flex-start;
`;
const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  width: 25rem;
`;

const LargeBlackText = styled.p`
  font: ${({ theme }) => theme.fonts.body1};
`;

const Writer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-content: flex-start;
  align-items: flex-start;

  width: 25rem;
`;

const BlackText = styled.p`
  font: ${({ theme }) => theme.fonts.detail2};
`;

const GreyText = styled.p`
  font: ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.grey_400};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const TagWrapper = styled(Info)`
  gap: 0.4rem;
`;

const Score = styled.p`
  font: ${({ theme }) => theme.fonts.detail1};
`;

const Tag = styled.div<TagProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  padding: 0.2rem 0.8rem;

  font: ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme, type }) =>
    type === TAG.DELIVERY.ID
      ? theme.colors.orange
      : type === TAG.GIFT.ID
        ? theme.colors.tangerine
        : theme.colors.pink_800};
  border-radius: 1rem;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 25.1rem;
  margin-top: 1rem;
`;

const Discount = styled.p`
  margin-right: 0.4rem;
  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.pink_400};
`;

const Mileage = styled.div`
  display: flex;
  margin-left: 0.4rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-left: 1.4rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;
  padding: 0.8rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;

const Rank = styled.div`
  position: relative;
`;
const RankNum = styled.p`
  position: absolute;
  top: 0rem;
  left: 0.45rem;

  font: ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};
`;
