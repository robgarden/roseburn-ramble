import emailjs from "@emailjs/browser";

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Illustration } from "../Components/Answers/styles";
import { GameContext } from "../game/GameContext";
import {
  Button,
  Container,
  Heading,
  MainContainer,
  Paragraph,
} from "../styles";

emailjs.init("JKJzP7ivBIWEMdcQk");

const TO_EMAIL = "jackalberrystudio@gmail.com"

export function FinishPage() {
  const [name, setName] = useState<string>();
  const gameContext = useContext(GameContext);
  const navigate = useNavigate();

  function sendMail() {
    emailjs.send("service_htdm5c9", "template_at2wnus", {
      to_name: name,
      to_email: TO_EMAIL,
      reply_to: TO_EMAIL
    });
  }

  useEffect(() => {
    if (!gameContext.game.started) {
      navigate("/");
    }
  }, []);

  function submit() {
    // sendMail()
    navigate('/donation')
  }

  return (
    <MainContainer>
      <Container>
        <Heading>Well done!</Heading>
        <Paragraph>You're a TOP QUALITY detective.</Paragraph>
        <Paragraph>You've solved the case of the missing jewels.</Paragraph>
        <Paragraph>The crime scene and suspect are:</Paragraph>
        <div style={{ display: "flex", width: "100%" }}>
          <Illustration
            src="/images/illustrations/coates_bridge.png"
            alt="coates_bridge"
            style={{ width: "50%", height: "50%" }}
          />
          <Illustration
            src="/images/illustrations/amy_james.png"
            alt="amy_james"
            style={{ width: "50%", height: "50%" }}
          />
        </div>
        <Paragraph>What's your name?</Paragraph>
        <input
          type="text"
          placeholder="Sherlock Holmes"
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "20px" }}
        />
        <Button onClick={submit}>Submit Answers</Button>
      </Container>
    </MainContainer>
  );
}
