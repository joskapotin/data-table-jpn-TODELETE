import Head from "./head/Head"
import Body from "./body/Body"

type TableProps = {
  tableId: string
}

export default function Table({ tableId }: TableProps) {
  return (
    <div className="table-responsive">
      <table className="dataTable table table-striped" id={tableId}>
        <Head />
        <Body />
      </table>
    </div>
  )
}
