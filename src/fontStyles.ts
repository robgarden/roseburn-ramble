import { createGlobalStyle } from "styled-components";
import ElegantTypewriterLight from './fonts/elegant_typewriter/ELEGANT_TYPEWRITER_Light.ttf'
import ElegantTypewriterRegular from './fonts/elegant_typewriter/ELEGANT_TYPEWRITER_Regular.ttf'
import ElegantTypewriterBold from './fonts/elegant_typewriter/ELEGANT_TYPEWRITER_Bold.ttf'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Elegant Typewriter';
    src: url(${ElegantTypewriterLight}) format('truetype');
    font-weight: light;
  }
  @font-face {
    font-family: 'Elegant Typewriter';
    src: url(${ElegantTypewriterRegular}) format('truetype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Elegant Typewriter';
    src: url(${ElegantTypewriterBold}) format('truetype');
    font-weight: bold;
  }
`;

export default FontStyles;
