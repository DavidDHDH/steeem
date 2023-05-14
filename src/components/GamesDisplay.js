import GameCard from './GameCard'
import games from '../assets/data'
import tropico from '../assets/images/EGS_Tropico6_LimbicEntertainment_S3-2560x1440-82bcd83b988a5c3230ff8f191113d9b2.jpg'

function GamesDisplay() {
  return (
    <div className="col-span-3 bg-white grid grid-cols-3 gap-4 p-4 border rounded-md">
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          description={game.description}
          image={game.image}
          note={game.note}
          price={game.price}
          gotIt={game.gotIt}
        />
      ))}
    </div>
  )
}

export default GamesDisplay
