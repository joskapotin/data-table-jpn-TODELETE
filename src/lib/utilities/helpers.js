/**
 * It takes in a string, check if it is a valid date and return the result
 */
export const isDate = date => !Number.isNaN(Date.parse(date))

/**
 * It sorts an array of objects by a given key and direction
 * If the key values are dates it will sort them by date
 */
export const sortEntries = ({ entries, sortBy, sortDirection }) => {
  const sortedEntries = entries.sort((a, b) => {
    const firstValue = isDate(a[sortBy].toString()) ? new Date(a[sortBy]) : a[sortBy]
    const secondValue = isDate(b[sortBy]) ? new Date(b[sortBy]) : b[sortBy]

    if (sortDirection === "asc") {
      return firstValue > secondValue ? 1 : -1
    }
    return firstValue < secondValue ? 1 : -1
  })
  return sortedEntries
}

/**
 * It takes in an array of objects and a string, and returns an array of objects that contain the
 * string
 */
export const filterEntries = (entries, filter) => {
  const filterResults = entries.filter(entry => Object.values(entry).find(value => value.toLowerCase().includes(filter.toLowerCase())))
  return filterResults
}
