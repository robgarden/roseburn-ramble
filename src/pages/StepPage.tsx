import styled from "styled-components";
import { MapboxMap } from "../Components/MapboxMap";

import { MapWidget } from "../Components/MapWidget";
import { Step } from "../interfaces/Step";
import {
  Container,
  MagnifyingGlass,
  MainContainer,
  Paragraph,
  StartButton,
  TopSecret,
} from "./Landing/styles";
// import { steps } from "../constants/steps";

interface StepProps {
  step: Step;
  mapboxMap?: string;
}

export function StepPage({ step, mapboxMap }: StepProps) {
  const { clues, directions } = step;
  // const stepIndex = steps.findIndex((_) => _.id === step.id);
  // const progress = (stepIndex + 1) / steps.length;
  return (
    <MainContainer>
      <Container>
        <TopSecret />
        <MagnifyingGlass />
        <Paragraph style={{ marginTop: "30px" }}>
          <strong>{directions}</strong>
        </Paragraph>
        {clues.map((clue, i) => (
          <Paragraph key={`${step.id}-clue-${i}`}>{clue}</Paragraph>
        ))}
        {/* <Map /> */}
        <StartButton to={step.id}>Answer Clue</StartButton>
      </Container>
    </MainContainer>
  );
}
