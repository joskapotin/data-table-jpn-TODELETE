import { useState, useEffect } from "react"
import { useDataTableContext } from "../../contexts/DataTableContext"
import { setFilterResults } from "../../reducer/actionCreators"
import { filterEntries } from "../../utilities/helpers"

export default function Filter() {
  const [{ entries }, dispatch] = useDataTableContext()
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const filteredData = filterEntries(entries, filter)
    dispatch(setFilterResults(filteredData))
  }, [entries, filter, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  return (
    <label htmlFor="search" id="dataTable-search">
      Search:{" "}
      <input
        name="search"
        className="form-control d-inline-block w-auto"
        aria-label="search"
        aria-describedby="dataTable-search"
        type="search"
        onChange={handleChange}
        value={filter}
      />
    </label>
  )
}
