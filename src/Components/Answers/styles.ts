import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.25rem;
`;

export const Illustration = styled.img.attrs({
  alt: "illustation",
})`
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

export const CrownPub = styled(Illustration).attrs({
  src: "/images/illustrations/crown_pub.png",
  alt: "crown_pub",
})``;

export const EllaSwan = styled(Illustration).attrs({
  src: "/images/illustrations/ella_swan.png",
  alt: "ella_swan",
})``;

export const MuirLibrary = styled(Illustration).attrs({
  src: "/images/illustrations/muir_library.png",
  alt: "muir_library",
})``;

export const PheonixNotes = styled(Illustration).attrs({
  src: "/images/illustrations/pheonix_notes.png",
  alt: "pheonix_notes",
})``;

export const TomTorpy = styled(Illustration).attrs({
  src: "/images/illustrations/tom_torpy.png",
  alt: "tom_torpy",
})``;
