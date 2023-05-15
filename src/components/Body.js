import { useState } from 'react'
import Cart from './Cart'
import GamesDisplay from './GamesDisplay'

function Body({ search, gamesData }) {
  const [cart, setCart] = useState([])

  return (
    <div className="bg-gray-100 grid grid-cols-4 border rounded-md min-h-[620px]">
      <GamesDisplay
        gamesData={gamesData}
        search={search}
        cart={cart}
        setCart={setCart}
      />
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default Body
