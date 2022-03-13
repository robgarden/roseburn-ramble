import { Map } from "./Map";
import { DirectionsText, Parchment } from "./styles";

interface ClueProps {
  clueText: string;
  walkingDirections: string;
  mapboxMap?: string;
}

export function Clue({ clueText, walkingDirections, mapboxMap }: ClueProps) {
  return (
    <div style={{ paddingTop: '10px' }}>
      <button style={{ marginTop: '10px'}}>View map</button>
      {/* <Parchment>{clueText}</Parchment> */}
      <Parchment>Hi I'm some <strong>bold</strong> text</Parchment>
      <DirectionsText>
        <em>{walkingDirections}</em>
      </DirectionsText>
      <Map />
    </div>
  );
}
