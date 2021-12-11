import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  :root {
    --bg-main: #f5f5f5;
    --font-main: #222;
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
`