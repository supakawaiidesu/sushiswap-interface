import { Currency, CurrencyAmount } from '@supakawaiidesu/core-sdk'

export interface Assets {
  asset: CurrencyAmount<Currency>
  strategy?: { token: string; apy: number; targetPercentage: number; utilization: number }
}
