import GameCard from './GameCard'

function GamesDisplay({ gamesData, cart, setCart, search }) {
  const filteredGames = gamesData.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  )

  if (search === '') {
    return (
      <div className="col-span-3 bg-white grid grid-cols-3 gap-4 p-4">
        {gamesData.map((game) => (
          <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
        ))}
      </div>
    )
  } else if (filteredGames.length > 0) {
    return (
      <div className="col-span-3 bg-white grid grid-cols-3 gap-4 p-4">
        {filteredGames.map((game) => (
          <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="col-span-3 bg-white grid grid-cols-3 gap-4 p-4"></div>
    )
  }
}

export default GamesDisplay
