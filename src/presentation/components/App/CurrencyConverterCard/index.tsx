import { useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

import { RadioGroup, TextField, Button } from '@presentation/components';
import { CurrencyCardInputValues, CurrencyCardWrapper } from './styles';
import { currencyConverterSchema, ICurrencyConverter } from '@main/schemas';
import { normalizeCurrency } from '@main/utils';

export function CurrencyConverterCard() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue
  } = useForm<ICurrencyConverter>({
    resolver: zodResolver(currencyConverterSchema),
  });
  
  const navigate = useNavigate();

  function submitCurrencyForm(data: ICurrencyConverter) {
    navigate('/calculate', {
      state: data
    })
  }

  const isSubmitButtonDisabled = !isValid;

  return (
    <CurrencyCardWrapper onSubmit={handleSubmit(submitCurrencyForm)}>
      <CurrencyCardInputValues>
        <TextField
          label="Dólar"
          placeholder="1,00"
          type="string"
          min={0}
          leftContent={<span>$</span>}
          error={errors.currency?.message ?? undefined}
          register={register('currency', {
            onChange: (event) => {
              const { value } = event.target;

              if(value === '0,0') setValue('currency', '');
              else setValue('currency', normalizeCurrency(value));
            }
          })}
        />
        <TextField
          label="Taxa do Estado"
          type="number"
          min={0}
          max={100}
          step={0.1}
          placeholder="0 %"
          error={errors.statePercentageTax?.message ?? undefined}
          register={register('statePercentageTax', {
            valueAsNumber: true,
          })}
        />
      </CurrencyCardInputValues>

      <RadioGroup
        label="Tipo de compra"
        required
        options={[
          { label: 'Dinheiro', value: 'money' },
          { label: 'Cartão', value: 'card' },
        ]}
        onChange={(type) => setValue('paymentType', type as ICurrencyConverter['paymentType'])}
      />

      <Button disabled={isSubmitButtonDisabled}>
        <img src="/icons/transfer-icon.svg" />
        Converter
      </Button>
    </CurrencyCardWrapper>
  )
}