import Category from '../components/best/Category';
import Header from '../components/common/Header';
import TopNav from '../components/common/TopNav';
import PAGE from '../constants/page';

function Best() {
  return (
    <>
      <Header />
      <TopNav page={PAGE.BEST} />
      <Category />
    </>
  );
}

export default Best;
