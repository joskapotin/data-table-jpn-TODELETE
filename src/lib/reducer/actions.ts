import type { ActionTypes } from "./action-types"

export interface ISetCurrentPage {
  type: ActionTypes.SET_CURRENT_PAGE
  payload: number
}

export interface ISetTotalPages {
  type: ActionTypes.SET_TOTAL_PAGES
  payload: number
}

export interface ISetPageSize {
  type: ActionTypes.SET_PAGE_SIZE
  payload: number
}

export interface ISetSortBy {
  type: ActionTypes.SET_SORT_BY
  payload: string
}

export interface ISetSortDirection {
  type: ActionTypes.SET_SORT_DIRECTION
}

export interface ISetFilter {
  type: ActionTypes.SET_FILTER
  payload: string
}

export interface ISetFilterResults {
  type: ActionTypes.SET_FILTER_RESULTS
  payload: number
}

export type Action = ISetCurrentPage | ISetTotalPages | ISetPageSize | ISetSortBy | ISetSortDirection | ISetFilter | ISetFilterResults
