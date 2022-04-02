import { useNavigate } from "react-router-dom";

import { SHUFFLED_STEPS, steps } from "../../constants/steps";
import { Step } from "../../interfaces/Step";
import { Answer } from "../Answer/Answer";
import {
  AlfredBaird,
  AmyJames,
  BenjiFin,
  BlueFlowerWood,
  CoatesBridge,
  CrownPub,
  ElizabethSmith,
  EllaSwan,
  ElvanbankSchool,
  GreenParrotCafe,
  Grid,
  Lion,
  LogicMobileShop,
  MuirLibrary,
  Museum,
  PheonixNotes,
  TomTorpy,
} from "./styles";

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
      {SHUFFLED_STEPS.map((s) => {
        const index = steps.findIndex((_) => _ === s);
        return (
          <Answer
            key={s.shortAnswer}
            name={s.shortAnswer}
            complete={index < steps.findIndex((_) => _ === step)}
            onClick={goToNextStep}
          />
        );
      })}
    </Grid>
  );
};
