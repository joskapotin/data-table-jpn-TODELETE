import { useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "../../../contexts/DataTableContext"
import Column from "./Column/Column"
import type { Label } from "../../../types"

export default function Head() {
  const [{ labels }] = useDataTableContext()

  return useMemo(
    () => (
      <thead>
        <tr>
          {labels.map((label: Label) => (
            <Column key={`label-${uuidv4()}`} label={label} />
          ))}
        </tr>
      </thead>
    ),
    [labels]
  )
}
