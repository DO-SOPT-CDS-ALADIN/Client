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
  position: fixed;
  z-index: 9998;
  z-index: 9998;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  opacity: 25%;
  background-color: ${({ theme }) => theme.colors.black};
`;
const CategoryWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  left: calc((100vw - 33.9rem) / 2);

  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 33.9rem;
  margin: auto auto;

  border-radius: 0.8rem;
  box-shadow: 0px 2px 6px 0px rgba(33, 32, 32, 0.05);
`;

const SelectCategoryButton = styled.div<SelectedCategoryProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 11.3rem;
  height: 3.4rem;

  color: ${({ theme, active }) => (active === true ? theme.colors.white : theme.colors.grey_600)};
  text-align: center;
  ${({ theme }) => theme.fonts.detail2};

  background: ${({ theme, active }) =>
    active === true ? theme.colors.grey_400 : theme.colors.white};
  border: 0.05rem solid ${({ theme }) => theme.colors.grey_200};
`;
