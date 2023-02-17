import { FormLabel } from '@presentation/components';
import { RadioProps } from '@radix-ui/react-radio-group';

import { RadioGroupInput, RadioGroupInputIndicator, RadioGroupInputItem, RadioGroupInputLabel, RadioGroupInputsWrapper, RadioGroupWrapper } from './styles';

interface RadioGroupProps extends Omit<RadioProps, 'onChange'> {
  name?: string;
  label?: string;
  orientation?: 'vertical' | 'horizontal';
  options: {
    label: string;
    value: string;
  }[];
  onChange?: (value: string) => void;
}

export function RadioGroup({ name, label, options, orientation = 'horizontal', onChange, ...props }: RadioGroupProps) {
  return (
    <RadioGroupWrapper>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <RadioGroupInputsWrapper
        defaultValue={options[0].value}
        aria-label={label}
        orientation={orientation}
        onValueChange={onChange}
      >
        {options.map(option => (
          <RadioGroupInput key={option.value}>
            <RadioGroupInputItem {...props} value={option.value} id={option.value}>
              <RadioGroupInputIndicator  />
            </RadioGroupInputItem>
            <RadioGroupInputLabel htmlFor={option.value}>
              {option.label}
            </RadioGroupInputLabel>
          </RadioGroupInput>
        ))}
      </RadioGroupInputsWrapper>
    </RadioGroupWrapper>
  )
}