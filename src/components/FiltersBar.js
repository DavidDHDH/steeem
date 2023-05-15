import FilterBtn from './FilterBtn'

function FiltersBar({ filter, setFilter }) {
  return (
    <div className="flex w-full justify-between items-center">
      Filtrer par :
      <FilterBtn name="J'ai" filter={filter} setFilter={setFilter} />
      <FilterBtn name="J'ai pas" filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default FiltersBar
