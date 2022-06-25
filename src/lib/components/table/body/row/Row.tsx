import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "../../../../contexts/DataTableContext"
import type { Entry, Label } from "../../../../types"

type RowProps = {
  entry: Entry
}

export default function Row({ entry }: RowProps) {
  const [{ labels, sortBy }] = useDataTableContext()

  return (
    <tr>
      {labels.map((label: Label) => (
        <td key={`${label.data}-${uuidv4()}`} className={label.data === sortBy ? "current-label" : ""}>
          {entry[label.data]}
        </td>
      ))}
    </tr>
  )
}
