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
  bottom: 8.4rem;
  left: 0;
  right: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 34.3rem;
  height: 4.8rem;

  margin: 0 auto;
  padding: 1rem 3rem;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.grey_500};

  text-align: center;
`;

const ToastMessage = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.body2};
`;
