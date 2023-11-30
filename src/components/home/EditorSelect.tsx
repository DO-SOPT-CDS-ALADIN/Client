import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { IcEnter, IcBigcircleLeft, IcBigcircleRight } from '../../assets/icons';
import { useGetEditorChoice } from '../../hooks/useGetEditorChoice';

function EditorSelect() {
  const { editorChoiceBookList } = useGetEditorChoice();

  const TOTAL_SLIDES = editorChoiceBookList.length - 1;
  const containerWidth = `${editorChoiceBookList.length * 11.2}rem`;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideRef = useRef<HTMLElement>(null);

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
      <EditorSelectBookImgContainer containerWidth={containerWidth} ref={slideRef}>
        {editorChoiceBookList.map(({ imgUrl }, index) => (
          <EditorSelectBookImg key={index} src={imgUrl} isCurrent={index === currentSlide} />
        ))}
      </EditorSelectBookImgContainer>
      <PrevButton onClick={PrevSlide} className="prev_button">
        <IcBigcircleLeft />
      </PrevButton>
      <NextButton onClick={NextSlide} className="next_button">
        <IcBigcircleRight />
      </NextButton>
      <BookInfoContainer>
        <Title>{editorChoiceBookList[currentSlide].title}</Title>
        <SubTitle>{editorChoiceBookList[currentSlide].subtitle}</SubTitle>
        <DetailContainer>
          {clampText(editorChoiceBookList[currentSlide].description, 100)}
        </DetailContainer>
      </BookInfoContainer>
    </EditorSelectWrapper>
  );
}

export default EditorSelect;

const EditorSelectWrapper = styled.section`
  position: relative;

  width: 100%;
  height: 52rem;
  padding-top: 1.2rem;

  background: linear-gradient(to bottom, white 40%, rgba(61, 73, 159, 1) 40%);
  border-top: 0.1rem solid ${({ theme }) => theme.colors.grey_300};

  overflow: hidden;
`;

const EditorSelectBookImgContainer = styled.section<{ containerWidth: string }>`
  display: flex;
  column-gap: 4rem;

  width: ${({ containerWidth }) => containerWidth};
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
  left: 0.45rem;

  font-size: 3rem;
`;

const NextButton = styled.button`
  position: absolute;
  top: 17rem;
  right: 0.45rem;

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

  width: 34.3rem;
  height: 10.8rem;
  margin-top: 1.5rem;
  padding: 1.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.translucent};
  border-radius: ${({ theme }) => theme.radius.s};

  color: white;

  white-space: wrap;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: hidden;
`;
