import useGames from '../hooks/useGames'

function ValidateBtn({ cart, setCart }) {
  const [, gamesData, setGamesData] = useGames()

  const handleClick = () => {
    console.log(cart)
    alert('Merci, TOUT DROIT SUR MON COMPTE !')

    const newDataGames = gamesData.map((game) => {
      const jeuDansPanier = cart.find((jeuPanier) => jeuPanier.id === game.id)
      if (jeuDansPanier) {
        return { ...game, gotIt: true }
      }
      return game
    })
    setGamesData(newDataGames)
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
