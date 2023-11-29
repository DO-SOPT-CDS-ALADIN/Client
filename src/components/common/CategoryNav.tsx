import React, { useState } from 'react';
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

  background-color: ${({ theme }) => theme.colors.white};
  &::-webkit-scrollbar {
    height: 0;
  }
  white-space: nowrap;
`;

const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  height: 4rem;
`;

const Active = styled.div`
  display: flex;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 6.5rem;
  height: 3rem;

  border-radius: 2.4rem;

  background-color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.white};
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 40px;

  padding: 6px 8px;

  ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grey_500};
`;

const ShowButton = styled.div`
  position: sticky;
  right: -1.4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.8rem;
  height: 4.8rem;

  padding: 1.2rem;

  background: linear-gradient(270deg, #fff 70.83%, rgba(255, 255, 255, 0) 100%);
`;
