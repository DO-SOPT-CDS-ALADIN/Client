import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import { IcEnter } from '../../assets/icons';
import MadeGiftBanner from './MadeGiftBanner';
import { GIFT_IMAGE_LINKS } from '../../constants/home';

function MadeGift() {
  return (
    <MadeGiftWrapper>
      <SectionHeader title="알라딘이 만든 사은품" icon={<IcEnter />}></SectionHeader>
      <SlideBannerContainer>
        <SlideContainer>
          {GIFT_IMAGE_LINKS.map((item, index) => (
            <SlideBannerImgContainer key={index}>
              <MadeGiftBanner src={item} />
            </SlideBannerImgContainer>
          ))}
        </SlideContainer>
      </SlideBannerContainer>
    </MadeGiftWrapper>
  );
}

export default MadeGift;

const MadeGiftWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const SlideBannerContainer = styled.div`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  margin-top: 1.6rem;
`;

const SlideContainer = styled.div`
  display: flex;

  width: 301%;
  height: 23rem;
`;

const SlideBannerImgContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 37.5rem;
  height: 22.6rem;

  scroll-snap-align: start;
`;
