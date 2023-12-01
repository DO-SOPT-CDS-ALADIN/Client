import styled from 'styled-components';
import {
  IcCheckPink,
  IcMileage,
  IcMinus,
  IcPlus,
  IcHeartOn,
  IcHeartOff,
  IcClose,
  IcCheckboxEmpty,
} from '../../assets/icons';
import { TAG } from '../../constants/tag';
import { CartItemProps } from '../../utils/CartItemProps';
import { useRecoilState } from 'recoil';
import {
  totalPriceState,
  totalMileageState,
  totalItemCountState,
  totalBookCountState,
} from '../../recoil/atoms/receiptState';
import { parsePrice } from '../../utils/Price';
import { useCart } from '../../hooks/useCart';

function Book(props: CartItemProps) {
  const {
    id,
    index,
    count,
    title,
    imgUrl,
    discountPrice,
    mileage,
    heart,
    isCheckedList,
    setIsCheckedList,
  } = props;

  const handleCheck = () => {
    setIsCheckedList(prev => {
      const updatedList = [...prev];
      updatedList[index] = !updatedList[index];
      return updatedList;
    });
    calculatePrice();
  };
  const { deleteFromCart, patchItemCount } = useCart();
  const [, setTotalPrice] = useRecoilState(totalPriceState);
  const [, setTotalMileage] = useRecoilState(totalMileageState);
  const [, setTotalItemCount] = useRecoilState(totalItemCountState);
  const [, setTotalBookCount] = useRecoilState(totalBookCountState);

  const calculatePrice = () => {
    const price = parsePrice(discountPrice);
    const mile = parsePrice(mileage);
    setTotalPrice(prev => (!isCheckedList[index] ? prev + price * count : prev - price * count));
    setTotalMileage(prev => (!isCheckedList[index] ? prev + mile * count : prev - mile * count));
    setTotalItemCount(prev => (!isCheckedList[index] ? prev + 1 : prev - 1));
    setTotalBookCount(prev => (!isCheckedList[index] ? prev + count : prev - count));
  };

  const handleDeleteFromCart = () => {
    deleteFromCart([id]);
  };

  const increaseItemCount = () => {
    patchItemCount(id, count + 1);
  };

  const decreaseItemCount = () => {
    count > 1 && patchItemCount(id, count - 1);
  };
  return (
    <BookWrapper>
      <CheckButton>
        <CheckBox onClick={handleCheck}>
          {isCheckedList[index] ? <IcCheckPink /> : <IcCheckboxEmpty />}
        </CheckBox>
      </CheckButton>
      <InnerWrapper>
        <BookImg src={imgUrl} />
        <BookInfo>
          <Title>{title}</Title>
          <PriceWrapper>
            <BlackText>{discountPrice}</BlackText>
            <MileageWrapper>
              <IcMileage />
              <GreyText>{mileage}</GreyText>
            </MileageWrapper>
          </PriceWrapper>
          <Option>
            <Stapper>
              <IcMinus onClick={decreaseItemCount} />
              <StepNum>{count}</StepNum>
              <IcPlus onClick={increaseItemCount} />
            </Stapper>
            <Button>{heart ? <IcHeartOn /> : <IcHeartOff />}</Button>
          </Option>
          <DeliveryInfo>
            <Tag>{TAG.DELIVERY.TEXT}</Tag>
            <DeliveryDetail>내일 아침 7시 출근전 배송</DeliveryDetail>
          </DeliveryInfo>
        </BookInfo>
        <DeleteButton onClick={handleDeleteFromCart}>
          <IcClose />
        </DeleteButton>
      </InnerWrapper>
    </BookWrapper>
  );
}
export default Book;

const BookWrapper = styled.div`
  position: relative;

  width: 37.5rem;
  height: 17.8rem;

  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_200};
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
  flex-shrink: 0;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  margin: 0 1.4rem 0 1rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_200};
`;

const BookImg = styled.img`
  width: 8rem;
  height: 13rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 2.4rem 0 0 5.6rem;
`;
const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: flex-start;
`;

const Title = styled.p`
  min-height: 2rem;
  ${({ theme }) => theme.fonts.title2_bold};
`;

const PriceWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const BlackText = styled.p`
  padding-top: -0.4rem;

  ${({ theme }) => theme.fonts.body1};
`;

const GreyText = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};
  ${({ theme }) => theme.fonts.detail2};
`;

const MileageWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  padding: 0.2rem 0rem;
`;

const Stapper = styled.div`
  cursor: pointer;

  overflow: hidden;
  display: flex;
  gap: 0.4rem;
  align-items: center;

  height: 3.2rem;
  padding: 0rem 0.4rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;

const StepNum = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  padding: 0.6rem 0rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_300};

  ${({ theme }) => theme.fonts.body2};
`;

const Option = styled.div`
  display: flex;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;
  margin-left: 1.2rem;
  padding: 0.3rem;

  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grey_300};
  border-radius: 0.4rem;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 0.8rem 0.2rem;

  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.detail1};

  background: ${({ theme }) => theme.colors.orange};
  border-radius: 1rem;
`;

const DeliveryInfo = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-top: 0.5rem;
`;

const DeliveryDetail = styled(GreyText)`
  line-height: 180%;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  position: absolute;
  right: 1.2rem;
`;
