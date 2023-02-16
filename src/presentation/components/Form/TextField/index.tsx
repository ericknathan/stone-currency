import { InputHTMLAttributes, ReactElement } from 'react';
import { FormLabel } from '@presentation/components';
import { UseFormRegisterReturn } from 'react-hook-form';

import { TextFieldError, TextFieldInput, TextFieldInputWrapper, TextFieldWrapper } from './styles';

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  error?: string;
  leftContent?: ReactElement;
  register?: UseFormRegisterReturn;
}

export function TextField({ name, label, error, leftContent, register, ...props }: TextFieldProps) {
  return (
    <TextFieldWrapper>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <TextFieldInputWrapper>
        {leftContent}
        <TextFieldInput id={name} name={name} {...props} {...register}  />
      </TextFieldInputWrapper>
      {error && <TextFieldError>{error}</TextFieldError>}
    </TextFieldWrapper>
  )
}