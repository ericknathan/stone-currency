import { useNavigate, useLocation, Navigate } from "react-router-dom";

import { APP_CONSTRAINTS } from "@main/constraints";
import { ICurrencyConverter } from "@main/schemas";
import { calculateCard, calculateMoney, formatMoney } from "@main/utils";

import { useLastCurrencyQuotationQuery } from "@infra/cache/queries";

import { Button } from "@presentation/components";
import { CurrencyConverterSkeleton, CurrencySuccessCardWrapper, InfoWrapper, ResultWrapper } from "./styles";

const defaultCurrency = APP_CONSTRAINTS.DEFAULT_CURRENCY.replace('-', '')

export function CurrencyConverterSuccessCard() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const { data, isLoading } = useLastCurrencyQuotationQuery();
  if(state === null) return (
    <Navigate to="/" />
  );

  const currencyData = data?.response[defaultCurrency];

  const { paymentType, currency, statePercentageTax } = state as ICurrencyConverter;
  const calculateFunction = paymentType === 'money' ? calculateMoney : calculateCard;
  const nowCurrencyValue = Number(currencyData?.bid ?? 0);

  return (
    <CurrencySuccessCardWrapper>
      <Button variant="secondary" onClick={() => navigate(-1)}>
        <img src="/icons/arrow-left-icon.svg" />
        Voltar
      </Button>
      {
        (isLoading || !data) ? (
          <CurrencyConverterSkeleton />
        ) : (
          <>
            <ResultWrapper>
              <h2>O resultado do cálculo é</h2>
              <h3>{formatMoney(
                calculateFunction({
                  currency: Number(currency.replace('.', '').replace(',', '.')),
                  statePercentageTax,
                  nowCurrencyValue
                })
              )}</h3>
            </ResultWrapper>
            <InfoWrapper>
              <p>
                <span>Compra no {paymentType === 'money' ? 'dinheiro' : 'cartão'} e taxa de</span> {statePercentageTax}%
              </p>
              <p>
                <span>Cotação do dólar: </span> $ 1 = {formatMoney(nowCurrencyValue)}
              </p>
            </InfoWrapper>
          </>
        )
      }

    </CurrencySuccessCardWrapper>
  )
}