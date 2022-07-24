import { ChainId } from '@supakawaiidesu/core-sdk'

const THE_GRAPH = 'https://api.thegraph.com'
const NAS_GRAPH = 'https://graph.kkt.one/node'
const HYPER_GRAPH = 'https://q.hg.network'

export const GRAPH_HOST = {
  [ChainId.ETHEREUM]: THE_GRAPH,
  [ChainId.XDAI]: THE_GRAPH,
  [ChainId.MATIC]: THE_GRAPH,
  [ChainId.FANTOM]: THE_GRAPH,
  [ChainId.BSC]: THE_GRAPH,
  [ChainId.AVALANCHE]: THE_GRAPH,
  [ChainId.CELO]: THE_GRAPH,
  [ChainId.ARBITRUM]: THE_GRAPH,
  [ChainId.HARMONY]: 'https://sushi.graph.t.hmny.io',
  [ChainId.OKEX]: HYPER_GRAPH,
  [ChainId.HECO]: HYPER_GRAPH,
  [ChainId.MOONRIVER]: THE_GRAPH,
  [ChainId.TELOS]: THE_GRAPH,
  [ChainId.KOVAN]: THE_GRAPH,
  [ChainId.FUSE]: THE_GRAPH,
  [ChainId.MOONBEAM]: THE_GRAPH,
  [ChainId.OPTIMISM]: THE_GRAPH,
  [ChainId.KAVA]: 'https://pvt.graph.kava.io',
  [ChainId.METIS]: 'https://andromeda.thegraph.metisdevops.link:8000',
  [ChainId.RSK]: 'https://andromeda.thegraph.metisdevops.link:8000',
}

export const TRIDENT = {
  [ChainId.MATIC]: 'matthewlilley/trident-polygon',
  [ChainId.KOVAN]: 'sushiswap/trident-kovan',
  [ChainId.OPTIMISM]: 'olastenberg/trident-optimism',
  [ChainId.KAVA]: 'sushiswap/trident-kava',
  [ChainId.METIS]: 'sushiswap/trident-metis',
}
