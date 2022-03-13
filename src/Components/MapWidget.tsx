import { useState } from "react";
import styled from "styled-components";
import { Map } from "./Map";

export const MapButton = styled.button`
  background: none;
  appearance: none;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  width: 100%;
  font-size: 1.1em;
  text-decoration: underline;
`;

export function MapWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MapButton onClick={() => setIsOpen((open) => !open)}>View clues map</MapButton>
      {isOpen && <Map />}
    </>
  );
}
