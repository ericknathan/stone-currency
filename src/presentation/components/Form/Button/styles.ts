import styled, { css } from "styled-components";

export interface StyledButtonProps {
  variant?: "primary" | "secondary";
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: fit-content;
  padding: 1rem;
  border-radius: 8px;

  box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);

  font-family: ${({ theme }) => theme.fontFamilies.sharonSans};
  font-weight: 500;

  cursor: pointer;
  transition: all 0.1s ease-in-out;
  
  &:not(:disabled):active {
    transform: scale(0.98);
  }

  &:not(:disabled):hover {
    filter: brightness(1.05);
  }

  ${({ variant }) => variant === 'primary' ?
    css`
      background-color: ${({ theme }) => theme.colors['primary-500']};
      color: white;
      border: 1px solid ${({ theme }) => theme.colors['primary-700']};

      &:disabled {
        background-color: ${({ theme }) => theme.colors['accent-200']};
        cursor: not-allowed;
      }
    ` :
    css`
      background-color: transparent;
      color: ${({ theme }) => theme.colors['accent-700']};
      border: 1px solid ${({ theme }) => theme.colors['accent-50']};
    `
  }
`;