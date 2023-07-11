import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import useGames from '../../hooks/useGames'

export default function FiltersSelect() {
  const {
    gamesCategories,
    gamesPlatforms,
    setFilteredCatBy,
    setFilteredPlatBy,
  } = useGames()
  const [activeFilter, setActiveFilter] = React.useState({
    category: '',
    plateform: '',
  })

  const handleCatChange = (event) => {
    setActiveFilter({ ...activeFilter, category: event.target.value })
    setFilteredCatBy(event.target.value)
  }

  const handlePlatChange = (event) => {
    setActiveFilter({ ...activeFilter, plateform: event.target.value })
    setFilteredPlatBy(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="categories">Genre</InputLabel>
        <Select
          labelId="categories"
          id="categories"
          value={activeFilter.category}
          label="categoriesFilter"
          onChange={handleCatChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {gamesCategories.map((filter) => (
            <MenuItem value={filter} key={filter}>
              {filter}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Filtrer par catégorie</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="platform">Platforme</InputLabel>
        <Select
          labelId="platform"
          id="platform"
          value={activeFilter.plateform}
          label="platformFilter"
          onChange={handlePlatChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {gamesPlatforms.map((filter) => (
            <MenuItem value={filter} key={filter}>
              {filter}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>Filtrer par plateforme</FormHelperText>
      </FormControl>
    </div>
  )
}
