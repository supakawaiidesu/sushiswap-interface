import { FeeTier, TridentPool } from '../../../services/graph/fetchers/pools'

type FilterSymbolsFunc<T> = (arg0: { original: TridentPool }[], arg1: string[], arg2: T) => any[]

export const filterForSearchQueryAndTWAP: FilterSymbolsFunc<{ searchQuery: string; twapEnabled: boolean }> = (
  rows,
  id,
  filterValue
) => {
  return rows.filter(({ original }) => {
    if (filterValue.twapEnabled && !original.twapEnabled) return false

    // Allow searching for symbol (LINK) or name (chainlink)
    const searchableText = original.assets
      .map((asset) => asset.symbol)
      .concat(original.assets.map((asset) => asset.name))
      .join(' ')
      .toLowerCase()
    return !filterValue.searchQuery.length || searchableText.includes(filterValue.searchQuery.toLowerCase())
  })
}

export const feeTiersFilter: FilterSymbolsFunc<{ feeTiersSelected: FeeTier[] }> = (rows, id, filterValue) => {
  return rows.filter(({ original }) => {
    return !filterValue.feeTiersSelected.length || filterValue.feeTiersSelected.includes(original.swapFeePercent)
  })
}
