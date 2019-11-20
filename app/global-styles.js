import { createGlobalStyle } from 'styled-components';

// Colors
export const colors = {
  primaryColor: '#ff681a',
  secondaryColor: '#eeeeee',
  whiteColor: '#fff',
  blackColor: '#000'
}

//Fonts
export const fontFamily = "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif";

//FontSizes
export const fontSizes = {
  fontSizeSmall: '12px',
  fontSizeBase: '14px',
  fontSizeLarge: '16px'
}

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${fontFamily};
    font-size: ${fontSizes.fontSizeBase};
  }

  a:hover {
    color: ${colors.primaryColor};
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`;
