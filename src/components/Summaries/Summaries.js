import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import PageNumbers from '../PageNumbers/PageNumbers'
import Summary from '../Summary/Summary'
import arrowBottom from './icons/arrow-bottom.svg'
import filterIcon from './icons/filter-icon.svg'
import './Summaries.scss'

const Summaries = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(null)
  const [summaries, setSummaries] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchSummaries() {
    try {
      setLoading(true)

      const response = await fetch(
        `http://135.181.30.244:27007/api/summaries/?page=${currentPage}`
      )
      const data = await response.json()

      setSummaries(data.results)
      setPageCount(data.page_count)
      setLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchSummaries()
  }, [currentPage])

  useEffect(() => {
    fetchSummaries()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="summaries">
      <div className="line" />
      <h1>
        Мы подобрали <span>451 642</span> резюме
      </h1>
      <div className="text">
        Резюме продавец консультант во Всей Украине
        <span className="block-mobile">
          <span className="color">за все время</span>
          <img src={arrowBottom} alt="arrow bottom" />
        </span>
        {summaries.map((summary) => (
          <Summary key={summary.id} summary={summary} />
        ))}
      </div>

      <PageNumbers
        currentPage={currentPage}
        pageCount={pageCount}
        setCurrentPage={setCurrentPage}
      />

      <img
        src={filterIcon}
        alt="filter icon"
        className="filter-icon"
      />
    </div>
  )
}

export default Summaries
