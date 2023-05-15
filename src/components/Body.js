import Cart from './Cart'
import GamesDisplay from './GamesDisplay'

function Body() {
  return (
    <div className="bg-gray-100 grid grid-cols-4 border rounded-md">
      <GamesDisplay />
      <Cart />
    </div>
  )
}

export default Body
