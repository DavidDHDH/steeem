import FilterBtn from './FilterBtn'

function FiltersBar() {
  return (
    <div className="flex w-full justify-start items-center">
      <span className="mr-4">Afficher :</span>
      <FilterBtn name="Mes jeux" />
    </div>
  )
}

export default FiltersBar
