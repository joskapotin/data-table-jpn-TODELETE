import { ActionTypes } from "./action-types"

export const setCurrentPage = (page: number) => ({
  type: ActionTypes.SET_CURRENT_PAGE,
  payload: page,
})

export const setTotalPages = (totalPages: number) => ({
  type: ActionTypes.SET_TOTAL_PAGES,
  payload: totalPages,
})

export const setPageSize = (pageSize: number) => ({
  type: ActionTypes.SET_PAGE_SIZE,
  payload: pageSize,
})

export const setSortBy = (sortBy: string) => ({
  type: ActionTypes.SET_SORT_BY,
  payload: sortBy,
})

export const setSortDirection = () => ({
  type: ActionTypes.SET_SORT_DIRECTION,
})

export const setFilter = (filter: string) => ({
  type: ActionTypes.SET_FILTER,
  payload: filter,
})

export const setFilterResults = (filterResults: number) => ({
  type: ActionTypes.SET_FILTER_RESULTS,
  payload: filterResults,
})
