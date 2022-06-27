export type Label = { title: string; data: string }
export type Labels = Label[]
export type Entry = { [key: string]: string }
export type Entries = Entry[]

export type Config = {
  labels: Labels
  entries: Entries
  sortBy?: string
  sortDirection?: string
}

export type DataTableState = {
  labels: Labels
  entries: Entries
  sortBy: string
  sortDirection: string
  currentPage: number
  totalPages: number
  pageSize: number
  filter: string
  filterResults: number
}
