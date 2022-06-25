import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"
import { useDataTableContext } from "../../../../contexts/DataTableContext"

export default function Row({ entry }) {
  const [{ labels, sortBy }] = useDataTableContext()

  return (
    <tr>
      {labels.map(label => (
        <td key={`${label.data}-${uuidv4()}`} className={label.data === sortBy ? "current-label" : ""}>
          {entry[label.data]}
        </td>
      ))}
    </tr>
  )
}

Row.propTypes = {
  entry: PropTypes.objectOf(PropTypes.string).isRequired,
}
