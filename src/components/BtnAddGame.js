function BtnAddGame({ setIsHidden, addTitleRef }) {
  const handleClick = () => {
    setIsHidden(false)
    addTitleRef()
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className="w-fit h-15 p-3 mt-5 border hover:bg-blue-600 text-blue-700 font-medium hover:text-white  border-blue-500 hover:border-transparent transition rounded active:bg-blue-700"
      >
        Ajouter un jeu
      </button>
    </div>
  )
}

export default BtnAddGame
