import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';

const dummyData = [
  {
    title: `이 아이는 자라서 이렇게 됩니다.`,
    subtitle: `"길에서 살아남아 성묘가 된 기적의 40냥이들"`,
    content: `테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1테스트1`,
    imageSrc: `https://image.aladin.co.kr/product/32386/47/cover200/k842935882_1.jpg?RS=170`,
  },
  {
    title: `테스트2`,
    subtitle: `"테스트2"`,
    content: `테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2테스트2`,
    imageSrc: `https://image.aladin.co.kr/product/32386/47/cover200/k842935882_1.jpg?RS=170`,
  },
  {
    title: `테스트3`,
    subtitle: `테스트3`,
    content: `테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3테스트3`,
    imageSrc: `https://image.aladin.co.kr/product/32386/47/cover200/k842935882_1.jpg?RS=170`,
  },
  {
    title: `테스트4`,
    subtitle: `테스트4`,
    content: `테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4테스트4`,
    imageSrc: `https://image.aladin.co.kr/product/32386/47/cover200/k842935882_1.jpg?RS=170`,
  },
  {
    title: `테스트5`,
    subtitle: `테스트5`,
    content: `테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5테스트5`,
    imageSrc: `https://image.aladin.co.kr/product/32386/47/cover200/k842935882_1.jpg?RS=170`,
  },
];

// const imageSrcList = [
//   'https://image.aladin.co.kr/product/15133/99/cover200/8968331820_1.jpg?RS=170',
//   'https://image.aladin.co.kr/product/32800/29/cover200/8901276895_1.jpg?RS=170',
//   'https://image.aladin.co.kr/product/32386/47/cover200/k842935882_1.jpg?RS=170',
//   'https://image.aladin.co.kr/product/5267/77/cover200/8997221396_1.jpg?RS=170',
//   'https://image.aladin.co.kr/product/30457/49/cover200/k822830478_1.jpg?RS=170',
// ];

// 슬라이드 마지막 인덱스
const TOTAL_SLIDES = dummyData.length - 1;
// 이미지 컨테이너 너비
const containerWidth = `${dummyData.length * 11.2}rem`;

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
    slideRef.current.style.transform = `translateX(-${currentSlide * 15.8}rem)`;
  }, [currentSlide]);

  return (
    <EditorSelectWrapper>
      <EditorSelectBookImgContainer ref={slideRef}>
        {dummyData.map(({ imageSrc }, index) => (
          <EditorSelectBookImg key={index} src={imageSrc} isCurrent={index === currentSlide} />
        ))}
      </EditorSelectBookImgContainer>
      <PrevButton onClick={PrevSlide} className="prev_button">
        ＜
      </PrevButton>
      <NextButton onClick={NextSlide} className="next_button">
        ＞
      </NextButton>
      <BookInfoContainer>
        <Title>{dummyData[currentSlide].title}</Title>
        <SubTitle>{dummyData[currentSlide].subtitle}</SubTitle>
        <DetailContainer>{dummyData[currentSlide].content}</DetailContainer>
      </BookInfoContainer>
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
  padding-left: 11.5rem;
  margin-top: 2rem;
`;

const EditorSelectBookImg = styled.img<{ isCurrent: boolean }>`
  width: ${props => (props.isCurrent ? '14.7rem' : '11.8rem')};
  height: ${props => (props.isCurrent ? '21.5rem' : '17.2rem')};
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

const Title = styled.p`
  ${({ theme }) => theme.fonts.title1_bold};
  color: white;
  margin-top: 2.4rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: white;
  margin-top: 0.2rem;
`;

const DetailContainer = styled.div`
  ${({ theme }) => theme.fonts.body2};
  width: 91%;
  margin-top: 1.5rem;
  height: 10.8rem;
  padding: 1.4rem 1.6rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.translucent};
  border-radius: ${({ theme }) => theme.radius.s};
`;
