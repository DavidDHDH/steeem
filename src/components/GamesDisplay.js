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
      <div className="col-span-3 grid grid-cols-3 gap-4 p-4 2xl:grid-cols-4 max-lg:grid-cols-2">
        {gamesData.map((game) => (
          <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
        ))}
        <SearchCard setIsHidden={setIsHidden} addTitleRef={addTitleRef} />
      </div>
    )
  } else if (filteredGames.length > 0) {
    return (
      <div className="col-span-3 bg-white grid grid-cols-3 gap-4 p-4 2xl:grid-cols-4">
        {filteredGames.map((game) => (
          <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
        ))}
        <SearchCard setIsHidden={setIsHidden} addTitleRef={addTitleRef} />
      </div>
    )
  } else {
    return (
      <div className="col-span-3 bg-white grid grid-cols-3 gap-4 p-4 2xl:grid-cols-4">
        <SearchCard setIsHidden={setIsHidden} addTitleRef={addTitleRef} />
      </div>
    )
  }
}

export default GamesDisplay
