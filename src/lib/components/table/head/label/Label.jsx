import { useMemo } from "react"
import PropTypes from "prop-types"
import { useDataTableContext } from "../../../../contexts/DataTableContext"
import { setSortBy, setSortDirection } from "../../../../reducer/actionCreators"

export default function Label({ label }) {
  const [{ sortBy, sortDirection }, dispatch] = useDataTableContext()

  const handleClick = labelData => {
    if (labelData === sortBy) dispatch(setSortDirection())
    else dispatch(setSortBy(labelData))
  }

  const getLabelClassName = labelData => {
    if (labelData === sortBy) {
      if (sortDirection === "asc") return "sorting sorting_asc"
      return "sorting sorting_desc"
    }
    return "sorting"
  }

  return useMemo(
    () => (
      <th onClick={() => handleClick(label.data)} className={getLabelClassName(label.data)}>
        {label.title}
      </th>
    ),
    [sortBy, sortDirection]
  )
}

Label.propTypes = {
  label: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  }).isRequired,
}
