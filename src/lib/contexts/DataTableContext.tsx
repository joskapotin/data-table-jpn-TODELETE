import { createContext, useContext, useReducer, useMemo } from "react"
import reducer, { initialState } from "../reducer/reducer"
import type { DataTableState, Config } from "../types"

type DataTableContextProviderProps = {
  config: Config
  children: React.ReactNode
}

const DataTableContext = createContext<DataTableState | null>(null)

export function useDataTableContext() {
  return useContext(DataTableContext)
}

export default function DataTableContextProvider({ config, children }: DataTableContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...config })
  const value = useMemo(() => [state, dispatch], [state, dispatch])

  return <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
}
