import CartGameCard from './CartGameCard'

function CartList() {
  return (
    <div className="m-4 space-y-2 h-auto">
      <CartGameCard title="Tropico 6" />
      <CartGameCard title="Call Of Duty" />
      <CartGameCard title="Farm Simulator 2023" />
    </div>
  )
}

export default CartList
