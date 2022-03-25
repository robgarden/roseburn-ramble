import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
 0% {opacity: 0}
 100% {opacity: 1.0}
`

export const Container = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  position: absolute;
  left:0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  background-color: rgba(33, 33, 33, 0.8);
  animation-name: ${fadeIn};
  animation-duration: 1s;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledModal = styled.div`
  background-color: rgba(255, 255, 255, 1.0);
  border-radius: 2px;
  padding: 10px;
  animation-name: ${fadeIn};
  animation-duration: 0.5s;
`
