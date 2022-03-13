import styled from "styled-components";

export const StyledMap = styled.img.attrs({
  src: "/images/map.jpeg",
  alt: "map",
})`
  width: 100%;
`;

export function Map() {
  return <StyledMap />;
}
