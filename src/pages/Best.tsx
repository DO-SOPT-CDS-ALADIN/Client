import Category from '../components/best/Category';
import Period from '../components/best/Period';
import CategoryNav from '../components/common/CategoryNav';
import Header from '../components/common/Header';
import TopNav from '../components/common/TopNav';
import PAGE from '../constants/page';

function Best() {
  return (
    <>
      <Header />
      <TopNav page={PAGE.BEST} />
      <Category />
      <CategoryNav />
      <Period />
    </>
  );
}

export default Best;
