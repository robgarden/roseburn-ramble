import styled from "styled-components";

export const Container = styled.div<{ correct: boolean; incorrect: boolean }>`
  position: relative;

  svg {
    position: absolute;
    z-index: 2;
  }

  svg.correct {
    color: #2e2;
  }

  svg.incorrect {
    color: #e22;
  }

  img {
    opacity: ${(props) => (props.correct || props.incorrect ? 0.15 : 1.0)};
  }
`;
