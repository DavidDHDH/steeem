import SearchBar from './SearchBar'
import FiltersBar from './FiltersBar'

function Header({ search, setSearch, setGamesData, gamesData }) {
  return (
    <div className="m-12 mb-20">
      <h1 className="text-center text-8xl uppercase m-20">Steeem</h1>
      <div className="flex flex-col items-center mx-auto w-96 space-y-3">
        <SearchBar search={search} setSearch={setSearch} />
        <p className="text-center text-gray-500">
          Données provenant de l'API{' '}
          <a className="" href="https://www.freetogame.com/">
            https://www.freetogame.com/
          </a>{' '}
          <br />
          Notes et prix générés de manières aléatoires.
        </p>
        {/* <FiltersBar /> */}
      </div>
    </div>
  )
}

export default Header
