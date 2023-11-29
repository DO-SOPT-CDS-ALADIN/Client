import styled from 'styled-components';
import {
  IcRanknumber,
  IcRankLarge,
  IcEye,
  IcBestIstarSmall,
  IcMileage,
  IcHeartOff,
  IcHeartOn,
  IcCart,
} from '../../assets/icons';
import { TAG } from '../../constants/tag';
import { BookProps } from '../../utils/BookProps';
import { useCart } from '../../hooks/useCartCount';
import Toast from './Toast';
import { useState } from 'react';

interface TagProps {
  type: number;
}

function Book(props: BookProps) {
  const {
    bookId,
    rank,
    imgUrl,
    title,
    subtitle,
    writer,
    painter,
    publisher,
    pubDate,
    score,
    tag,
    discountPrice,
    mileage,
    heart,
  } = props;

  const [toast, setToast] = useState(false);

  const { response, addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(bookId);
    setToast(true);
  };
  return (
    <BookWrapper>
      <BookInner>
        <Left>
          <BookImg src={imgUrl} />
          <PreviewButton>
            <IcEye />
            <PreviewText>미리보기</PreviewText>
          </PreviewButton>
        </Left>
        <Right>
          <Rank>
            {rank < 10 ? <IcRanknumber /> : <IcRankLarge />}
            <RankNum>{rank}</RankNum>
          </Rank>
          <Title>
            <LargeBlackText>{title}</LargeBlackText>
            {subtitle && <GreyText>- {subtitle}</GreyText>}
          </Title>
          <Writer>
            <BlackText>{writer}</BlackText>
            <GreyText>(지은이)</GreyText>
            {painter && (
              <>
                <BlackText>, {painter}</BlackText>
                <GreyText>(옮긴이)</GreyText>
              </>
            )}
          </Writer>
          <Writer>
            <BlackText>{publisher}</BlackText>
            <GreyText>I {pubDate}</GreyText>
          </Writer>
          <Info>
            <IcBestIstarSmall />
            <Score>{score}.0</Score>
          </Info>
          <TagWrapper>
            {tag >= 1 && <Tag type={TAG.DELIVERY.ID}>{TAG.DELIVERY.TEXT}</Tag>}
            {tag >= 2 && <Tag type={TAG.GIFT.ID}>{TAG.GIFT.TEXT}</Tag>}
            {tag >= 3 && <Tag type={TAG.RESERVATION.ID}>{TAG.RESERVATION.TEXT}</Tag>}
          </TagWrapper>
          <Price>
            <Discount>10%</Discount>
            <LargeBlackText>{discountPrice}</LargeBlackText>
            <Mileage>
              <IcMileage />
              <GreyText>{mileage}</GreyText>
            </Mileage>
            <ButtonWrapper>
              <Button>{heart ? <IcHeartOn /> : <IcHeartOff />}</Button>
              <Button>
                <IcCart onClick={handleAddToCart} />
              </Button>
            </ButtonWrapper>
          </Price>
        </Right>
      </BookInner>
      {toast && <Toast setToast={setToast} message={response} />}
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
  top: 0;
  left: 0.45rem;

  font: ${({ theme }) => theme.fonts.detail1};
  color: ${({ theme }) => theme.colors.white};
`;
