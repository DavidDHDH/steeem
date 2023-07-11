import SearchCard from './searchCard'
import SkeletonCard from './skeletonCard'
import useGames from '../../hooks/useGames'
import GameCard from './GameCard'

function GamesDisplay({ cart, setCart, setIsHidden }) {
  const { isLoading, isSuccess, gamesData = [] } = useGames()

  const mySkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8]

  if (isLoading) {
    return (
      <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
        {mySkeletonArray.map((index) => (
          <SkeletonCard key={index} />
        ))}
        <SearchCard setIsHidden={setIsHidden} />
      </div>
    )
  }
  if (isSuccess) {
    return (
      <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
        {gamesData.map((game) => (
          <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
        ))}
        <SearchCard setIsHidden={setIsHidden} />
      </div>
    )
  }
}

export default GamesDisplay
