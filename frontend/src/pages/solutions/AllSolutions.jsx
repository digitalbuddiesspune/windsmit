import SolutionPage from '../SolutionPage'
import { allSolutionsCategories } from './allSolutionsCategories'

function AllSolutions() {
  return (
    <SolutionPage
      heroVariant="all-solutions"
      title="All Solutions"
      subtitle="Complete HVAC & BMS solutions for every space."
      intro="Windsmit Air delivers customized air purification and ventilation solutions using advanced technology to ensure clean, safe, and energy-efficient environments. We combine innovation, reliability, and sustainability to create healthier spaces for people and businesses."
      sections={[]}
      solutionCategories={allSolutionsCategories}
    />
  )
}

export default AllSolutions
