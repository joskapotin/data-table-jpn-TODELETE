import DataTable from "../lib"
import useAsync from "./hooks/useAsync"
import { getEmployees } from "./services/api"

function Example() {
  const { loading, error, value } = useAsync(getEmployees)

  return (
    <>
      {loading && <div>Loading...</div>}
      {value && <DataTable config={value} />}
      {error && <div>{error}</div>}
    </>
  )
}

export default Example
