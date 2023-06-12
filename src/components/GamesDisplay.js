import GameCard from './GameCard'
import SearchCard from './searchCard'
import SkeletonCard from './skeletonCard'

function GamesDisplay({
  gamesData,
  cart,
  setCart,
  search,
  setIsHidden,
  status,
}) {
  const filteredGames = gamesData.filter((game) => game)
  const mySkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8]

  if (status === 'fail') {
    throw new Error('Echec de chargement')
  } else if (status === 'fetching') {
    return (
      <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
        {mySkeletonArray.map(() => (
          <SkeletonCard />
        ))}
        <SearchCard setIsHidden={setIsHidden} />
      </div>
    )
  } else if (status === 'done') {
    if (search === '') {
      return (
        <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
          {gamesData.map((game) => (
            <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
          ))}
          <SearchCard setIsHidden={setIsHidden} />
        </div>
      )
    } else if (filteredGames.length > 0) {
      return (
        <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-sm:grid-cols-1 max-sm:grid-span-1">
          {filteredGames.map((game) => (
            <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
          ))}
          <SearchCard setIsHidden={setIsHidden} />
        </div>
      )
    } else {
      return (
        <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-sm:grid-cols-1 max-sm:grid-span-1">
          <SearchCard setIsHidden={setIsHidden} />
        </div>
      )
    }
  }
}

export default GamesDisplay
