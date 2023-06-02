import CardFooter from './CardFooter'

function GameCard({
  id,
  title,
  short_description,
  thumbnail,
  note,
  price,
  gotIt,
  cart,
  setCart,
}) {
  return (
    <>
      <div className=" bg-white rounded-lg h-[400] shadow-md flex flex-col">
        <img
          className="rounded-lg w-full"
          src={thumbnail}
          alt="Couverture du jeu vidéo"
        ></img>
        <div className="p-3 flex-grow">
          <h2 className=" text-center font-semibold text-lg h-fit mb-3">
            {title}
          </h2>
          <p className="text-center mb-2 h-auto max-xl:text-sm max-lg:text-base max-md:text-sm">
            {short_description}
          </p>
        </div>
        <div className="p-3">
          <CardFooter
            className=""
            id={id}
            title={title}
            note={note}
            price={price}
            gotIt={gotIt}
            cart={cart}
            setCart={setCart}
            thumbnail={thumbnail}
          />
        </div>
      </div>
    </>
  )
}

export default GameCard
