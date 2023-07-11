import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function FiltersSelect({
  categories,
  platforms,
  handleChanges,
}) {
  const [activeFilter, setActiveFilter] = React.useState({
    categorie: '',
    plateforme: '',
  })

  const handleCatChange = (event) => {
    setActiveFilter({ ...activeFilter, categorie: event.target.value })
    handleChanges.categorie(event.target.value)
  }

  const handlePlatChange = (event) => {
    setActiveFilter({ ...activeFilter, plateforme: event.target.value })
    handleChanges.plateforme(event.target.value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="categories">Genre</InputLabel>
        <Select
          labelId="categories"
          id="categories"
          value={activeFilter.categorie}
          label="categoriesFilter"
          onChange={handleCatChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories.map((filter) => (
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
          value={activeFilter.plateforme}
          label="platformFilter"
          onChange={handlePlatChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {platforms.map((filter) => (
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
