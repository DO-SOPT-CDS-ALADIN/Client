import React from 'react';
import styled from 'styled-components';

function DetailMyPaper() {
  return (
    <DetailMyReviewWrapper>
      <Title1BoldText>마이페이퍼(0편)</Title1BoldText>
      <Body2Text>등록된 글이 없습니다.</Body2Text>
      <WriteButton>쓰기</WriteButton>
    </DetailMyReviewWrapper>
  );
}

export default DetailMyPaper;

const DetailMyReviewWrapper = styled.div`
  padding: 2.4rem 1.6rem;
  margin: 1.2rem 0;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title1BoldText = styled.span`
  margin-bottom: 0.8rem;
  ${({ theme }) => theme.fonts.title1_bold};
`;

const Body2Text = styled.div`
  display: flex;
  justify-content: center;

  margin: 2.4rem 0;

  ${({ theme }) => theme.fonts.body2};
  font-style: normal;
`;

const WriteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.8rem;
  padding: 0.8rem;
  margin-top: 1.8rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.blue_400};
  ${({ theme }) => theme.fonts.title2_bold};
  color: ${({ theme }) => theme.colors.white};
`;
