import styled from 'styled-components';
import { IcCheckPink, IcMileage, IcMinus, IcPlus, IcHeartOn, IcClose } from '../../assets/icons';
import book from '../../assets/imgs/bookImg.png';
import { TAG } from '../../constants/tag';

function Book() {
  return (
    <BookWrapper>
      <CheckButton>
        <CheckBox>
          <IcCheckPink />
        </CheckBox>
      </CheckButton>
      <InnerWrapper>
        <BookImg src={book} />
        <BookInfo>
          <Title>설자은, 금성으로 돌아오다</Title>
          <PriceWrapper>
            <BlackText>15,120원</BlackText>
            <MileageWrapper>
              <IcMileage />
              <GreyText>840원</GreyText>
            </MileageWrapper>
          </PriceWrapper>
          <Option>
            <Stapper>
              <IcMinus />
              <StepNum>1</StepNum>
              <IcPlus />
            </Stapper>
            <Button>
              <IcHeartOn />
            </Button>
          </Option>
          <DeliveryInfo>
            <Tag>{TAG.DELIVERY.TEXT}</Tag>
            <DeliveryDetail>내일 아침 7시 출근전 배송</DeliveryDetail>
          </DeliveryInfo>
        </BookInfo>
        <CloseButton>
          <IcClose />
        </CloseButton>
      </InnerWrapper>
    </BookWrapper>
  );
}
export default Book;

const BookWrapper = styled.div`
  position: relative;

  width: 37.5rem;
  height: 17.8rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_200};

  background: ${({ theme }) => theme.colors.white};
`;

const CheckButton = styled.button`
  position: absolute;

  width: 4rem;
  height: 4rem;

  margin-left: 0.8rem;
`;

const CheckBox = styled.div`
  position: absolute;
  top: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  width: 2rem;
  height: 2rem;

  margin: 0 1.4rem 0 1rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_200};

  background: ${({ theme }) => theme.colors.white};
`;

const BookImg = styled.img`
  width: 8rem;
  height: 13rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;

  padding: 2.4rem 0 0 5.6rem;
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Title = styled.p`
  min-height: 2rem;
  font: ${({ theme }) => theme.fonts.title2_bold};
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const BlackText = styled.p`
  padding-top: -0.4rem;

  font: ${({ theme }) => theme.fonts.body1};
`;

const GreyText = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};
  font: ${({ theme }) => theme.fonts.detail2};
`;

const MileageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  padding: 0.2rem 0rem;
`;

const Stapper = styled.div`
  overflow: hidden;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  height: 3.2rem;

  padding: 0rem 0.4rem;

  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};

  background: ${({ theme }) => theme.colors.white};
`;

const StepNum = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  padding: 0.6rem 0rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_300};

  font: ${({ theme }) => theme.fonts.body2};
`;

const Option = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3.2rem;
  height: 3.2rem;

  padding: 0.3rem;
  margin-left: 1.2rem;

  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_300};

  background: ${({ theme }) => theme.colors.white};
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.2rem 0.8rem;

  border-radius: 1rem;

  background: ${({ theme }) => theme.colors.orange};

  color: ${({ theme }) => theme.colors.white};

  font: ${({ theme }) => theme.fonts.detail1};
`;

const DeliveryInfo = styled.div`
  display: flex;
  gap: 0.4rem;

  margin-top: 0.5rem;
`;

const DeliveryDetail = styled(GreyText)`
  line-height: 180%;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 1.2rem;
`;
