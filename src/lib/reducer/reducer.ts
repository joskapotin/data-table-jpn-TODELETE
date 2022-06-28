import { ActionTypes } from "./action-types"
import type { Action } from "./actions"
import type { DataTableState } from "../types"

export const initialState: DataTableState = {
  labels: [],
  entries: [],
  currentPage: 1,
  totalPages: 0,
  pageSize: 10,
  sortBy: "",
  sortDirection: "asc",
  filter: "",
  filterResults: 0,
}

export default function reducer(state: DataTableState, action: Action) {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case ActionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload }
    case ActionTypes.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload, currentPage: 1 }
    case ActionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload }
    case ActionTypes.SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: state.sortDirection === "asc" ? "desc" : "asc",
      }
    case ActionTypes.SET_FILTER:
      return { ...state, filter: action.payload, currentPage: 1 }
    case ActionTypes.SET_FILTER_RESULTS:
      return { ...state, filterResults: action.payload }
    default:
      return state
  }
}
