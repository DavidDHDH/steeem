import { useState } from 'react'
import Cart from './cart/Cart'
import GamesDisplay from './display/GamesDisplay'

function Body() {
  const [cart, setCart] = useState([])
  const [isHidden, setIsHidden] = useState(true)
  return (
    <div className="bg-gray-100 bg-opacity-70 grid grid-cols-4 border rounded-md max-sm:grid-cols-2">
      <GamesDisplay cart={cart} setCart={setCart} setIsHidden={setIsHidden} />
      <Cart
        cart={cart}
        setCart={setCart}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
      />
    </div>
  )
}

export default Body
