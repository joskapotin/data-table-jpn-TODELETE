import { createContext, useContext, useReducer, useMemo } from "react"
import PropTypes from "prop-types"
import reducer, { initialState } from "../reducer/reducer"

const DataTableContext = createContext()

export function useDataTableContext() {
  return useContext(DataTableContext)
}

export default function DataTableContextProvider({ dataTable, children }) {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...dataTable })
  const value = useMemo(() => [state, dispatch], [state, dispatch])

  return <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
}

DataTableContextProvider.propTypes = {
  dataTable: PropTypes.shape({
    dataTable: PropTypes.shape({
      labels: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          data: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
      entries: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
      pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
      sortBy: PropTypes.string,
      sortDirection: PropTypes.string,
    }),
  }),
  children: PropTypes.node.isRequired,
}

DataTableContextProvider.defaultProps = {
  dataTable: {},
}
