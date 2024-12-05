import { keyframes } from '@emotion/react';

// Định nghĩa keyframes cho animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Xuất animation
export const spinAnimation = `${spin} infinite 15s linear`;