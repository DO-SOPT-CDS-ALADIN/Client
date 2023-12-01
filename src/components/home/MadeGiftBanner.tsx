import styled from 'styled-components';
import { IcBtnPage } from '../../assets/icons';

interface MadeGiftProps {
  src: string;
}

function MadeGiftBanner({ src }: MadeGiftProps) {
  return (
    <MadeGiftBannerWrapper>
      <GiftImg src={src} />
      <GiftInfo>
        <GiftInfoText>{'<곤돌린의 몰락> 고블렛잔'}</GiftInfoText>
      </GiftInfo>
      <StyledIcBtnPage />
    </MadeGiftBannerWrapper>
  );
}

export default MadeGiftBanner;

const MadeGiftBannerWrapper = styled.div`
  width: 34.1rem;
  height: 23rem;

  position: relative;

  border-radius: ${({ theme }) => theme.radius.m};
`;

const GiftImg = styled.img`
  width: 100%;
  height: 22.6rem;
  border-radius: ${({ theme }) => theme.radius.m};
`;

const GiftInfo = styled.div`
  width: 100%;
  height: 8.5rem;
  padding-left: 2rem;
  padding-top: 4.3rem;

  border-radius: 0 0 ${({ theme }) => theme.radius.m} ${({ theme }) => theme.radius.m};

  background-color: ${({ theme }) => theme.colors.black};

  position: absolute;
  bottom: 0;
`;

const GiftInfoText = styled.p`
  ${({ theme }) => theme.fonts.title1_bold};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledIcBtnPage = styled(IcBtnPage)`
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
`;
