import React from 'react';
// eslint-disable-next-line no-duplicate-imports
import { useState, useRef } from 'react';

interface CarouselLogic {
  currentSlide: number;
  handleTouchStart: (e: React.TouchEvent<HTMLDivElement>) => void;
  handleTouchEnd: () => void;
  handleIndicatorClick: (index: number) => void;
}

const useDetailCarousel = (totalSlides: number): CarouselLogic => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchRef = useRef<{ startX: number; startY: number; endX: number; endY: number }>({
    startX: 0,
    startY: 0,
    endX: 0,
    endY: 0,
  });

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const diffX = touchRef.current.startX - touchRef.current.endX;
    const diffY = touchRef.current.startY - touchRef.current.endY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (diffX < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return {
    currentSlide,
    handleTouchStart,
    handleTouchEnd,
    handleIndicatorClick,
  };
};

export default useDetailCarousel;
