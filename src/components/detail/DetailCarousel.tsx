import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { DETAIL_CAROUSEL_ITEMS } from '../../constants/DETAIL_CAROUSEL_ITEMS';

function DetailCarousel() {
  const settings = {
    dots: true,
    arrows: false,
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

  .slick-dots {
    position: absolute;
    bottom: 1.6rem;
    display: flex;
  }

  .slick-dots li {
    cursor: pointer;

    display: inline-block;

    width: 0.6rem;
    height: 0.6rem;
    margin: 0.4rem;
    padding: 0;
  }

  .slick-dots li button {
    position: relative;

    display: flex;
    justify-content: center;

    width: 0.6rem;
    height: 0.6rem;
  }

  .slick-list {
    overflow-x: hidden;
    margin: 0 auto;
  }

  .slick-dots li button:before {
    content: '•';

    width: 0.6rem;
    height: 0.6rem;

    color: ${({ theme }) => theme.colors.transculent};
    text-align: center;
  }
  .slick-dots li.slick-active button:before {
    color: ${({ theme }) => theme.colors.white};
    opacity: 100;
  }
`;

const SlideImage = styled.img`
  width: 37.5rem;
  height: 19.6rem;
`;

const Slide = styled.div``;
