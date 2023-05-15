import CartList from './CartList'

function Cart() {
  return (
    <>
      <div className="col-span-1">
        <h1 className=" text-3xl text-center my-7">My Cart</h1>
        <CartList />
      </div>
    </>
  )
}

export default Cart
