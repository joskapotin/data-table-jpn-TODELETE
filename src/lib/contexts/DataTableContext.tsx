import { createContext, useContext, useReducer, useMemo } from "react"
import reducer, { initialState } from "../reducer/reducer"
import type { DataTableState, Config, DataTableAction } from "../types"

type DataTableContextType = [state: DataTableState, dispatch: React.Dispatch<DataTableAction>]

type DataTableContextProviderProps = {
  config: Config
  children: React.ReactNode
}

const DataTableContext = createContext<DataTableContextType>([initialState, () => {}])

export default function DataTableContextProvider({ config, children }: DataTableContextProviderProps) {
  const init: DataTableState = { ...initialState, ...config }
  const [state, dispatch] = useReducer(reducer, init)
  const value: DataTableContextType = useMemo(() => [state, dispatch], [state, dispatch])

  return <DataTableContext.Provider value={value}>{children}</DataTableContext.Provider>
}

export function useDataTableContext() {
  return useContext(DataTableContext)
}
