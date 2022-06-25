import PropTypes from "prop-types"
import Head from "./head/Head"
import Body from "./body/Body"

export default function Table({ tableId }) {
  return (
    <div className="table-responsive">
      <table className="dataTable table table-striped" id={tableId}>
        <Head />
        <Body />
      </table>
    </div>
  )
}

Table.propTypes = {
  tableId: PropTypes.string.isRequired,
}
