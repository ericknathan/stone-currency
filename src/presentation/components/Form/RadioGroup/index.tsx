import { FormLabel } from '@presentation/components';
import { RadioProps } from '@radix-ui/react-radio-group';

import { RadioGroupInput, RadioGroupInputIndicator, RadioGroupInputItem, RadioGroupInputLabel, RadioGroupInputsWrapper, RadioGroupWrapper } from './styles';

interface RadioGroupProps extends RadioProps {
  name: string;
  label?: string;
  orientation?: 'vertical' | 'horizontal';
  options: {
    label: string;
    value: string;
  }[]
}

export function RadioGroup({ name, label, options, orientation = 'horizontal', ...props }: RadioGroupProps) {
  return (
    <RadioGroupWrapper>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <RadioGroupInputsWrapper defaultValue={options[0].value} aria-label={label} orientation={orientation}>
        {options.map(option => (
          <RadioGroupInput>
            <RadioGroupInputItem {...props} value={option.value} id={option.value}>
              <RadioGroupInputIndicator />
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