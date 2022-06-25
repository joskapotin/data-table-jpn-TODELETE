import actionTypes from "./actionTypes"

export const setCurrentPage = (page: number) => ({
  type: actionTypes.SET_CURRENT_PAGE,
  payload: page,
})

export const setTotalPages = (totalPages: number) => ({
  type: actionTypes.SET_TOTAL_PAGES,
  payload: totalPages,
})

export const setPageSize = (pageSize: number) => ({
  type: actionTypes.SET_PAGE_SIZE,
  payload: pageSize,
})

export const setSortBy = (sortBy: string) => ({
  type: actionTypes.SET_SORT_BY,
  payload: sortBy,
})

export const setSortDirection = () => ({
  type: actionTypes.SET_SORT_DIRECTION,
})

export const setFilterResults = (filterResults: any[]) => ({
  type: actionTypes.SET_FILTER_RESULTS,
  payload: filterResults,
})
