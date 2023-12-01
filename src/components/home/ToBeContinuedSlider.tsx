import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import { IcEnter } from '../../assets/icons';
import { TO_BE_CONTINUED_BOOKS } from '../../constants/home';

interface ToBeContinuedProps {
  img: string;
  title: string;
  author: string;
}

function ToBeContinuedSlider() {
  return (
    <ToBeContinuedSliderWrapper>
      <SectionHeader title="투비컨티뉴드 추천 노트" icon={<IcEnter />}></SectionHeader>
      <BooksContainer>
        <BooksWrapper style={{ width: `${TO_BE_CONTINUED_BOOKS.length * 27}rem` }}>
          {TO_BE_CONTINUED_BOOKS.map(({ img, title, author }, index) => (
            <ToBeContinued key={index} img={img} title={title} author={author} />
          ))}
        </BooksWrapper>
      </BooksContainer>
    </ToBeContinuedSliderWrapper>
  );
}

export default ToBeContinuedSlider;

function ToBeContinued({ img, title, author }: ToBeContinuedProps) {
  return (
    <ToBeContinuedWrapper>
      <ToBeContinuedImg src={img} />
      <ToBeContinuedInfo>
        <ToBeContinuedTitle>{title}</ToBeContinuedTitle>
        <ToBeContinuedAuthor>{author}</ToBeContinuedAuthor>
      </ToBeContinuedInfo>
    </ToBeContinuedWrapper>
  );
}

const ToBeContinuedSliderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const BooksContainer = styled.div`
  width: 100%;
  margin-top: 0.8rem;

  overflow-x: auto;
  white-space: nowrap;
`;

const BooksWrapper = styled.div`
  display: flex;
  column-gap: 1.6rem;

  height: 23.5rem;

  padding-left: 1.5rem;
`;

const ToBeContinuedWrapper = styled.div`
  width: 25.4rem;
  height: 23rem;
  position: relative;
`;

const ToBeContinuedImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

const ToBeContinuedInfo = styled.div`
  width: 12.1rem;
  height: 8.5rem;
  padding-top: 1.2rem;
  padding-left: 1.3rem;

  position: absolute;
  bottom: 2.5rem;
  left: 0;

  background-color: ${({ theme }) => theme.colors.black};
`;

const ToBeContinuedTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
  color: ${({ theme }) => theme.colors.white};
`;

const ToBeContinuedAuthor = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 0.4rem;
`;
