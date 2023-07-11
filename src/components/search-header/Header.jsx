import FiltersBar from './FiltersBar'
import SearchBar from './SearchBar'

function Header({ handleLog }) {
  const handleClick = () => {
    handleLog(false)
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="absolute top-4 right-4 border border-red-600 text-red-600 p-2 rounded-md hover:bg-red-600 hover:text-white transition"
      >
        Se déconnecter
      </button>
      <div className="m-12 mb-20 max-md:m-1">
        <h1 className="text-center text-8xl uppercase m-20 max-md:text-6xl">
          Steeem
        </h1>
        <div className="w-96 mx-auto max-md:w-72 mb-3">
          <SearchBar />
        </div>
        <FiltersBar />
      </div>
    </div>
  )
}

export default Header
