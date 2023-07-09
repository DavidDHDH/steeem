import { useContext } from 'react'
import { SearchContext } from '../context/SearchProvider'

function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearch doit etre utilisé dans le SearchProvider')
  }
  return context
}

export default useSearch
