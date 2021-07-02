import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lora';
    src: url('../../assets/fonts/Lora-VariableFont_wght.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'Lora Italic';
    src: url('../../assets/fonts/Lora-Italic-VariableFont_wght.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #fffaf2;
    font-family: 'Lora';
    font-size: 16px;
    color: #241C1C;
  }
`
