import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import { IcEnter, IcEye } from '../../assets/icons';
import { ALADINER_TV_LIST } from '../../constants/home';

interface AladinerTVProps {
  img: string;
  title: string;
  tag: string;
  watch: string;
}

function AladinerTVSlider() {
  return (
    <AladinTVSliderWrapper>
      <SectionHeader title="알라디너 TV" icon={<IcEnter />}></SectionHeader>
      <AladinerTVContainer>
        <AladinerTVItemWrapper style={{ width: `${ALADINER_TV_LIST.length * 30}rem` }}>
          {ALADINER_TV_LIST.map(({ img, title, tag, watch }) => (
            <AladinerTV img={img} title={title} tag={tag} watch={watch} />
          ))}
        </AladinerTVItemWrapper>
      </AladinerTVContainer>
    </AladinTVSliderWrapper>
  );
}

function AladinerTV({ img, title, tag, watch }: AladinerTVProps) {
  return (
    <AladinerTVWrapper>
      <AladinerTVImg src={img} />
      <AladinerTVTitle>{title}</AladinerTVTitle>
      <AladinerTVTag>{tag}</AladinerTVTag>
      <AladinerTVWatchWrapper>
        <IcEye />
        <AladinerTVWatch>라이브북토크 조회수 {watch}</AladinerTVWatch>
      </AladinerTVWatchWrapper>
    </AladinerTVWrapper>
  );
}

export default AladinerTVSlider;

const AladinTVSliderWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
`;

const AladinerTVContainer = styled.div`
  width: 100%;
  margin-top: 0.8rem;

  overflow-x: auto;
  white-space: nowrap;
`;

const AladinerTVItemWrapper = styled.div`
  display: flex;
  column-gap: 1.6rem;

  padding-left: 1.5rem;
`;

const AladinerTVWrapper = styled.div`
  width: 28.2rem;
  margin-top: 0.8rem;
`;

const AladinerTVImg = styled.img`
  width: 100%;
  height: 16.3rem;

  border-radius: ${({ theme }) => theme.radius.m};

  object-fit: cover;
`;

const AladinerTVTitle = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
  color: ${({ theme }) => theme.colors.black};

  margin-top: 1.6rem;

  line-height: normal;
`;

const AladinerTVTag = styled.p`
  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.blue_600};

  margin-top: 0.4rem;

  line-height: 140%;
`;

const AladinerTVWatchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.85rem;
  column-gap: 0.4rem;
`;

const AladinerTVWatch = styled.p`
  ${({ theme }) => theme.fonts.detail2};
  color: ${({ theme }) => theme.colors.grey_400};

  letter-spacing: -0.06rem;
`;
