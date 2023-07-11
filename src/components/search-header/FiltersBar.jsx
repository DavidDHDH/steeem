import useGames from '../../hooks/useGames'
import FiltersSelect from './FilterSelect'

function FiltersBar() {
  const { gamesData = [], setFilteredCatBy, setFilteredPlatBy } = useGames()
  const filtersCategory = [...new Set(gamesData.map((game) => game.genre))]
  const filtersPlatform = [...new Set(gamesData.map((game) => game.platform))]

  const handleFilterCat = (type) => {
    setFilteredCatBy(type)
  }
  const handleFilterPlat = (type) => {
    setFilteredPlatBy(type)
  }

  return (
    <>
      <div className="flex justify-center">
        <FiltersSelect
          categories={filtersCategory}
          platforms={filtersPlatform}
          handleChanges={{
            categorie: handleFilterCat,
            plateforme: handleFilterPlat,
          }}
        />
      </div>
    </>
  )
}

export default FiltersBar
