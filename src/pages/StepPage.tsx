import { useState } from "react";
import { Answers } from "../Components/Answers/Answers";
import { MapboxMap } from "../Components/MapboxMap";
import { MapWidget } from "../Components/MapWidget";
import { SlideOver } from "../Components/SlideOver/SliderOver";
import { Step } from "../interfaces/Step";
import { Button } from "../styles";
import {
  Container,
  MagnifyingGlass,
  MainContainer,
  Paragraph,
  TopSecret,
} from "../styles";

interface StepProps {
  step: Step;
  mapboxMap?: string;
}

export function StepPage({ step, mapboxMap }: StepProps) {
  const { clues, directions } = step;

  const [showAnswers, setShowAnswers] = useState(false)
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
        <Button onClick={() => setShowAnswers(true)}>Answer Clue</Button>
      </Container>
      <SlideOver open={showAnswers} onClose={() => setShowAnswers(false)}>
        <Answers />
      </SlideOver>
    </MainContainer>
  );
}
