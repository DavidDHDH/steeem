import { useContext } from 'react'
import { SearchContext } from '../components/SearchProvider'

function useSearch() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useGames doit etre utilisé dans le GamesProvider')
  }
  return context
}

export default useSearch
