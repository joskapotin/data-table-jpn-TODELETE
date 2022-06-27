import { useDataTableContext } from "../../contexts/DataTableContext"
import { setFilter } from "../../reducer/action-creators"

export default function Filter() {
  const [{ filter }, dispatch] = useDataTableContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value))
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
