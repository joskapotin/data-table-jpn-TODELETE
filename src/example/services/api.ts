import dataTable from "../mock/dataTable"
import { stall } from "../utilities/helpers"

/**
 * It get datatable param from a fake api
 */
export async function getEmployees() {
  await stall(1500)
  return dataTable()
}
