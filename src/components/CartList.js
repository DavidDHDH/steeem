import CartGameCard from './CartGameCard'

function CartList({ cart, setCart }) {
  return (
    <>
      <div className="mx-4 mt-4 mb-1 space-y-2 h-96 bg-gray-200 p-1 overflow-auto rounded-sm relative">
        {cart.map((game) => {
          return (
            <CartGameCard
              key={game.id}
              setCart={setCart}
              cart={cart}
              {...game}
            />
          )
        })}
      </div>
    </>
  )
}

export default CartList
