import './PageNumbers.scss'

const PageNumbers = (props) => {
  const { currentPage, pageCount, setCurrentPage } = props

  const pages = []

  if (
    currentPage === 1 ||
    currentPage === 2 ||
    currentPage === pageCount ||
    currentPage === pageCount - 1 ||
    currentPage === pageCount - 2
  ) {
    pages.push(1, 2, '...', pageCount - 2, pageCount - 1, pageCount)
  } else {
    pages.push(1, '...', currentPage, '...', pageCount - 1, pageCount)
  }

  return (
    <div className="page-numbers">
      <button
        className="page-num btn"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        {'<'}
      </button>
      {pages.map((page, index) =>
        page === '...' ? (
          <span className="page-num dots" key={index}>
            {page}
          </span>
        ) : page === currentPage ? (
          <span
            className="page-num active"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </span>
        ) : (
          <span
            className="page-num"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </span>
        )
      )}

      <button
        className="page-num btn"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pageCount}
      >
        {'>'}
      </button>
    </div>
  )
}

export default PageNumbers
