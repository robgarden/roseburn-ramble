import styled from "styled-components";

import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  background-image: url("/images/frame.png");
  background-repeat: no-repeat, repeat;
  background-size: 100% 100%;
  // padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  min-height: 100%;
  text-align: center;
`;

export const Button = styled(Link)`
  display: block;
  background: ${(props) => props.theme.darkBlue};
  color: white;
  font-weight: 600;
  text-align: center;
  appearance: none;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 20px;
  width: 90%;
  margin-top: 30px;
  z-index: 2;
`;

export const Paragraph = styled.p`
  font-family: "Elegant Typewriter", sans-serif;
  line-height: 150%;
`;

export const MagnifyingGlass = styled.img.attrs({
  src: "/images/magnifying-glass.png",
  alt: "magnifying-glass",
})`
  position: absolute;
  top: 500px;
  left: 50px;
  width: 150px;
  opacity: 0.05;
`;

export const PostageStamp = styled.img.attrs({
  src: "/images/postage-stamp.png",
  alt: "postage-stamp",
})`
  margin-top: 20px;
  width: 100%;
`;

export const TopSecret = styled.img.attrs({
  src: "/images/top-secret.png",
  alt: "top-secret",
})`
  position: absolute;
  top: 300px;
  right: -10px;
  width: 150px;
  opacity: 0.2;
`;
