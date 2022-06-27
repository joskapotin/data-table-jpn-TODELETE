import { useMemo } from "react"
import { useDataTableContext } from "../../../../contexts/DataTableContext"
import { setSortBy, setSortDirection } from "../../../../reducer/action-creators"
import type { Label } from "../../../../types"

type ColumnProps = {
  label: Label
}

export default function Column({ label }: ColumnProps) {
  const [{ sortBy, sortDirection }, dispatch] = useDataTableContext()

  const handleClick = (labelData: string) => {
    if (labelData === sortBy) dispatch(setSortDirection())
    else dispatch(setSortBy(labelData))
  }

  const getLabelClassName = (labelData: string) => {
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
