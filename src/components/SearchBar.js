import { useState } from 'react'

function SearchBar({ search, setSearch }) {
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const resetSearch = () => setSearch('')

  return (
    <div className="flex justify-center border w-full">
      <input
        type="text"
        onChange={handleChange}
        name="search"
        value={search}
        placeholder="Rechercher ici"
        className="text-center p-1 w-full h-9"
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
  )
}

export default SearchBar
