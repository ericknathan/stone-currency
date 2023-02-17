export function normalizeCurrency(value: string) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    currency: 'USD',
  });

  const normalizedValue = value.replace(/\D/g, '');
  const number = Number(normalizedValue) / 100;

  return formatter.format(number);
}
