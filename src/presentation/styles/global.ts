import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  *:focus {
    outline: 2px solid ${({ theme }) => theme['primary-500']};
    outline-offset: 2px;
  }

  body {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme['accent-700']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: 'grayscale',
  }
`;