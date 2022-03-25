
import { FC, MouseEventHandler, useRef } from "react";
import { Container, Overlay, StyledSlideOver } from "./styles";

interface SlideOverProps {
  open: boolean
  onClose: () => void
}

export const SlideOver: FC<SlideOverProps> = (props) => {
  const { open, onClose, children } = props
  const overlayRef = useRef<HTMLDivElement>(null)

  if (!open) {
    return null
  }

  const handleClick = (event: any) => {
    if (event.target === overlayRef.current) {
      onClose()
    }
  }

  return (
    <Overlay role="button" ref={overlayRef} onClick={handleClick}>
      <Container>
        <StyledSlideOver>
          {children}
        </StyledSlideOver>
      </Container>
    </Overlay>
  )
}
