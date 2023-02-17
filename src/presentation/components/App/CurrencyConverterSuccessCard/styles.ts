import styled from "styled-components";

export const CurrencySuccessCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 22.5rem;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;

  h2 {
    color: ${({ theme }) => theme.colors['accent-500']};

    font-family: ${({ theme }) => theme.fontFamilies.sharonSans};
    font-size: 1.25rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors['primary-500']};

    font-family: ${({ theme }) => theme.fontFamilies.sharonSans};
    font-size: 4rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6rem;

  color: ${({ theme }) => theme.colors['accent-300']};

  span {
    font-weight: 500;
  }
`;

export const CurrencyConverterSkeleton = styled.div`
  width: 22.5rem;
  height: 12rem;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors['accent-50']};

  animation: skeleton 1s ease-in-out infinite alternate;
`