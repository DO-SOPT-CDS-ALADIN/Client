import React from 'react';
import styled from 'styled-components';
import { IcCircleMini, IcMinicircleDown, IcQuickDelivery } from '../../assets/icons';

interface BookInfoProps {
  price: string;
  discount_price: string;
  mileage: string;
}

function DetailBookInfoBox({ price, discount_price, mileage }: BookInfoProps) {
  return (
    <BookInfoWrapper>
      <InfoSubjectWrapper>
        <BookInfoSubject>판매가</BookInfoSubject>
        <BookInfoContent className="price">{price}</BookInfoContent>
        <BookInfoContentPink>{discount_price}</BookInfoContentPink>
      </InfoSubjectWrapper>
      <InfoSubjectWrapper>
        <BookInfoSubject>마일리지</BookInfoSubject>
        <BookInfoContent className="mileage">{mileage}</BookInfoContent>
        <IcMinicircleDown />
      </InfoSubjectWrapper>
      <InfoSubjectWrapper>
        <BookInfoSubject>배송료</BookInfoSubject>
        <DeliveryContent>
          <BookInfoContent>무료</BookInfoContent>
          <IcQuickDelivery />
          <BookInfoContent>밤 10시까지 주문하면</BookInfoContent>
          <div>
            <BookInfoContent>내일 아침 7시</BookInfoContent>
            <DeliveryContentPink>출근전 배송</DeliveryContentPink>
          </div>
        </DeliveryContent>
      </InfoSubjectWrapper>
      <Divider />
      <InfoSubjectWrapper>
        <BookInfoSubject>전자책</BookInfoSubject>
        <BookInfoContent className="eBook">10,620원</BookInfoContent>
        <IcCircleMini />
      </InfoSubjectWrapper>
    </BookInfoWrapper>
  );
}

export default DetailBookInfoBox;

const BookInfoWrapper = styled.div`
  width: 100%;
  height: 24.2rem;

  padding: 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const InfoSubjectWrapper = styled.div`
  display: flex;
  width: 100%;

  margin-bottom: 1.6rem;
`;

const BookInfoSubject = styled.span`
  width: 8.4rem;

  font: ${({ theme }) => theme.fonts.body1};
  text-align: left;
  vertical-align: middle;
`;

const BookInfoContent = styled.span`
  font: ${({ theme }) => theme.fonts.body2};
  display: inline-block;

  background-color: ${({ theme }) => theme.colors.white};
  &.mileage {
    margin-right: 0.4rem;
  }

  &.price {
    color: ${({ theme }) => theme.colors.grey_400};
    vertical-align: bottom;
  }

  &.eBook {
    margin-right: 0.4rem;
  }
`;

const BookInfoContentPink = styled.span`
  margin-left: 0.8rem;

  font: ${({ theme }) => theme.fonts.head4};

  color: ${({ theme }) => theme.colors.pink_400};
`;

const DeliveryContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;

  font: ${({ theme }) => theme.fonts.body2};
`;
const DeliveryContentPink = styled.span`
  margin-left: 0.4rem;

  font: ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.pink_400};
`;

const Divider = styled.div`
  width: 34.3rem;
  height: 0.1rem;

  margin-bottom: 1.6rem;

  background-color: ${({ theme }) => theme.colors.grey_300};
`;
