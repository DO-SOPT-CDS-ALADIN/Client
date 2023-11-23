import styled from 'styled-components';
import { BEST_CATEGORY } from '../../constants/bestCategory';
import CategoryButton from './CategoryButton';

function Category() {
  return (
    <CategoryWrapper>
      {BEST_CATEGORY.map((category, index) => (
        <CategoryButton
          key={index}
          id={index}
          icon={category.icon}
          category={category.category}
          defaultChecked={index === 0}
        />
      ))}
    </CategoryWrapper>
  );
}
export default Category;

const CategoryWrapper = styled.div`
  overflow-x: auto;
  white-space: nowrap;

  display: flex;
  gap: 0.8rem;

  padding: 10.8rem 1.6rem 0;

  &::-webkit-scrollbar {
    height: 0;
  }
`;
