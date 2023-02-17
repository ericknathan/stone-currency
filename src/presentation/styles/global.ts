import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors['primary-500']};
    outline-offset: 2px;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors['accent-700']};
  }

  body, #root {
    height: 100vh;
    max-width: 100vw;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fontFamilies.default};
    font-weight: 400;
    font-size: 1rem;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: 'grayscale',
  }
  
  @font-face {
    font-family: 'Sharon Sans';
    src: url('/fonts/SharonSans-Medium.otf') format('opentype');
  }

  @keyframes skeleton {
    from {
      filter: brightness(1);
    }
    to {
      filter: brightness(1.1);
    }
  }
`;