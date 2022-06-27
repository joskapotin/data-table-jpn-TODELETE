import { useEffect, useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "../../../contexts/DataTableContext"
import { setFilterResults } from "../../../reducer/action-creators"
import { sortEntries, filterEntries } from "../../../utilities/helpers"
import Row from "./row/Row"

export default function Body() {
  const [{ entries, currentPage, pageSize, sortBy, sortDirection, filter }, dispatch] = useDataTableContext()

  const filteredEntries = useMemo(() => filterEntries(entries, filter), [entries, filter])
  const sortedEntries = useMemo(() => sortEntries({ entries: filteredEntries, sortBy, sortDirection }), [filteredEntries, sortBy, sortDirection])
  const paginatedEntries = sortedEntries.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  useEffect(() => {
    dispatch(setFilterResults(filteredEntries.length))
  }, [filteredEntries.length, dispatch])

  return (
    <tbody className="table-group-divider">
      {paginatedEntries.map(entry => (
        <Row key={`row-${uuidv4()}`} entry={entry} />
      ))}
    </tbody>
  )
}
