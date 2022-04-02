import {
  Container,
  Heading,
  MainContainer,
  Paragraph,
  StyledLink,
} from "../styles";

const DONATION_LINK = "https://www.peoplesfundraising.com/donation/playground";

export function DonationPage() {
  return (
    <MainContainer>
      <Container>
        <Heading>One more thing</Heading>
        <Paragraph>As you can see, there's no playground in sight</Paragraph>
        <Paragraph>An extra donation would help with our plight!</Paragraph>
        <img
          src="/images/playground.jpeg"
          alt="playground"
          style={{ width: "100%", borderRadius: "2px", marginTop: "30px" }}
        />
        <StyledLink as={"a"} href={DONATION_LINK} target="_blank" style={{ marginTop: "50px"}}>
          Donate
        </StyledLink>
      </Container>
    </MainContainer>
  );
}
