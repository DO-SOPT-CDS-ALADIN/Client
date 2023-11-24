import styled from 'styled-components';
import Category from '../components/best/Category';
import Pagenation from '../components/best/Pagenation';
import Period from '../components/best/Period';
import BackButton from '../components/common/BackButton';
import BottomNav from '../components/common/BottomNav';
import CategoryNav from '../components/common/CategoryNav';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import TopButton from '../components/common/TopButton';
import TopNav from '../components/common/TopNav';
import PAGE from '../constants/page';
import BookList from '../components/best/BookList';

function Best() {
  return (
    <BestWrapper>
      <Header />
      <TopNav page={PAGE.BEST} />
      <Category />
      <CategoryNav />
      <Period />
      <BookList />
      <Pagenation />
      <Footer />
      <BackButton />
      <TopButton />
      <BottomNav />
    </BestWrapper>
  );
}

export default Best;

const BestWrapper = styled.div`
  padding: 10.8rem 0 6.8rem;
`;
