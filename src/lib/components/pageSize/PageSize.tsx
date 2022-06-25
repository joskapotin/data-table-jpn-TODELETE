import { useDataTableContext } from "../../contexts/DataTableContext"
import { setPageSize } from "../../reducer/actionCreators"

export default function PageSize() {
  const [{ pageSize, pageSizeOptions }, dispatch] = useDataTableContext()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageSize(parseInt(e.target.value, 10)))
  }

  return (
    <label htmlFor="page-size">
      show{" "}
      <select className="form-select d-inline-block w-auto" aria-label="show entries" name="page-size" onChange={handleChange} value={pageSize}>
        {pageSizeOptions.map((option: number) => (
          <option key={`option-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      entries
    </label>
  )
}
