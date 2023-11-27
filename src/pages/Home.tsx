import styled from 'styled-components';
import CategoryNav from '../components/common/CategoryNav';
import Header from '../components/common/Header';
import EditorSelect from '../components/home/EditorSelect';
import TopNav from '../components/common/TopNav';
import SlideBanner from '../components/home/SlideBanner';
import TopTen from '../components/home/TopTen';
import { FIRST_BANNER_IMAGE_LINKS } from '../constants/home';
import HotBook from '../components/home/HotBook';
import MadeGift from '../components/home/MadeGift';

function Home() {
  return (
    <HomeWrapper>
      <TopNav page={0} />
      <Header />
      <SlideBanner imageLinks={FIRST_BANNER_IMAGE_LINKS} />
      <CategoryNav />
      <EditorSelect />
      <TopTen />
      <BannerImgWrapper>
        <BannerImg src="https://s3-alpha-sig.figma.com/img/ef11/d058/412be2d01c68875c3285be20db729bc3?Expires=1702252800&Signature=X0TVH~fK1MVn~KFt~BrIa0QawjeCyZU55jaS9vKHjYTmDIsscCcX1EVwNDrif6NdiH~MJ4b6j8UKyLx8dTJc5k0c1ooeIqM1DFC2Rns1x-Y6HHaR3Y70pCuL6Zu3xS9qMrlwjbOYSAvsTXTGxY6m3rJNq-4gwluiggLO0A4Q2dl~2v-n8w88dkNyJfPceJywt~WZnhkgQY35NBR3JLaRNQ~ltd830kn3vSYzTJMtJ7jxuTeqTCQt~tNj4lH2Vkg7AfwGwax-rE733cyN1jirZjyaE63P6BTAQP7jI9eNGwxq~RYP4rMAhKdOvYzz5JPN2aV-QIwJv0kDDp7TNFn5pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      </BannerImgWrapper>
      <HotBook />
      <MadeGift />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  padding: 10.8rem 0 6.8rem;
`;

const BannerImgWrapper = styled.div`
  width: 100%;
  height: 21rem;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 136, 160, 1);
`;

const BannerImg = styled.img`
  object-fit: scale-down;
`;
