import GameCard from './GameCard'
import games from '../assets/data'

function GamesDisplay() {
  return (
    <div className="col-span-3 bg-white grid grid-cols-3 gap-4 p-4">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </div>
  )
}

export default GamesDisplay
