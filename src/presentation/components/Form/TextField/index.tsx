import { InputHTMLAttributes, ReactElement } from 'react';
import { FormLabel } from '@presentation/components';

import { TextFieldInput, TextFieldInputWrapper, TextFieldWrapper } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  leftContent?: ReactElement;
}

export function TextField({ name, label, leftContent, ...props }: TextFieldProps) {
  return (
    <TextFieldWrapper>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <TextFieldInputWrapper>
        {leftContent}
        <TextFieldInput id={name} name={name} {...props} />
      </TextFieldInputWrapper>
    </TextFieldWrapper>
  )
}