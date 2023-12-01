import styled from 'styled-components';
import { IcCircleMini, IcMinicircleDown } from '../../assets/icons';
import { TAG } from '../../constants/tag';

interface BookInfoProps {
  price: string;
  discount_price: string;
  mileage: string;
  tag: number;
}

interface TagProps {
  type: number;
}

function DetailBookInfoBox({ price, discount_price, mileage, tag }: BookInfoProps) {
  return (
    <BookInfoWrapper>
      <InfoSubjectWrapper className="price">
        <BookInfoSubject>판매가</BookInfoSubject>
        <Body2Text className="price">{price}</Body2Text>
        <BookInfoContentPink>{discount_price}</BookInfoContentPink>
      </InfoSubjectWrapper>
      <InfoSubjectWrapper>
        <BookInfoSubject>마일리지</BookInfoSubject>
        <Body2Text className="mileage">{mileage}</Body2Text>
        <IcMinicircleDown />
      </InfoSubjectWrapper>
      <InfoSubjectWrapper>
        <BookInfoSubject>배송료</BookInfoSubject>
        <DeliveryContent>
          <Body2Text>무료</Body2Text>
          <TagWrapper>
            {tag >= 1 && <Tag type={TAG.DELIVERY.ID}>{TAG.DELIVERY.TEXT}</Tag>}
            {tag >= 2 && <Tag type={TAG.GIFT.ID}>{TAG.GIFT.TEXT}</Tag>}
            {tag >= 3 && <Tag type={TAG.RESERVATION.ID}>{TAG.RESERVATION.TEXT}</Tag>}
          </TagWrapper>
          <Body2Text>밤 10시까지 주문하면</Body2Text>
          <DeliveryWrapper>
            <Body2Text>내일 아침 7시</Body2Text>
            <DeliveryContentPink>출근전 배송</DeliveryContentPink>
          </DeliveryWrapper>
        </DeliveryContent>
      </InfoSubjectWrapper>
      <Divider />
      <InfoSubjectWrapper>
        <BookInfoSubject>전자책</BookInfoSubject>
        <Body2Text className="eBook">10,620원</Body2Text>
        <IcCircleMini />
      </InfoSubjectWrapper>
    </BookInfoWrapper>
  );
}

export default DetailBookInfoBox;

const BookInfoWrapper = styled.div`
  width: 100%;
  padding: 1.6rem 1.6rem 0 1.6rem;
`;

const InfoSubjectWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.6rem;

  &.price {
    align-items: center;
  }
`;

const BookInfoSubject = styled.span`
  width: 8.4rem;
  ${({ theme }) => theme.fonts.body1};

  text-align: left;
  vertical-align: middle;
`;

const Body2Text = styled.span`
  display: inline-block;
  ${({ theme }) => theme.fonts.body2};

  background-color: ${({ theme }) => theme.colors.white};
  &.mileage {
    margin-right: 0.4rem;
  }

  &.price {
    color: ${({ theme }) => theme.colors.grey_400};
    text-decoration: line-through;
    vertical-align: bottom;
  }

  &.eBook {
    margin-right: 0.4rem;
  }
`;

const BookInfoContentPink = styled.span`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.head4};

  color: ${({ theme }) => theme.colors.pink_400};
`;

const DeliveryContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
  ${({ theme }) => theme.fonts.body2};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const TagWrapper = styled(Info)`
  gap: 0.4rem;
`;

const Tag = styled.div<TagProps>`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  padding: 0.2rem 0.8rem;

  ${({ theme }) => theme.fonts.detail1};

  color: ${({ theme }) => theme.colors.white};

  background: ${({ theme, type }) =>
    type === TAG.DELIVERY.ID
      ? theme.colors.orange
      : type === TAG.GIFT.ID
        ? theme.colors.tangerine
        : theme.colors.pink_800};
  border-radius: 1rem;
`;

const DeliveryWrapper = styled.div`
  display: flex;
`;

const DeliveryContentPink = styled.span`
  margin-left: 0.4rem;
  ${({ theme }) => theme.fonts.body1};

  color: ${({ theme }) => theme.colors.pink_400};
`;

const Divider = styled.div`
  width: 34.3rem;
  height: 0.1rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
`;
