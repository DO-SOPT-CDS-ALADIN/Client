import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { IcEnter } from '../../assets/icons';

const dummyData = [
  {
    title: `이 아이는 자라서 이렇게 됩니다.`,
    subtitle: `"길에서 살아남아 성묘가 된 기적의 40냥이들"`,
    content: `테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스`,
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

const TOTAL_SLIDES = dummyData.length - 1;

const containerWidth = `${dummyData.length * 11.2}rem`;

function EditorSelect() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef(null);

  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const clampText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength - 1) + '...';
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = 'all 0.5s ease-in-out';
      slideRef.current.style.transform = `translateX(-${currentSlide * 15.8}rem)`;
    }
  }, [currentSlide]);

  return (
    <EditorSelectWrapper>
      <SectionHeader title="편집장의 선택" icon={<IcEnter />} />
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
        <DetailContainer>{clampText(dummyData[currentSlide].content, 100)}</DetailContainer>
      </BookInfoContainer>
    </EditorSelectWrapper>
  );
}

export default EditorSelect;

const EditorSelectWrapper = styled.section`
  position: relative;

  width: 100%;
  height: 50rem;

  background: linear-gradient(to bottom, white 40%, rgba(61, 73, 159, 1) 40%);

  overflow: hidden;
`;

const EditorSelectBookImgContainer = styled.section`
  display: flex;
  column-gap: 4rem;

  width: ${containerWidth}px;
  padding-left: 11.5rem;
  margin-top: 2rem;
`;

const EditorSelectBookImg = styled.img<{ isCurrent: boolean }>`
  width: ${props => (props.isCurrent ? '14.7rem' : '11.8rem')};
  height: ${props => (props.isCurrent ? '21.5rem' : '17.2rem')};
  margin-top: ${props => (props.isCurrent ? '0' : '4.8rem')};

  position: relative;

  z-index: 1;
  object-fit: cover;
`;

const PrevButton = styled.button`
  position: absolute;
  top: 17rem;

  font-size: 3rem;
`;

const NextButton = styled.button`
  position: absolute;
  top: 17rem;
  right: 0;

  font-size: 3rem;
`;

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.title1_bold};

  margin-top: 2.4rem;

  color: white;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.detail2};

  margin-top: 0.2rem;

  color: white;
`;

const DetailContainer = styled.div`
  ${({ theme }) => theme.fonts.body2};

  width: 91%;
  height: 10.8rem;
  margin-top: 1.5rem;
  padding: 1.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.translucent};
  border-radius: ${({ theme }) => theme.radius.s};

  color: white;
`;
