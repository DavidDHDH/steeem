import SearchBar from './SearchBar'
import FiltersBar from './FiltersBar'

function Header({
  search,
  setSearch,
  filter,
  setFilter,
  setGamesData,
  gamesData,
}) {
  return (
    <div className="m-12">
      <h1 className="text-center text-5xl uppercase m-10">Steeem</h1>
      <div className="flex flex-col items-center mx-auto w-96 space-y-3">
        <SearchBar search={search} setSearch={setSearch} />
        <FiltersBar filter={filter} setFilter={setFilter} />
      </div>
    </div>
  )
}

export default Header
