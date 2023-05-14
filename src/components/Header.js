import SearchBar from './SearchBar'
import FiltersBar from './FiltersBar'

function Header() {
  return (
    <div className="m-12">
      <h1 className="text-center text-5xl uppercase m-10">Steeem</h1>
      <div className="flex flex-col items-center space-y-3">
        <SearchBar />
        <FiltersBar />
      </div>
    </div>
  )
}

export default Header
