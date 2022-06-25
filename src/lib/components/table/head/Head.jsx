import { useMemo } from "react"
import { v4 as uuidv4 } from "uuid"
import { useDataTableContext } from "../../../contexts/DataTableContext"
import Label from "./label/Label"

export default function Head() {
  const [{ labels }] = useDataTableContext()

  return useMemo(
    () => (
      <thead>
        <tr>
          {labels.map(label => (
            <Label key={`label-${uuidv4()}`} label={label} />
          ))}
        </tr>
      </thead>
    ),
    [labels]
  )
}
