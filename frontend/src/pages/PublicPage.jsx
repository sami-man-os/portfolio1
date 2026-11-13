import PortfolioRenderer from '../portfolio/PortfolioRenderer'
import SkillStage from '../portfolio/SkillStage'
import { defaultPortfolio } from '../portfolio/defaultData'

const renderSkillsStage = (props) => <SkillStage {...props} />

export default function PublicPage() {
  return <PortfolioRenderer data={defaultPortfolio} renderSkillsStage={renderSkillsStage} />
}