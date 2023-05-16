function CleanCart({ cart, setCart }) {
  const handleClick = () => setCart([])

  return (
    <div className="font-medium flex items-center">
      <button
        className="bg-transparent border-red-600 border text-red-600 hover:bg-red-600 hover:text-white p-2 text-xs rounded-md"
        onClick={handleClick}
      >
        Vider mon <br />
        panier
      </button>
    </div>
  )
}

export default CleanCart
