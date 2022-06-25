import { v4 as uuidv4 } from "uuid"
import DataTableContextProvider from "./contexts/DataTableContext"
import PageSize from "./components/pageSize/PageSize"
import Filter from "./components/filter/Filter"
import Table from "./components/table/Table"
import Info from "./components/info/Info"
import Paginate from "./components/paginate/Paginate"
import "./index.css"
import type { Config } from "./types"

type DataTableProps = {
  config: Config
}

export default function DataTable({ config }: DataTableProps) {
  /* The table need an unique id to be identify from the pagination. For accessibility purposes */
  const tableId = uuidv4()

  return (
    <DataTableContextProvider config={config}>
      <div className="dataTable_wrapper d-grid">
        <div className="dataTable_header mt-3 mb-2 d-flex justify-content-between align-items-center">
          <PageSize />
          <Filter />
        </div>
        <Table tableId={tableId} />
        <div className="dataTable_footer mt-3 mb-2 d-flex justify-content-between">
          <Info />
          <Paginate tableId={tableId} />
        </div>
      </div>
    </DataTableContextProvider>
  )
}
