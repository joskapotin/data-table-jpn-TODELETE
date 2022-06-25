import actionTypes from "./actionTypes"

type dataTableState = typeof initialState
type dataTableAction = {
  type: keyof typeof actionTypes
  payload: number | string | any[]
}

export const initialState = {
  labels: [],
  entries: [],
  pageSizeOptions: [10, 25, 50, 100],
  currentPage: 1,
  totalPages: 1,
  pageSize: 10,
  sortBy: "",
  sortDirection: "asc",
  filterResults: [],
}

export default function reducer(state: dataTableState, action: dataTableAction) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    case actionTypes.SET_TOTAL_PAGES:
      return { ...state, totalPages: action.payload }
    case actionTypes.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload, currentPage: 1 }
    case actionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload }
    case actionTypes.SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: state.sortDirection === "asc" ? "desc" : "asc",
      }
    case actionTypes.SET_FILTER_RESULTS:
      return { ...state, filterResults: action.payload, currentPage: 1 }
    default:
      return state
  }
}
