import CartList from './CartList'
import ValidateBtn from './ValidateBtn'
import AddGame from './AddGameModal'
import BtnAddGame from '../core/BtnAddGame'
import CleanCart from './CleanCart'

function Cart({ cart, setCart, isHidden, setIsHidden }) {
  const totalCost =
    Math.round(cart.reduce((acc, val) => acc + val.price, 0) * 100) / 100
  return (
    <>
      <div className="col-span-1">
        <div className="sticky top-9 -ml-3">
          <AddGame isHidden={isHidden} setIsHidden={setIsHidden} />
          <h1 className=" text-3xl text-center my-7 max-xl:text-2xl max-lg:text-xl max-lg:my-4 ">
            Mon panier ({cart.length})
          </h1>
          <CartList cart={cart} setCart={setCart} />
          <div className="flex justify-between mx-4 2xl:mx-6 mb-4 max-lg:mx-1">
            <CleanCart setCart={setCart} />
            <p className="font-bold text-end text-xl max-xl:text-lg max-lg:text-base">
              Total : <br />
              {totalCost}€
            </p>
          </div>
          <ValidateBtn cart={cart} setCart={setCart} />
          <div className="mx-4">
            <BtnAddGame
              setIsHidden={setIsHidden}
              className={'buttoninactive'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
