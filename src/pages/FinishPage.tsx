import emailjs from "@emailjs/browser";

import { useState } from "react";
import {
  Button,
  Container,
  Heading,
  MainContainer,
  Paragraph,
} from "../styles";

emailjs.init("JKJzP7ivBIWEMdcQk");

export function FinishPage() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  function sendMail() {
    emailjs.send("service_htdm5c9", "template_at2wnus", {
      to_name: name,
      to_email: email,
      reply_to: "robgarden@gmail.com",
    });
  }

  return (
    <MainContainer>
      <Container>
        <Heading>Well done!</Heading>
        <Paragraph>You're an expert treasure hunter.</Paragraph>
        <Paragraph>What's your name?</Paragraph>
        <input
          type="text"
          placeholder="Mr/Mrs Smith"
          onChange={(e) => setName(e.target.value)}
        />
        <Paragraph>And you email address?</Paragraph>
        <input
          type="text"
          placeholder="smith@treasurehunter.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={sendMail}>Send me an email</Button>
      </Container>
    </MainContainer>
  );
}
