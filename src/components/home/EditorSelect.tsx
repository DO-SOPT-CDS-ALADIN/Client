import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const imageSrcList = [
  'https://image.aladin.co.kr/product/15133/99/cover200/8968331820_1.jpg?RS=170',
  'https://image.aladin.co.kr/product/32800/29/cover200/8901276895_1.jpg?RS=170',
  'https://image.aladin.co.kr/product/32386/47/cover200/k842935882_1.jpg?RS=170',
  'https://image.aladin.co.kr/product/5267/77/cover200/8997221396_1.jpg?RS=170',
  'https://image.aladin.co.kr/product/30457/49/cover200/k822830478_1.jpg?RS=170',
];

// 슬라이드 마지막 인덱스
const TOTAL_SLIDES = imageSrcList.length - 1;
// 이미지 컨테이너 너비
const containerWidth = `${imageSrcList.length * 11.2}rem`;

// 왼쪽 버튼 클릭 이벤트 핸들러

function EditorSelect() {
  // 현재 슬라이드 이미지 인덱스
  const [currentSlide, setCurrentSlide] = useState(0);
  // 슬라이드 컨테이너 reference
  const slideRef = useRef(null);

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  // 오른쪽 버튼 클릭 이벤트 핸들러
  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide * 15}rem)`;
  }, [currentSlide]);

  return (
    <EditorSelectWrapper>
      <EditorSelectBookImgContainer ref={slideRef}>
        {imageSrcList.map((src, index) => (
          <EditorSelectBookImg key={index} src={src} isCurrent={index === currentSlide} />
        ))}
      </EditorSelectBookImgContainer>
      <PrevButton onClick={PrevSlide} className="prev_button">
        ＜
      </PrevButton>
      <NextButton onClick={NextSlide} className="next_button">
        ＞
      </NextButton>
      <BookInfoContainer></BookInfoContainer>
    </EditorSelectWrapper>
  );
}

export default EditorSelect;

const EditorSelectWrapper = styled.section`
  width: 100%;
  height: 45rem;
  background: linear-gradient(to bottom, white 30%, rgba(61, 73, 159, 1) 30%);
  overflow: hidden;
  position: relative;
`;

const EditorSelectBookImgContainer = styled.section`
  width: ${containerWidth}px;
  display: flex;
  column-gap: 4rem;
  padding-left: 11rem;
  margin-top: 2rem;
`;

const EditorSelectBookImg = styled.img<{ isCurrent: boolean }>`
  width: ${props => (props.isCurrent ? '16rem' : '11.2rem')};
  height: ${props => (props.isCurrent ? '20.8rem' : '16rem')};
  margin-top: ${props => (props.isCurrent ? '0' : '4.8rem')};
  object-fit: cover;
  position: relative;
  z-index: 1;
`;

const PrevButton = styled.button`
  font-size: 3rem;
  position: absolute;
  top: 12rem;
`;

const NextButton = styled.button`
  font-size: 3rem;
  position: absolute;
  top: 12rem;
  right: 0;
`;

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
