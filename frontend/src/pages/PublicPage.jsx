import PortfolioRenderer from '../portfolio/PortfolioRenderer'
import { defaultPortfolio } from '../portfolio/defaultData'

export default function PublicPage() {
  return <PortfolioRenderer data={defaultPortfolio} />
}
