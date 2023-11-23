import React from 'react';
import styled from 'styled-components';
import CATEGORY from '../../constants/category';

interface SelectedCategoryProps {
  active: boolean;
}

interface AllCategoryProps {
  setIsShowAll: (value: boolean) => void;
}

function AllCategory({ setIsShowAll }: AllCategoryProps) {
  return (
    <>
      <Overlay onClick={() => setIsShowAll(false)} />
      <CategoryWrapper onClick={() => setIsShowAll(false)}>
        <SelectCategoryButton active={true}>전체</SelectCategoryButton>
        {CATEGORY.map((category, index) => (
          <SelectCategoryButton key={index} active={false}>
            {category}
          </SelectCategoryButton>
        ))}
      </CategoryWrapper>
    </>
  );
}
export default AllCategory;

const Overlay = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.black};
  opacity: 25%;
`;
const CategoryWrapper = styled.div`
  z-index: 3;
  position: absolute;
  left: calc((100vw - 33.9rem) / 2);
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  width: 33.9rem;

  margin: auto auto;
  border-radius: 0.8rem;
  box-shadow: 0px 2px 6px 0px rgba(33, 32, 32, 0.05);
`;

const SelectCategoryButton = styled.div<SelectedCategoryProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 11.3rem;
  height: 3.4rem;

  border: 0.05rem solid ${({ theme }) => theme.colors.grey_200};
  background: ${({ theme, active }) =>
    active === true ? theme.colors.grey_400 : theme.colors.white};
  color: ${({ theme, active }) => (active === true ? theme.colors.white : theme.colors.grey_600)};

  text-align: center;
  font: ${({ theme }) => theme.fonts.detail2};
`;
