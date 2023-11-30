import styled from 'styled-components';
import CategoryNav from '../components/common/CategoryNav';
import Header from '../components/common/Header';
import EditorSelect from '../components/home/EditorSelect';
import TopNav from '../components/common/TopNav';
import SlideBanner from '../components/home/SlideBanner';
import TopTen from '../components/home/TopTen';
import {
  FIRST_BANNER_IMAGE_LINKS,
  MIDDLE_BANNER_IMAGE_LINK,
  CONCENTRATE_BOOKS,
  DISCOUNT_BOOKS,
  PURE_BOOKS,
  ALADIN_AUDIO_BOOKS,
  BEST_CLIP_BOOKS,
} from '../constants/home';
import HotBook from '../components/home/HotBook';
import MadeGift from '../components/home/MadeGift';
import BookSlider from '../components/home/BookSlider';
import DiscountBookSlider from '../components/home/DiscountBookSlider';
import OneSentence from '../components/home/OneSentence';
import AnotherCover from '../components/home/AnotherCover';
import PureBookSlider from '../components/home/PureBookSlider';
import BookFund from '../components/home/BookFund';
import ToBeContinuedSlider from '../components/home/ToBeContinuedSlider';
import TodayPoem from '../components/home/TodayPoem';
import CardReviewSlider from '../components/home/CardReviewSlider';
import AladinerTVSlider from '../components/home/AladinerTVSlider';
import Footer from '../components/common/Footer';
import BottomNav from '../components/common/BottomNav';
import AdditionalInfos from '../components/home/AdditionalInfos';
import { IcBtnPage } from '../assets/icons';

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
        <StyledIcBtnPage />
      </BannerImgWrapper>
      <HotBook />
      <MadeGift />
      <BookSlider section_title="이달의 주목도서" books={CONCENTRATE_BOOKS} />
      <DiscountBookSlider section_title="이 주의 특가" books={DISCOUNT_BOOKS} />
      <OneSentence />
      <AnotherCover />
      <PureBookSlider books={PURE_BOOKS} />
      <BookFund />
      <ToBeContinuedSlider />
      <BookSlider section_title="최고의 클립" books={BEST_CLIP_BOOKS} />
      <BookSlider section_title="알라딘 오디오북" books={ALADIN_AUDIO_BOOKS} />
      <TodayPoem />
      <CardReviewSlider />
      <AladinerTVSlider />
      <AdditionalInfos />
      <Footer />
      <BottomNav />
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

  position: relative;
`;

const BannerImg = styled.img`
  object-fit: scale-down;
`;

const StyledIcBtnPage = styled(IcBtnPage)`
  position: absolute;
  right: 1.6rem;
  bottom: 1.3rem;
`;
