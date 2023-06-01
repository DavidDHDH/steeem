function ValidateBtn({ cart, setCart, setGamesData }) {
  const handleClick = () => {
    alert('Merci !')

    setCart([])
  }
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="buttoninactive w-20 h-10 2xl:w-28 2xl:h-10"
        >
          Payer
        </button>
      </div>
    </>
  )
}

export default ValidateBtn
