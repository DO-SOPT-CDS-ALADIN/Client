import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DETAIL_CAROUSEL_ITEMS } from '../../constants/DETAIL_CAROUSEL_ITEMS';

function DetailCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <StyledSlider {...settings}>
      {DETAIL_CAROUSEL_ITEMS.map((item, index) => (
        <Slide key={index}>
          <SlideImage src={item} alt={`Slide-${index}`} />
        </Slide>
      ))}
    </StyledSlider>
  );
}

export default DetailCarousel;

const StyledSlider = styled(Slider)`
  position: relative;
  width: 100%;
  height: 19.6rem;
  margin-top: 1.2rem;

  .slick-list {
    overflow-x: hidden;
    margin: 0 auto;
  }

  .slick-dots {
    bottom: 1.6rem;
    display: flex;
    justify-content: center;
    color: ${({ theme }) => theme.colors.transculent};
    li.slick-active button:before {
      color: white;
    }
  }
`;

const SlideImage = styled.img`
  width: 37.5rem;
  height: 19.6rem;
`;

const Slide = styled.div``;
