import actionTypes from "./reducer/actionTypes"

export type Label = { title: string; data: string }
export type Labels = Label[]
export type Entry = { [key: string]: string }
export type Entries = Entry[]
export type PageSizeOptions = number[]
export type CurrentPage = number
export type TotalPages = number
export type PageSize = number
export type SortBy = string
export type sortDirection = string
export type FilterResults = Entries

export type Config = {
  labels: Labels
  entries: Entries
  sortBy?: SortBy
  sortDirection?: sortDirection
}

export type DataTableState = {
  labels: Labels
  entries: Entries
  sortBy: SortBy
  sortDirection: sortDirection
  pageSizeOptions: PageSizeOptions
  currentPage: CurrentPage
  totalPages: TotalPages
  pageSize: PageSize
  filterResults: FilterResults
}

export type DataTableAction =
  | {
      type: typeof actionTypes.SET_CURRENT_PAGE
      payload: CurrentPage
    }
  | {
      type: typeof actionTypes.SET_FILTER_RESULTS
      payload: Entries
    }
  | {
      type: typeof actionTypes.SET_PAGE_SIZE
      payload: PageSize
    }
  | {
      type: typeof actionTypes.SET_TOTAL_PAGES
      payload: TotalPages
    }
  | {
      type: typeof actionTypes.SET_SORT_BY
      payload: SortBy
    }
  | {
      type: typeof actionTypes.SET_SORT_DIRECTION
      payload: sortDirection
    }
