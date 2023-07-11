import SearchCard from './searchCard'
import SkeletonCard from './skeletonCard'
import useGames from '../../hooks/useGames'
import useSearch from '../../hooks/useSearch'
import GameCard from './GameCard'

function GamesDisplay({ cart, setCart, setIsHidden }) {
  const {
    isLoading,
    isSuccess,
    gamesData = [],
    filteredCatBy,
    filteredPlatBy,
  } = useGames()
  const [search] = useSearch()
  const mySkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8]

  const filteredGames = gamesData.filter((game) => {
    return (
      game.title.toLowerCase().includes(search.toLowerCase()) &&
      game.genre.toLowerCase().includes(filteredCatBy.toLowerCase()) &&
      game.platform.toLowerCase().includes(filteredPlatBy.toLowerCase())
    )
  })

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

// if (isLoading) {
//   return (
//     <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
//       {mySkeletonArray.map((index) => (
//         <SkeletonCard key={index} />
//       ))}
//       <SearchCard setIsHidden={setIsHidden} />
//     </div>
//   )
// } else if (isSuccess) {
//   if (search === '' && filteredCatBy === '' && filteredPlatBy === '') {
//     return (
//       <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
//         {gamesData.map((game) => (
//           <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
//         ))}
//         <SearchCard setIsHidden={setIsHidden} />
//       </div>
//     )
//   } else if (filteredGames.length > 0) {
//     return (
//       <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
//         {filteredGames.map((game) => (
//           <GameCard key={game.id} {...game} cart={cart} setCart={setCart} />
//         ))}
//         <SearchCard setIsHidden={setIsHidden} />
//       </div>
//     )
//   } else if (
//     filteredGames.length === 0 &&
//     (search !== '' || filteredCatBy !== '' || filteredPlatBy !== '')
//   ) {
//     return (
//       <div className="col-span-3 grid grid-cols-4 gap-4 p-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:col-span-1">
//         <SearchCard setIsHidden={setIsHidden} />
//       </div>
//     )
//   }
// }
// }

export default GamesDisplay
