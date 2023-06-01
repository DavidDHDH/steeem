import { useRef, useState } from 'react'
import Cart from './Cart'
import GamesDisplay from './GamesDisplay'

function Body({ ...props }) {
  const [cart, setCart] = useState([])
  const [isHidden, setIsHidden] = useState(true)
  const addTitleRef = useRef(null)

  const handleClickFocus = () => addTitleRef.current.focus()
  return (
    <div className="bg-gray-100 bg-opacity-70 grid grid-cols-4 border rounded-md min-h-[620px]">
      <GamesDisplay
        gamesData={props.gamesData}
        setGamesData={props.setGamesData}
        search={props.search}
        cart={cart}
        setCart={setCart}
        filter={props.filter}
        setIsHidden={setIsHidden}
        addTitleRef={handleClickFocus}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        setGamesData={props.setGamesData}
        gamesData={props.gamesData}
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        setSearch={props.setSearch}
        addTitleRef={addTitleRef}
      />
    </div>
  )
}

export default Body
