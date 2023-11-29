import styled from 'styled-components';
import { IcEnterXs } from '../../assets/icons';
import coffee1 from '../../assets/imgs/coffee1.png';
import coffee2 from '../../assets/imgs/coffee2.png';
import coffee3 from '../../assets/imgs/coffee3.png';
import coffee from '../../assets/imgs/coffee_price.png';

function AladinCoffee() {
  return (
    <PromotionWrapper>
      <PromotionHeader>
        <Title>
          알라딘&nbsp;<span>커피</span>
        </Title>
        <ShowMoreWrapper>
          <ShowMore>더보기</ShowMore>
          <IcEnterXs />
        </ShowMoreWrapper>
      </PromotionHeader>
      <List>
        <CoffeeWrapper>
          <CoffePrice src={coffee} />
          <PromotionImg src={coffee1} />
          <CoffeeTitle>에티오피아 단세 모...</CoffeeTitle>
        </CoffeeWrapper>
        <CoffeeWrapper>
          <CoffePrice src={coffee} />
          <PromotionImg src={coffee2} />
          <CoffeeTitle>브라질 산토스 NY2...</CoffeeTitle>
        </CoffeeWrapper>
        <CoffeeWrapper>
          <CoffePrice src={coffee} />
          <PromotionImg src={coffee3} />
          <CoffeeTitle>온두라스 HSG </CoffeeTitle>
        </CoffeeWrapper>
      </List>
    </PromotionWrapper>
  );
}
export default AladinCoffee;

const PromotionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;

  margin-top: 1.2rem;
  padding: 2.4rem 0rem 2.4rem 1.6rem;

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

const CoffeeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  width: 12.8rem;

  margin: 0.4rem 1.6rem 0 0;

  text-align: center;
`;

const CoffePrice = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 5.4rem;
  height: 3.2rem;
`;
const CoffeeTitle = styled.p`
  ${({ theme }) => theme.fonts.body1};
`;

const PromotionImg = styled.img`
  width: 12.2rem;
  height: 12.2rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_200};
`;
