import { useLastCurrencyQuotationQuery } from "@infra/cache/queries";
import { formatDate, formatTime } from "@main/utils"
import { ApiInfoWrapper, HeaderWrapper, TextSkeleton } from "./styles";

export function Header() {
  const { data, isLoading } = useLastCurrencyQuotationQuery();

  const currencyDate = new Date(data?.requestTimestamp ?? Date.now());
  const formattedDate = formatDate(currencyDate);
  const formattedTime = formatTime(currencyDate);
  
  return (
    <HeaderWrapper>
      <img src="/icons/stone-currency.svg" alt="Tipografia 'Stone Currency' simbolizando o logotipo da marca" />
      <ApiInfoWrapper>
        {
          isLoading ? (
            <TextSkeleton data-testid="skeleton" />
          ) : (
            <p>{formattedDate} | {formattedTime} UTC</p>
          )
        }
        <span>Dados de câmbio disponibilizados pela Morningstar.</span>
      </ApiInfoWrapper>
    </HeaderWrapper>
  )
}