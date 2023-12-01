import styled from 'styled-components';
import { IcInfoGray, IcMileage, IcDown } from '../../assets/icons';
import {
  totalItemCountState,
  totalMileageState,
  totalPriceState,
} from '../../recoil/atoms/receiptState';
import { useRecoilValue } from 'recoil';
import { formatPrice } from '../../utils/Price';

function Receipt() {
  const cartCount = useRecoilValue(totalPriceState);
  const mileage = useRecoilValue(totalMileageState);
  const itemCount = useRecoilValue(totalItemCountState);
  return (
    <ReceiptWrapper>
      <FlexBox>
        <Title>총 상품수</Title>
        <Value>
          {itemCount}종 {itemCount}개
        </Value>
      </FlexBox>
      <FlexBox>
        <Title>총 상품금액</Title>
        <Value>{formatPrice(cartCount)} (3,680원 할인)</Value>
      </FlexBox>
      <FlexBox>
        <Title>총 배송비</Title>
        <Value>0원</Value>
      </FlexBox>
      <FlexBox>
        <Title>총 적립 예상 마일리지</Title>
        <InfoIconWrapper>
          <IcInfoGray />
        </InfoIconWrapper>
        <MileageIconWrapper>
          <IcMileage />
        </MileageIconWrapper>
        <Value>{formatPrice(mileage)}</Value>
      </FlexBox>
      <TotalPriceWrapper>
        <TotalTitle>총 결제 예상 금액</TotalTitle>
        <TotalPrice>{formatPrice(cartCount)}</TotalPrice>
      </TotalPriceWrapper>
      <NoticeWrapper>
        <Notice>
          <Value>장바구니 이용안내</Value>
          <IcDown />
        </Notice>
        <Notice>
          <Value>무이자 할부 안내</Value>
          <IcDown />
        </Notice>
      </NoticeWrapper>
    </ReceiptWrapper>
  );
}
export default Receipt;

const ReceiptWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;

  width: 37.5rem;
  padding: 1.6rem 0;

  background: ${({ theme }) => theme.colors.grey_100};
`;

const FlexBox = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 0 1.6rem;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

const Value = styled.p`
  ${({ theme }) => theme.fonts.body2};
`;

const InfoIconWrapper = styled.div`
  position: absolute;
  left: 14.5rem;
`;

const MileageIconWrapper = styled.div`
  position: absolute;
  right: 6.9rem;
`;

const TotalPriceWrapper = styled(FlexBox)`
  height: 6.4rem;
  background: ${({ theme }) => theme.colors.white};
`;

const TotalTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const TotalPrice = styled.p`
  ${({ theme }) => theme.fonts.head3};
  color: ${({ theme }) => theme.colors.pink_400};
`;

const NoticeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Notice = styled(FlexBox)`
  height: 4.8rem;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_200};
`;
