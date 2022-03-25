import {
  Container,
  StartButton,
  TopSecret,
  RoseburnArtwork,
  Paragraph,
  MagnifyingGlass,
  MainContainer,
  PostageStamp,
} from "./styles";
// import { Map } from "../../Components/Map";
import { steps } from "../../constants/steps";

export function Landing() {
  return (
    <MainContainer>
      <Container>
        <TopSecret />
        <MagnifyingGlass />
        {/* <RoseburnArtwork /> */}
        <PostageStamp />
        <Paragraph>
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
        {/* <Map /> */}
        <StartButton to={steps[0].id}>Get started</StartButton>
      </Container>
    </MainContainer>
  );
}
