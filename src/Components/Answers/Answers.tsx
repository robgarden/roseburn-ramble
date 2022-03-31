import { useNavigate } from "react-router-dom";

import { steps } from "../../constants/steps";
import { Step } from "../../interfaces/Step";
import { AlfredBaird, AmyJames, BenjiFin, CrownPub, EllaSwan, Grid, MuirLibrary, PheonixNotes, TomTorpy } from "./styles";

interface AnswersProps {
  step: Step;
  onAnswer: () => void;
}

export const Answers = (props: AnswersProps) => {
  const { step, onAnswer } = props;

  const navigate = useNavigate();

  const nextStepIndex = steps.findIndex((_) => _.id === step.id) + 1;

  function goToNextStep() {
    if (nextStepIndex < steps.length) {
      const nextStep = steps[nextStepIndex] as Step;
      navigate(`/${nextStep.id}`);
      onAnswer();
    } else if (nextStepIndex === steps.length) {
      navigate(`/finish`);
    }
  }

  return (
    <Grid>
      <AlfredBaird />
      <AmyJames />
      <BenjiFin />
      <CrownPub />
      <EllaSwan />
      <MuirLibrary />
      <PheonixNotes />
      <TomTorpy />
    </Grid>
  );
};
