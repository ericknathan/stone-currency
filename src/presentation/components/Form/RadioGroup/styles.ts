import styled, { css } from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

export const RadioGroupInputsWrapper = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ orientation }) => orientation === 'vertical' && css`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const RadioGroupInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
`;

export const RadioGroupInputItem = styled(RadioGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;
  border-radius: 999px;
  
  background-color: transparent;
  outline: 2px solid ${({ theme }) => theme.colors['accent-200']};
  outline-offset: -2px;

  &[data-state="checked"], &:focus {
    outline-offset: -2px;
    outline-color: ${({ theme }) => theme.colors['primary-700']};
  }
`;

export const RadioGroupInputIndicator = styled(RadioGroup.Indicator)`
  width: 60%;
  height: 60%;
  border-radius: 999px;

  background-color: ${({ theme }) => theme.colors['primary-700']};
`;

export const RadioGroupInputLabel = styled.label`
  font-family: ${({ theme }) => theme.fontFamilies.circularStd};
`;