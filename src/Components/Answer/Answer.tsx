import { Illustration } from "../Answers/styles";
import { Container } from "./styles";

interface AnswerProps {
  name: string;
  onClick(): void;
  complete?: boolean;
}

export function Answer(props: AnswerProps) {
  const { name, onClick, complete = false } = props;

  return (
    <Container complete={complete} role="button" onClick={onClick}>
      {complete && (
        <svg
          className="w-6 h-6"
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
      <Illustration src={`/images/illustrations/${name}.png`} alt={name} />
    </Container>
  );
}
