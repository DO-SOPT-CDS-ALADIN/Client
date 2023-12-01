import styled from 'styled-components';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  icon: ReactNode;
}
function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <SectionHeaderWrapper>
      <SectionHeaderTitle>{title}</SectionHeaderTitle>
      {icon}
    </SectionHeaderWrapper>
  );
}

export default SectionHeader;

const SectionHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4.8rem;
  padding-right: 1.2rem;
  padding-left: 1.6rem;
`;

const SectionHeaderTitle = styled.p`
  ${({ theme }) => theme.fonts.head3};
`;
