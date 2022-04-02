import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  // grid-template-columns: 1fr;
  grid-gap: 0.25rem;
`;

export const Illustration = styled.img`
  width: 100%;
`;

export const AlfredBaird = styled(Illustration).attrs({
  src: "/images/illustrations/alfred_baird.png",
  alt: "alfred_baird",
})``;

export const AmyJames = styled(Illustration).attrs({
  src: "/images/illustrations/amy_james.png",
  alt: "amy_james",
})``;

export const BenjiFin = styled(Illustration).attrs({
  src: "/images/illustrations/benji_fin.png",
  alt: "benji_fin",
})``;

export const BlueFlowerWood = styled(Illustration).attrs({
  src: "/images/illustrations/blue_flower_wood.png",
  alt: "blue_flower_wood",
})``;

export const CoatesBridge = styled(Illustration).attrs({
  src: "/images/illustrations/coates_bridge.png",
  alt: "coates_bridge",
})``;

export const CrownPub = styled(Illustration).attrs({
  src: "/images/illustrations/crown_pub.png",
  alt: "crown_pub",
})``;

export const ElizabethSmith = styled(Illustration).attrs({
  src: "/images/illustrations/elizabeth_smith.png",
  alt: "elizabeth_smith",
})``;

export const EllaSwan = styled(Illustration).attrs({
  src: "/images/illustrations/ella_swan.png",
  alt: "ella_swan",
})``;

export const ElvanbankSchool = styled(Illustration).attrs({
  src: "/images/illustrations/elvanbank_school.png",
  alt: "elvanbank_school",
})``;

export const GreenParrotCafe = styled(Illustration).attrs({
  src: "/images/illustrations/green_parrot_cafe.png",
  alt: "green_parrot_cafe",
})``;

export const Lion = styled(Illustration).attrs({
  src: "/images/illustrations/lion.png",
  alt: "lion",
})``;

export const LogicMobileShop = styled(Illustration).attrs({
  src: "/images/illustrations/logic_mobile_shop.png",
  alt: "logic_mobile_shop",
})``;

export const MuirLibrary = styled(Illustration).attrs({
  src: "/images/illustrations/muir_library.png",
  alt: "muir_library",
})``;

export const Museum = styled(Illustration).attrs({
  src: "/images/illustrations/museum.png",
  alt: "museum",
})``;

export const PheonixNotes = styled(Illustration).attrs({
  src: "/images/illustrations/pheonix_notes.png",
  alt: "pheonix_notes",
})``;

export const TomTorpy = styled(Illustration).attrs({
  src: "/images/illustrations/tom_torpy.png",
  alt: "tom_torpy",
})``;
