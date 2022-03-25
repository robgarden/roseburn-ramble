import {
  Container,
  TopSecret,
  Paragraph,
  MagnifyingGlass,
  MainContainer,
  PostageStamp,
} from "../../styles";
import { steps } from "../../constants/steps";
import { Button } from "../../styles";

export function Landing() {
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
        {/* <Map /> */}
        <Button to={steps[0].id}>Get started</Button>
      </Container>
    </MainContainer>
  );
}
