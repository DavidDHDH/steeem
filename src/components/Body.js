import { useState } from 'react'
import Cart from './Cart'
import GamesDisplay from './GamesDisplay'

function Body({ ...props }) {
  const [cart, setCart] = useState([])
  const [isHidden, setIsHidden] = useState(true)

  return (
    <div className="bg-gray-100 bg-opacity-70 grid grid-cols-4 border rounded-md max-sm:grid-cols-2">
      <GamesDisplay
        gamesData={props.gamesData}
        search={props.search}
        cart={cart}
        setCart={setCart}
        filter={props.filter}
        setIsHidden={setIsHidden}
        status={props.status}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        setGamesData={props.setGamesData}
        gamesData={props.gamesData}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        setSearch={props.setSearch}
      />
    </div>
  )
}

export default Body
