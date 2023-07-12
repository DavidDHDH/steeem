import { createContext, useState } from 'react'
export const SearchContext = createContext()

//pourquoi un context ?

function SearchProvider(props) {
  const [search, setSearch] = useState('')

  return <SearchContext.Provider value={{ search, setSearch }} {...props} />
}

export default SearchProvider
