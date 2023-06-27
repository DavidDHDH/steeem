import { Autocomplete, Button, ButtonGroup } from '@mui/material'
import useGames from '../hooks/useGames'

function FiltersBar() {
  const [, gamesData, , , setFilteredCatBy, , setFilteredPlatBy] = useGames()
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
      <div className="w-[800px] mx-auto flex flex-wrap gap-2 justify-between my-4">
        {filtersCategory.map((category) => (
          <Button
            onClick={() => handleFilterCat(category)}
            variant="outlined"
            key={category}
            className="w-36"
          >
            {category}
          </Button>
        ))}
        <Button
          className="w-36 grow"
          variant="outlined"
          onClick={() => setFilteredCatBy('')}
        >
          All
        </Button>
      </div>
      <div className="w-[800px] mx-auto flex flex-wrap gap-2 justify-between my-4">
        <ButtonGroup
          variant="outlined"
          color="secondary"
          size="small"
          aria-label="small secondary button group"
          fullWidth
        >
          {' '}
          {filtersPlatform.map((platform) => (
            <Button onClick={() => handleFilterPlat(platform)} key={platform}>
              {platform}
            </Button>
          ))}
          <Button onClick={() => setFilteredPlatBy('')}>All</Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default FiltersBar
