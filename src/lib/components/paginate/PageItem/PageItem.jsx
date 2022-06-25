import PropTypes from "prop-types"
import { useDataTableContext } from "../../../contexts/DataTableContext"
import { setCurrentPage } from "../../../reducer/actionCreators"

export default function PageItem({ tableId, index, text }) {
  const [{ currentPage, totalPages }, dispatch] = useDataTableContext()

  const disabled = (currentPage === 1 && index === 0) || (currentPage === totalPages && index === totalPages + 1) || totalPages < 2
  const active = currentPage === index
  const page = () => {
    switch (index) {
      case 0:
        return currentPage - 1
      case totalPages + 1:
        return currentPage + 1
      default:
        return index
    }
  }

  const handleClick = newPage => {
    dispatch(setCurrentPage(newPage))
  }

  return (
    <li className="page-item">
      <button
        type="button"
        className={`page-link ${active && "active"} ${disabled && "disabled"}`}
        aria-controls={tableId}
        onClick={() => handleClick(page())}
        disabled={disabled}
      >
        {text}
      </button>
    </li>
  )
}

PageItem.propTypes = {
  tableId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}
