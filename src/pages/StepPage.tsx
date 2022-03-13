import styled from "styled-components";
import { MapboxMap } from "../Components/MapboxMap";

import { MapWidget } from "../Components/MapWidget";
import { Step } from "../interfaces/Step";
// import { steps } from "../constants/steps";

const Parchment = styled.p`
  margin: 20px 10px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: rgba(251, 241, 207, 1);
`;

const DirectionsText = styled.p`
  margin: 20px 10px;
  padding: 20px;
`;

// const Progress = styled.progress`
//   margin: 0 10px;
//   width: 95%;
// `

interface StepProps {
  step: Step;
  mapboxMap?: string;
}

export function StepPage({ step, mapboxMap }: StepProps) {
  const { clue, walkingDirections } = step;
  // const stepIndex = steps.findIndex((_) => _.id === step.id);
  // const progress = (stepIndex + 1) / steps.length;
  return (
    <div style={{ paddingTop: "10px" }}>
      {/* <Progress value={progress} /> */}
      <div style={{ marginTop: "10px" }}>
        <MapWidget />
      </div>
      <DirectionsText>
        <em>{walkingDirections}</em>
      </DirectionsText>
      <Parchment>{clue}</Parchment>
      <div style={{ marginTop: "50px" }}>
        <MapboxMap />
      </div>
    </div>
  );
}
