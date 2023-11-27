import styled from 'styled-components';

interface SlideProps {
  imageLinks: string[];
}

function SlideBanner({ imageLinks }: SlideProps) {
  return (
    <SlideBannerContainer>
      <SlideContainer>
        {imageLinks.map(item => (
          <SlideBannerImgContainer>
            <SlideBannerImg src={item} />
          </SlideBannerImgContainer>
        ))}
      </SlideContainer>
    </SlideBannerContainer>
  );
}

export default SlideBanner;

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

const SlideBannerImg = styled.img`
  width: 34.1rem;
  height: 21.2rem;

  border-radius: 1rem;
`;
