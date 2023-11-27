import styled from 'styled-components';
import { IcCheckWhite, IcHeartOff, IcDelete } from '../../assets/icons';

function Filter() {
  return (
    <FilterWrapper>
      <CheckBox>
        <CheckWrapper>
          <IcCheckWhite />
        </CheckWrapper>
      </CheckBox>
      <CheckText>전체 선택</CheckText>
      <ButtonWrapper>
        <Button>
          <IcHeartOff />
        </Button>
        <Button>
          <IcDelete />
        </Button>
      </ButtonWrapper>
    </FilterWrapper>
  );
}
export default Filter;

const FilterWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  height: 5.4rem;

  padding: 0rem 0.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const CheckBox = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 2rem;
  height: 2rem;

  margin: 0 1.4rem 0 1rem;

  background: ${({ theme }) => theme.colors.pink_400};
`;

const CheckWrapper = styled.div`
  position: absolute;
  top: 0.04rem;
`;

const CheckText = styled.p`
  ${({ theme }) => theme.fonts.title2_bold};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;

  display: flex;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;

  padding: 0.3rem;
  margin-right: 1.2rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;

  background: ${({ theme }) => theme.colors.white};
`;
