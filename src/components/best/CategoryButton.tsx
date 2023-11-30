import styled from 'styled-components';
import React from 'react';

interface CategoryProps {
  id: number;
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  category: string;
  defaultChecked: boolean;
}

function CategoryButton(props: CategoryProps) {
  const { id, icon: Icon, category, defaultChecked } = props;
  return (
    <>
      <RadioInput
        type="radio"
        id={`category${id}`}
        name="best-category"
        defaultChecked={defaultChecked}
      />
      <Category htmlFor={`category${id}`}>
        <Icon />
        <CategoryName>{category}</CategoryName>
      </Category>
    </>
  );
}
export default CategoryButton;

const Category = styled.label`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-end;

  width: 7.8rem;
  height: 8.8rem;
  padding: 1.8rem 1.5rem 0.8rem 1.4rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.8rem;
`;

const CategoryName = styled.p`
  font: ${({ theme }) => theme.fonts.body2};
  color: ${({ theme }) => theme.colors.grey_400};
`;

const RadioInput = styled.input`
  display: none;

  &:checked + label {
    border: 1px solid ${({ theme }) => theme.colors.blue_400};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.blue_400} inset;

    ${CategoryName} {
      font: ${({ theme }) => theme.fonts.body1};
      color: ${({ theme }) => theme.colors.blue_400};
    }
  }
`;
