import CartGameCard from './CartGameCard'

function CartList({ cart, setCart }) {
  return (
    <>
      <div className="mx-4 mt-4 mb-1 space-y-2 h-96 bg-gray-200 p-1 overflow-auto rounded-sm relative 2xl:mx-6 max-lg:mx-1">
        {cart.length > 0 ? (
          cart.map((game) => {
            return (
              <CartGameCard
                key={game.id}
                setCart={setCart}
                cart={cart}
                {...game}
              />
            )
          })
        ) : (
          <p
            style={{
              textAlign: 'center',
              fontSize: 'bold',
              color: 'gray',
              marginTop: '30px',
            }}
          >
            Votre panier est vide
          </p>
        )}
      </div>
    </>
  )
}

export default CartList
