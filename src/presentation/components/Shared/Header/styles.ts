import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  gap: 3rem;

  height: 5rem;
  width: 100%;
  
  img {
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;

    height: auto;
  }
`;

export const ApiInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .5rem;

  height: 100%;

  p {
    font-size: 1.125rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors['accent-500']};
  }

  span {
    color: ${({ theme }) => theme.colors['accent-200']};
  }
`

export const TextSkeleton = styled.div`
  height: 1.4rem;
  width: 80%;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors['accent-50']};

  animation: skeleton 1s ease-in-out infinite alternate;
`;