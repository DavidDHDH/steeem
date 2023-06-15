import { useEffect, useRef } from 'react'
import useSearch from '../hooks/useSearch'
import { TextField } from '@mui/material'

function SearchBar() {
  const [search, setSearch] = useSearch()
  const inputRef = useRef(null)
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => inputRef.current.focus(), [])

  const resetSearch = () => setSearch('')

  return (
    <div className="space-y-3 flex flex-col items-center">
      <div className="flex justify-center border w-full ">
        <TextField
          id="outlined-basic"
          label="Quel jeu cherchez-vous ?"
          variant="outlined"
          inputRef={inputRef}
          type="text"
          onChange={handleChange}
          name="search"
          value={search}
          fullWidth
          size="small"
        />
        <button onClick={resetSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="gray"
            className="w-6 h-6 m-1 active:stroke-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
