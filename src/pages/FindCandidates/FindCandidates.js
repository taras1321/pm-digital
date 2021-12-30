import Header from '../../components/Header/Header'
import Promo from '../../components/Promo/Promo'
import Summaries from '../../components/Summaries/Summaries'
import Filters from '../../components/Filters/Filters'
import './FindCandidates.scss'

const FindCandidates = () => {
  return (
    <div className="find-candidates">
      <Header />
      <Promo withText={false} />
      <div className="container">
        <div className="summaries-filter-wrapper">
          <Summaries />
          <Filters />
        </div>
      </div>
    </div>
  )
}

export default FindCandidates
