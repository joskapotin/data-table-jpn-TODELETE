import { useDataTableContext } from "../../contexts/DataTableContext"

export default function Info() {
  const [{ entries, currentPage, totalPages, pageSize, filterResults }] = useDataTableContext()

  const totalEntries = entries.length
  const totalRow = filterResults
  const isFilter = totalRow !== totalEntries
  const firstRow = totalRow > 0 ? (currentPage - 1) * pageSize + 1 : 0
  const lastRow = pageSize > totalRow || currentPage === totalPages ? totalRow : currentPage * pageSize

  return (
    <p className="dataTable_info" role="status" aria-live="polite">
      Showing {firstRow} to {lastRow} of {totalRow} entries {isFilter && <span>(filtered from {totalEntries} total entries)</span>}
    </p>
  )
}
