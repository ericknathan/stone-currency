import styled from "styled-components";

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .625rem;

  width: 100%;
`;

export const TextFieldInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: .3rem;

  border: 1px solid ${({ theme }) => theme.colors['accent-50']};
  border-radius: 4px;
  padding: 0 1rem;

  color: ${({ theme }) => theme.colors['accent-700']};
  box-shadow: 0px 8px 4px rgba(13, 17, 27, 0.08);

  font-family: ${({ theme }) => theme.fontFamilies.sharonSans};

  overflow: hidden;

  &:focus-within {
    outline: 2px solid ${({ theme }) => theme.colors['primary-500']};
  }
`;

export const TextFieldInput = styled.input`
  width: 100%;

  padding: 1rem 0;

  color: inherit;
  background-color: inherit;

  font-family: inherit;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['accent-200']};
  }
`;

export const TextFieldError = styled.span`
  color: ${({ theme }) => theme.colors['red-500']};
  font-size: .875rem;
`;