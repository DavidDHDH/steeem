import FilterBtn from './FilterBtn'

function FiltersBar() {
  return (
    <div className="flex w-80 justify-between items-center">
      {/* <FilterBtn name="Tous" /> */}
      Filtrer par :
      <FilterBtn name="J'ai" />
      <FilterBtn name="J'ai pas" />
    </div>
  )
}

export default FiltersBar
