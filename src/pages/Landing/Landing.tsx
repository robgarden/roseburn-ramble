import {
  Container,
  TopSecret,
  Paragraph,
  MagnifyingGlass,
  MainContainer,
  PostageStamp,
  SecondaryButton,
  Button,
} from "../../styles";
import { steps } from "../../constants/steps";
import { NotesText } from "./styles";
import { checkExistingGame } from "../../game/helpers";
import { useContext } from "react";
import { GameContext } from "../../game/GameContext";
import { useNavigate } from "react-router-dom";

export function Landing() {
  const gameContext = useContext(GameContext);
  const navigate = useNavigate();

  function startGame() {
    gameContext.startGame();
    navigate(`/${steps[0].id}`);
  }

  function continueExistingGame() {
    const game = gameContext.loadGame();
    if (game) {
      const nextIndex = game.completedSteps.length;
      const nextStep = steps[nextIndex];
      if (nextStep) {
        navigate(`/${nextStep.id}`);
      } else {
        navigate(`/finish`);
      }
    }
  }

  return (
    <MainContainer>
      <Container>
        <TopSecret />
        <MagnifyingGlass />
        <PostageStamp />
        <Paragraph style={{ marginTop: "30px" }}>
          <strong>
            Roseburn Primary School needs YOU to help raise funds for their
            PLAYGROUND.
          </strong>
        </Paragraph>
        <Paragraph>
          <strong>The Roseburn Detective Agency</strong> is looking for TOP
          QUALITY junior detectives to help solve the case of The Missing
          Jewels.
        </Paragraph>
        <Paragraph>
          Here is a set of clues for you to follow. Your mission is to use the
          answers to the clues to eliminate innocent suspects and empty hiding
          places. Solve all the clues and you will be left with the thief's
          identity and where the jewels are hidden!
        </Paragraph>
        {checkExistingGame() ? (
          <>
            <Button onClick={continueExistingGame}>Continue game</Button>
            <span style={{ marginTop: "10px" }}>or</span>
            <SecondaryButton onClick={startGame}>
              Start a new game
            </SecondaryButton>
          </>
        ) : (
          <Button onClick={startGame}>Start</Button>
        )}
        <NotesText>
          <em>
            * This website may ask for permission for your location to plot your
            treasure hunt as you walk. You can deny if you do not want this
            feature.
          </em>
        </NotesText>
      </Container>
    </MainContainer>
  );
}
