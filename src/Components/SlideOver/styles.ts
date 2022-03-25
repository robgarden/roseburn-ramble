import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {transform: translateY(100px)};
  100% {transform: translateY(0px)};
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
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`

export const StyledSlideOver = styled.div`
  background-color: rgba(255, 255, 255, 1.0);
  border-radius: 2px 2px 0px 0px;
  padding: 10px;
  animation-name: ${slideUp};
  animation-duration: 0.8s;
  transition-property: all;
  transition-timing-function: ease-in;
`
