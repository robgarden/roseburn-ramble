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
        <Paragraph>Our playground now is a rather sad sight</Paragraph>
        <Paragraph>Can you give a bit extra to help make things right?</Paragraph>
        <img
          src="/images/playground.jpeg"
          alt="playground"
          style={{ width: "100%", borderRadius: "2px", marginTop: "10px" }}
        />
        <StyledLink as={"a"} href={DONATION_LINK} target="_blank" style={{ marginTop: "50px"}}>
          Donate
        </StyledLink>
      </Container>
    </MainContainer>
  );
}
