import styled from 'styled-components';
import { IcEnterXs } from '../../assets/icons';
import goods1 from '../../assets/imgs/goods1.png';
import goods2 from '../../assets/imgs/goods2.png';
import goods3 from '../../assets/imgs/goods3.png';

function AladinGoods() {
  return (
    <PromotionWrapper>
      <PromotionHeader>
        <Title>
          알라딘&nbsp;<span>굿즈</span>
        </Title>
        <ShowMoreWrapper>
          <ShowMore>더보기</ShowMore>
          <IcEnterXs />
        </ShowMoreWrapper>
      </PromotionHeader>
      <List>
        <GoodsWrapper>
          <PromotionImg src={goods1} />
          <GoodsTitle>피너츠 머그</GoodsTitle>
        </GoodsWrapper>
        <GoodsWrapper>
          <PromotionImg src={goods2} />
          <GoodsTitle>피너츠 북엔드</GoodsTitle>
        </GoodsWrapper>
        <GoodsWrapper>
          <PromotionImg src={goods3} />
          <GoodsTitle>본투리드 볼펜</GoodsTitle>
        </GoodsWrapper>
      </List>
    </PromotionWrapper>
  );
}
export default AladinGoods;

const PromotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;

  margin-top: 1.2rem;
  padding: 2.4rem 0 2.4rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const PromotionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.title1_bold};
  span {
    ${({ theme }) => theme.fonts.title1_bold};
    color: ${({ theme }) => theme.colors.pink_400};
  }
`;

const ShowMoreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5.8rem;
  height: 4rem;

  margin-right: 0.8rem;
  padding: 1rem 0rem 1rem 0.1rem;
`;

const ShowMore = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};
  ${({ theme }) => theme.fonts.body2};
`;

const List = styled.div`
  overflow-y: auto;

  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    height: 0;
  }
`;

const GoodsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  width: 12.8rem;

  margin: 0.4rem 1.6rem 0 0;

  text-align: center;
`;

const GoodsTitle = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

const PromotionImg = styled.img`
  width: 12.2rem;
  height: 12.2rem;
`;
