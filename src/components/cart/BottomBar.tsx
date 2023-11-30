import styled from 'styled-components';
import { IcGift } from '../../assets/icons';

function BottomBar() {
  return (
    <BottomWrapper>
      <Receipt>
        <Title>전체 상품</Title>
        <Price>
          총 2종 2개 <span>33,120원</span>
        </Price>
      </Receipt>
      <ButtonWrapper>
        <GiftButton>
          <IcGift />
          선물하기
        </GiftButton>
        <BuyButton>주문하기</BuyButton>
      </ButtonWrapper>
    </BottomWrapper>
  );
}
export default BottomBar;

const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 37.5rem;
  height: 10.8rem;
  padding: 1.6rem;

  background: ${({ theme }) => theme.colors.white};
`;

const Receipt = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

const Price = styled.p`
  ${({ theme }) => theme.fonts.body2};

  span {
    ${({ theme }) => theme.fonts.body1};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;
const GiftButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 16.8rem;
  height: 4.8rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.pink_400};
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title2_bold};

  color: ${({ theme }) => theme.colors.pink_400};
`;

const BuyButton = styled(GiftButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.pink_400};
  border: none;
`;
