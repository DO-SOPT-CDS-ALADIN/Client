import { useEffect } from 'react';
import { styled } from 'styled-components';
import { createPortal } from 'react-dom';

interface ToastProps {
  setToast: (value: boolean) => void;
  message: string;
}
function Toast({ setToast, message }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return createPortal(
    <ToastWrapper>
      <ToastMessage>{message}</ToastMessage>
    </ToastWrapper>,
    document.body
  );
}

export default Toast;

const ToastWrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 8.4rem;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 34.3rem;
  height: 4.8rem;
  margin: 0 auto;
  padding: 1rem 3rem;

  text-align: center;

  background-color: ${({ theme }) => theme.colors.grey_500};
  border-radius: 10px;
`;

const ToastMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body2};
`;
