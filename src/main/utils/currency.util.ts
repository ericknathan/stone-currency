interface CalculateProps {
  currency: number;
  statePercentageTax: number;
  nowCurrencyValue: number;
}

export function getDecimalPercentage(percentage: number) {
  return 1 + (percentage / 100);
}

export function calculateMoney(data: CalculateProps) {
  const { currency, statePercentageTax, nowCurrencyValue } = data;
  const purchaseIOF = 1.1;

  return (currency * getDecimalPercentage(statePercentageTax)) * (nowCurrencyValue * getDecimalPercentage(purchaseIOF));
}

export function calculateCard(data: CalculateProps) {
  const { currency, statePercentageTax, nowCurrencyValue } = data;
  const purchaseIOF = 6.4;
  
  return (currency * getDecimalPercentage(statePercentageTax) * getDecimalPercentage(purchaseIOF)) * nowCurrencyValue;
}

export function formatMoney(value: number, currency: 'USD' | 'BRL' = 'BRL') {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
  });

  return formatter.format(value);
}