import { useState } from 'react'
import Cart from './Cart'
import GamesDisplay from './GamesDisplay'

function Body({ search, gamesData, setGamesData, filter, setSearch }) {
  const [cart, setCart] = useState([])
  const [isHidden, setIsHidden] = useState(true)

  return (
    <div className="bg-gray-100 bg-opacity-70 grid grid-cols-4 border rounded-md min-h-[620px]">
      <GamesDisplay
        gamesData={gamesData}
        search={search}
        cart={cart}
        setCart={setCart}
        filter={filter}
        setIsHidden={setIsHidden}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        setGamesData={setGamesData}
        gamesData={gamesData}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        setSearch={setSearch}
      />
    </div>
  )
}

export default Body
