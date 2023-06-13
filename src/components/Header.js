import SearchBar from './SearchBar'

function Header() {
  return (
    <div className="m-12 mb-20">
      <h1 className="text-center text-8xl uppercase m-20">Steeem</h1>
      <div className="flex flex-col items-center mx-auto w-96 space-y-3">
        <SearchBar />
        <p className="text-center text-gray-500">
          Données provenant de l'API{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.freetogame.com/"
          >
            https://www.freetogame.com/
          </a>{' '}
          <br />
          Notes et prix générés de manières aléatoires.
        </p>
      </div>
    </div>
  )
}

export default Header
