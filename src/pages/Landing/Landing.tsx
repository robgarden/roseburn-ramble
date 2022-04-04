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
          Jewels.{" "}
        </Paragraph>
        <Paragraph>
          Here is a set of clues leading you on a ramble around our local area.
          Your job will be to eliminate suspects and locations until you are
          left with the thief and the crime scene.
        </Paragraph>
        {checkExistingGame() ? (
          <>
            <Button onClick={continueExistingGame}>
              Continue game
            </Button>
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
