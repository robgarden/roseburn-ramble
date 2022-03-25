import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  0% {transform: translateY(80%)};
  100% {transform: translateY(0)};
`

export const Container = styled.div`
  position: relative;
  overflow-y: scroll;
`

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
`

export const StyledSlideOver = styled.div`
  background-color: rgba(255, 255, 255, 1.0);
  border-radius: 2px 2px 0px 0px;
  padding: 10px;
  animation-name: ${slideUp};
  animation-duration: 1.0s;
  transition-property: all;
  transition-timing-function: ease-in;
  display: flex;
  flex-direction: column;
`

export const CloseButton = styled.button`
  border: none;
  padding: 5px;
  width: 40px;
  height: 40px;
  appearance: none;
  background: white;
  align-self: flex-end;
  margin-bottom: 10px;
`
