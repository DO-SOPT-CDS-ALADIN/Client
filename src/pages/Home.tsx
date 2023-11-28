import styled from 'styled-components';
import CategoryNav from '../components/common/CategoryNav';
import Header from '../components/common/Header';
import EditorSelect from '../components/home/EditorSelect';
import TopNav from '../components/common/TopNav';
import SlideBanner from '../components/home/SlideBanner';
import TopTen from '../components/home/TopTen';
import { FIRST_BANNER_IMAGE_LINKS, MIDDLE_BANNER_IMAGE_LINK } from '../constants/home';
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
        <BannerImg src={MIDDLE_BANNER_IMAGE_LINK} />
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
