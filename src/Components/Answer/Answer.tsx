import { useState } from "react";
import { Step } from "../../interfaces/Step";
import { Illustration } from "../Answers/styles";
import { Container } from "./styles";

interface AnswerProps {
  name: string;
  onCorrect(name: string): void;
  complete?: boolean;
  step: Step;
}

export function Answer(props: AnswerProps) {
  const { name, onCorrect, step, complete = false } = props;

  const [incorrect, setIncorrect] = useState(false);
  const [correct, setCorrect] = useState(complete)

  function checkAnswer() {
    if (name === step.shortAnswer && !correct) {
      // user selected correct answer
      setCorrect(true);
      setTimeout(() => {
        onCorrect(name);
      }, 1000)
    } else {
      setIncorrect(true);
      setTimeout(() => {
        setIncorrect(false)
      }, 1000)
    }
  }

  return (
    <Container correct={correct} incorrect={incorrect} role="button" onClick={checkAnswer}>
      {correct && (
        <svg
          className="w-6 h-6 correct"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      )}

      {!correct && incorrect && (
        <svg
          className="w-6 h-6 incorrect"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      )}
      <Illustration src={`/images/illustrations/${name}.png`} alt={name} />
    </Container>
  );
}
