import styled from 'styled-components';
import { IcGift, IcHeartOff } from '../../assets/icons';

function DetailBottomBar() {
  return (
    <DetailBottomWrapper>
      <ButtonsWrapper>
        <ButtonImageWrapper>
          <IcHeartOff />
        </ButtonImageWrapper>
        <ButtonImageWrapper>
          <IcGift />
        </ButtonImageWrapper>
      </ButtonsWrapper>
      <ButtonsWrapper>
        <GiftButton>장바구니</GiftButton>
        <BuyButton>구매하기</BuyButton>
      </ButtonsWrapper>
    </DetailBottomWrapper>
  );
}
export default DetailBottomBar;

const DetailBottomWrapper = styled.div`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  column-gap: 0.7rem;

  height: 6.8rem;
  padding: 1.6rem;

  background: ${({ theme }) => theme.colors.white};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  column-gap: 0.4rem;
`;

const ButtonImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey_300};
`;

const GiftButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: 12.4rem;
  height: 4.8rem;

  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.pink_400};

  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.title2_bold};
  color: ${({ theme }) => theme.colors.pink_400};
`;

const BuyButton = styled(GiftButton)`
  border: none;

  background: ${({ theme }) => theme.colors.pink_400};

  color: ${({ theme }) => theme.colors.white};
`;
