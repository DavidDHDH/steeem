import CartList from './CartList'
import ValidateBtn from './ValidateBtn'

function Cart({ cart, setCart }) {
  const handleClick = () => setCart([])
  const totalCost =
    Math.round(cart.reduce((acc, val) => acc + val.price, 0) * 100) / 100
  return (
    <>
      <div className="col-span-1">
        <div className="sticky top-9">
          <h1 className=" text-3xl text-center my-7 max-xl:text-2xl max-lg:text-xl max-lg:my-4 ">
            Mon panier ({cart.length})
          </h1>
          <CartList cart={cart} setCart={setCart} />
          <div className="flex justify-between mx-4 2xl:mx-6 mb-4 max-lg:mx-1">
            <div className="font-semibold flex items-center">
              <button
                className="bg-transparent border-red-600 border text-red-600 hover:bg-red-600 hover:text-white p-2 text-xs rounded-md"
                onClick={handleClick}
              >
                Vider mon <br />
                panier
              </button>
            </div>
            <p className="font-bold text-end text-xl max-xl:text-lg max-lg:text-base">
              Total : <br />
              {totalCost}€
            </p>
          </div>
          <ValidateBtn />
        </div>
      </div>
    </>
  )
}

export default Cart
