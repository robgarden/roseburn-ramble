import {
  Container,
  StartButton,
  RoseburnLogo,
  RoseburnTitle,
  Blurb,
} from "./styles";
import { Map } from "../../Components/Map";
import { steps } from "../../constants/steps";

export function Landing() {
  return (
    <Container>
      <RoseburnLogo />
      <RoseburnTitle>Roseburn Primary School</RoseburnTitle>
      <Blurb>Some text describing scavenger hunt</Blurb>
      <Map />
      <StartButton to={steps[0].id}>Start</StartButton>
    </Container>
  );
}
