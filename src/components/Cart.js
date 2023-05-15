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
          <h1 className=" text-3xl text-center my-7">
            Mon panier ({cart.length})
          </h1>
          <CartList cart={cart} setCart={setCart} />
          <div className="flex justify-between">
            <div className="font-semibold flex items-center justify-staret mx-4 ">
              <button
                className="bg-red-200 p-2 text-xs text-gray-800 rounded-md"
                onClick={handleClick}
              >
                Vider mon <br />
                panier
              </button>
            </div>
            <p className="font-bold text-end text-xl m-5">
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
