import FiltersBar from './FiltersBar'
import SearchBar from './SearchBar'

function Header() {
  return (
    <div className="m-12 mb-20 max-md:m-1">
      <h1 className="text-center text-8xl uppercase m-20 max-md:text-6xl">
        Steeem
      </h1>
      <div className="w-96 mx-auto max-md:w-72 mb-3">
        <SearchBar />
      </div>
      <FiltersBar />
    </div>
  )
}

export default Header
