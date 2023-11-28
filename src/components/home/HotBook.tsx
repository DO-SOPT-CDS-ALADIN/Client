import styled from 'styled-components';
import { HOT_BOOK_IMAGE_LINKS } from '../../constants/home';
import HotBookBanner from './HotBookBanner';

function HotBook() {
  return (
    <HotBookWrapper>
      <HeaderWrapper>
        <HeaderTitle>지금, 화제의 책</HeaderTitle>
      </HeaderWrapper>
      <SlideBannerContainer>
        <SlideContainer>
          {HOT_BOOK_IMAGE_LINKS.map(() => (
            <SlideBannerImgContainer>
              <HotBookBanner />
            </SlideBannerImgContainer>
          ))}
        </SlideContainer>
      </SlideBannerContainer>
    </HotBookWrapper>
  );
}

export default HotBook;

const HotBookWrapper = styled.div`
  width: 100%;
  padding-top: 4rem;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 4.8rem;
  padding-left: 1.6rem;
  padding-right: 1.2rem;
  margin-bottom: 1.6rem;
`;

const HeaderTitle = styled.p`
  ${({ theme }) => theme.fonts.head3};
`;

const SlideBannerContainer = styled.div`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

const SlideContainer = styled.div`
  display: flex;

  width: 301%;
`;

const SlideBannerImgContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 37.5rem;
  height: 100%;

  scroll-snap-align: start;
`;
