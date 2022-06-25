import { useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "../../../contexts/DataTableContext"
import { sortEntries } from "../../../utilities/helpers"
import Row from "./row/Row"

export default function Body() {
  const [{ currentPage, pageSize, sortBy, sortDirection, filterResults }] = useDataTableContext()

  const sortedEntries = useMemo(() => sortEntries({ entries: filterResults, sortBy, sortDirection }), [filterResults, sortBy, sortDirection])
  const paginatedEntries = sortedEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  return (
    <tbody className="table-group-divider">
      {paginatedEntries.map(entry => (
        <Row key={`row-${uuidv4()}`} entry={entry} />
      ))}
    </tbody>
  )
}
