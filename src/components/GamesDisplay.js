import GameCard from './GameCard'
import SearchCard from './searchCard'

function GamesDisplay({
  gamesData,
  setGamesData,
  cart,
  setCart,
  search,
  setIsHidden,
  addTitleRef,
}) {
  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  )

  if (search === '') {
    return (
      <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
        {gamesData.map((game) => (
          <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
        ))}
        <SearchCard setIsHidden={setIsHidden} addTitleRef={addTitleRef} />
      </div>
    )
  } else if (filteredGames.length > 0) {
    return (
      <div className="col-span-3 bg-white grid grid-cols-4 gap-4 p-4 max-sm:grid-cols-1 max-sm:grid-span-1">
        {filteredGames.map((game) => (
          <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
        ))}
        <SearchCard setIsHidden={setIsHidden} addTitleRef={addTitleRef} />
      </div>
    )
  } else {
    return (
      <div className="col-span-3 bg-white grid grid-cols-4 gap-4 p-4 max-sm:grid-cols-1 max-sm:grid-span-1">
        <SearchCard setIsHidden={setIsHidden} addTitleRef={addTitleRef} />
      </div>
    )
  }
}

export default GamesDisplay
