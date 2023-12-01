import { useState } from 'react';
import styled from 'styled-components';
import CATEGORY from '../../constants/category';
import { IcDown, IcUp } from '../../assets/icons';
import AllCategory from './AllCategory';

function CategoryNav() {
  const [isShowAll, setIsShowAll] = useState(false);
  const showAllCategory = () => {
    setIsShowAll(prev => !prev);
  };
  return (
    <>
      <CategoryNavWrapper>
        <CategoryWrapper>
          <Active>전체</Active>
          {CATEGORY.map((category, index) => (
            <Category key={index}>{category}</Category>
          ))}
          <ShowButton onClick={showAllCategory}>{isShowAll ? <IcUp /> : <IcDown />}</ShowButton>
        </CategoryWrapper>
      </CategoryNavWrapper>
      {isShowAll && <AllCategory setIsShowAll={setIsShowAll} />}
    </>
  );
}
export default CategoryNav;

const CategoryNavWrapper = styled.div`
  position: relative;

  overflow-x: auto;

  height: 5.6rem;
  padding: 1.2rem 1.4rem 0.4rem 1.6rem;

  white-space: nowrap;

  background-color: ${({ theme }) => theme.colors.white};
  &::-webkit-scrollbar {
    height: 0;
  }
`;

const CategoryWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  height: 4rem;
`;

const Active = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  width: 6.5rem;
  height: 3rem;
  padding: 0.5rem 2rem;

  color: ${({ theme }) => theme.colors.white};

  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 2.4rem;

  ${({ theme }) => theme.fonts.body1};
`;

const Category = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  height: 40px;
  padding: 6px 8px;

  ${({ theme }) => theme.fonts.body2};

  color: ${({ theme }) => theme.colors.grey_500};
`;

const ShowButton = styled.div`
  cursor: pointer;

  position: sticky;
  right: -1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 4.8rem;
  height: 4.8rem;
  padding: 1.2rem;

  background: linear-gradient(270deg, #fff 70.83%, rgba(255, 255, 255, 0) 100%);
`;
