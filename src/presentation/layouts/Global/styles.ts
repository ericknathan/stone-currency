import styled from 'styled-components';

export const GlobalLayoutWrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 4rem;  

  height: 100%;
  padding: 4rem;

  background-image: url('/images/dollars-background-mask.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
`;