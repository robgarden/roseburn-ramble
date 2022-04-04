import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { SHUFFLED_STEPS, steps } from "../../constants/steps";
import { GameContext } from "../../game/GameContext";
import { Step } from "../../interfaces/Step";
import { shuffle } from "../../utils";
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
  Illustration,
  Lion,
  LogicMobileShop,
  MuirLibrary,
  Museum,
  PheonixNotes,
  TomTorpy,
} from "./styles";

interface AnswersProps {
  // the current step we are on
  step: Step;
  onAnswer: () => void;
}

const SHUFFLED: (Step | string)[] = shuffle([
  ...steps,
  "coates_bridge",
  "amy_james",
]);

export const Answers = (props: AnswersProps) => {
  const { step, onAnswer } = props;

  const gameContext = useContext(GameContext);
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

  function checkAnswerAndContinue(shortAnswer: string) {
    console.log(shortAnswer);
  }

  function onCorrect() {
    gameContext.addToCompletedSteps(step);
    goToNextStep();
  }

  return (
    <Grid>
      {SHUFFLED.map((s) => {
        const index = steps.findIndex((_) => _ === s);

        if (typeof s === "string") {
          return (
            <Answer
              key={s}
              name={s}
              onCorrect={() => {}}
            />
          );
        }
        return (
          <Answer
            key={s.shortAnswer}
            name={s.shortAnswer}
            complete={index < steps.findIndex((_) => _ === step)}
            onCorrect={onCorrect}
            step={step}
          />
        );
      })}
    </Grid>
  );
};
