import React from 'react';
import styled from 'styled-components';
import useDetailCarousel from '../../hooks/useDetailCarousel';

interface CarouselProps {
  slides: string[];
}
function DetailCarousel({ slides }: CarouselProps) {
  const { currentSlide, handleTouchStart, handleTouchEnd, handleIndicatorClick } =
    useDetailCarousel(slides.length);

  return (
    <>
      <DetailCarouselWrapper onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            src={slide}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          />
        ))}
      </DetailCarouselWrapper>
      <IndicatorContainer>
        {slides.map((_, index) => (
          <Indicator
            key={index}
            active={index === currentSlide}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </IndicatorContainer>
    </>
  );
}

export default DetailCarousel;

const DetailCarouselWrapper = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;

  width: 100%;
  height: 19.6rem;
  margin-top: 1.2rem;
`;

const Slide = styled.img`
  min-width: 100%;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 1.6rem;

  display: flex;
  column-gap: 0.8rem;
  justify-content: center;

  margin-top: 10px;
`;

const Indicator = styled.div<{ active: boolean }>`
  cursor: pointer;

  width: 0.6rem;
  height: 0.6rem;

  border-radius: 100%;

  fill: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.transculent)};
`;
