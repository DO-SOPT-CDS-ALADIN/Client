import styled from 'styled-components';
import { IcEnter, IcRank, IcTime } from '../../assets/icons';
import SectionHeader from './SectionHeader';

const tagTextList = ['스킵과로퍼', '정세랑', '한동일', '고양이깜냥'];

function TopTen() {
  return (
    <TopTenWrapper>
      <NowTime />
      <SectionHeader title="실시간 클릭 Top 10" icon={<IcEnter />} />
      <FirstRankBook>
        <FirstRankBookImg src="https://image.aladin.co.kr/Tobe/Note/62S4ES/4433X7/638338480211363098_0.png?RS=195x175&CS=196x175&RT=1&AR=0" />
        <FirstRankBookTitle>
          <BookRank>1.</BookRank>
          <BookTitle>단 한 사람</BookTitle>
        </FirstRankBookTitle>
        <IcRank />
        <RankNumber>1</RankNumber>
      </FirstRankBook>
      <TagList>
        {tagTextList.map(item => (
          <Tag text={item} />
        ))}
      </TagList>
    </TopTenWrapper>
  );
}

export default TopTen;

interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return <TagWrapper>#{text}</TagWrapper>;
}

export function NowTime() {
  return (
    <NowTimeWrapper>
      <IcTime />
      16:16
    </NowTimeWrapper>
  );
}

const TopTenWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 23rem;
  padding-top: 4rem;
`;

const FirstRankBook = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 5.4rem;
  padding: 0.8rem 1.6rem 0 1.6rem;

  border-bottom: 0.05rem solid ${({ theme }) => theme.colors.grey_300};
`;

const FirstRankBookImg = styled.img`
  width: 6.2rem;
  height: 4.6rem;
`;

const FirstRankBookTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;

  margin-left: 1rem;
  margin-right: 0.47rem;
`;

const BookRank = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
  font-style: italic;
`;

const BookTitle = styled.p`
  ${({ theme }) => theme.fonts.body2};

  width: 21.8rem;
`;

const RankNumber = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

const TagList = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;

  width: 100%;
  margin-top: 0.8rem;
`;

const TagWrapper = styled.div`
  ${({ theme }) => theme.fonts.detail2};

  padding: 0.8rem 1.6rem;

  border: 0.1rem solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 2rem;
`;

const NowTimeWrapper = styled.div`
  ${({ theme }) => theme.fonts.detail1};

  display: flex;
  align-items: center;

  position: absolute;
  top: 5.5rem;
  right: 4.5rem;

  color: ${({ theme }) => theme.colors.blue_600};
`;
