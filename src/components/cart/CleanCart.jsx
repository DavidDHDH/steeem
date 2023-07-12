function CleanCart({ cart, setCart }) {
  const handleClick = () => setCart([])

  return (
    <div className="font-medium flex items-center">
      {cart.length > 0 ? (
        <button
          className="bg-transparent border-red-600 border text-red-600 hover:bg-red-600 hover:text-white p-2 text-xs rounded-md"
          onClick={handleClick}
        >
          Vider mon <br />
          panier
        </button>
      ) : null}
    </div>
  )
}

export default CleanCart
