import { FC, useRef } from "react";
import { CloseButton, Container, Overlay, StyledSlideOver } from "./styles";

interface SlideOverProps {
  open: boolean;
  onClose: () => void;
}

export const SlideOver: FC<SlideOverProps> = (props) => {
  const { open, onClose, children } = props;
  const overlayRef = useRef<HTMLDivElement>(null);

  if (!open) {
    return null;
  }

  const handleClick = (event: any) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <Overlay role="button" ref={overlayRef} onClick={handleClick}>
      <Container>
        <StyledSlideOver>
          <CloseButton onClick={onClose}>
            <svg
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                color: "#555",
                width: "30px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </CloseButton>
          {children}
        </StyledSlideOver>
      </Container>
    </Overlay>
  );
};
