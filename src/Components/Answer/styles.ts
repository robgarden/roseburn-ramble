import styled from "styled-components";

export const Container = styled.div<{ complete: boolean }>`
  position: relative;

  svg {
    position: absolute;
    color: #2e2;
    z-index: 2;
  }

  img {
    opacity: ${props => props.complete ? 0.15 : 1.0};
  }
`
