import styled from 'styled-components';
import CategoryNav from '../components/common/CategoryNav';
import Header from '../components/common/Header';
import EditorSelect from '../components/home/EditorSelect';
import TopNav from '../components/common/TopNav';
import SlideBanner from '../components/home/SlideBanner';
import TopTen from '../components/home/TopTen';
import firstBannerImageLinks from '../constants/home';

function Home() {
  return (
    <HomeWrapper>
      <TopNav page={0} />
      <Header />
      <SlideBanner imageLinks={firstBannerImageLinks} />
      <CategoryNav />
      <EditorSelect />
      <TopTen />
    </HomeWrapper>
  );
}

export default Home;

const HomeWrapper = styled.div`
  padding: 10.8rem 0 6.8rem;
`;
