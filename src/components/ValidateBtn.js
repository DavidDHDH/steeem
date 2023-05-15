function ValidateBtn() {
  const handleClick = () => alert('Merci')
  return (
    <>
      <div className="flex justify-center">
        <button onClick={handleClick} className="buttoninactive w-20 h-10">
          Payer
        </button>
      </div>
    </>
  )
}

export default ValidateBtn
