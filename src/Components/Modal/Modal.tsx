import { FC, useRef } from "react";
import { Container, Overlay, StyledModal } from "./styles";

interface ModalProps {
  open: boolean
  onClose: () => void
}

export const Modal: FC<ModalProps> = (props) => {
  const { open, onClose, children } = props
  const overlayRef = useRef<HTMLDivElement>(null)

  if (!open) {
    return null
  }

  const handleClick = (event:any) => {
    console.log(event)
  }

  return (
    <Overlay ref={overlayRef} role="button" onClick={handleClick}>
      <Container>
        <StyledModal>
          {children}
        </StyledModal>
      </Container>
    </Overlay>
  )
}
