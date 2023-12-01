export const parsePrice = (priceString: string) => {
  return parseInt(priceString.replace(/,/g, '').replace('원', ''), 10);
};

export const formatPrice = (numericValue: number) => {
  return numericValue.toLocaleString('ko-KR') + '원';
};
