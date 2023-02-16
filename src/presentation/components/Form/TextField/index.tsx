import { InputHTMLAttributes, ReactElement } from 'react';
import { FormLabel } from '@presentation/components';

import { TextFieldError, TextFieldInput, TextFieldInputWrapper, TextFieldWrapper } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  error?: string;
  leftContent?: ReactElement;
}

export function TextField({ name, label, error, leftContent, ...props }: TextFieldProps) {
  return (
    <TextFieldWrapper>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <TextFieldInputWrapper>
        {leftContent}
        <TextFieldInput id={name} name={name} {...props} />
      </TextFieldInputWrapper>
      {error && <TextFieldError>{error}</TextFieldError>}
    </TextFieldWrapper>
  )
}