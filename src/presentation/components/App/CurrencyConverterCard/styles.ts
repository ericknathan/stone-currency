import styled from "styled-components";

export const CurrencyCardWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 22.5rem;
`;

export const CurrencyCardInputValues = styled.div`
  display: flex;
  gap: 1.5rem;

  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;