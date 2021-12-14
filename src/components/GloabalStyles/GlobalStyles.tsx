import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-main: #f5f5f5;
    --font-main: #222;
    --gray-cc: #ccc;
    --pink: #f99;
    --pink-bright: #f66;
  }

  * {
    box-sizing: border-box;  
  }

  html {
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }

  body {
    color: var(--font-main);
  }
`;
