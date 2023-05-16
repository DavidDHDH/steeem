import CardFooter from './CardFooter'

function GameCard({
  id,
  title,
  description,
  image,
  note,
  price,
  gotIt,
  cart,
  setCart,
  favicon,
}) {
  return (
    <>
      <div className="bg-white items-center flex flex-col space-y-4 rounded-lg shadow-md h-auto max-xl:space-y-2">
        <div className="h-40 flex max-xl:h-28 max-xl:w-52 max-xl:items-center max-xl:mt-3 max-lg:mt-2 max-lg:w-60">
          <img
            className="rounded-lg"
            src={image}
            alt="Couverture du jeu vidéo"
          ></img>
        </div>
        <div className="p-3">
          <h2 className="text-center font-semibold text-2xl h-fit mb-3 2xl:text-xl max-xl:text-lg">
            {title}
          </h2>
          <div className="">
            <p className="text-center mb-4 h-60 max-xl:h-72 max-xl:overflow-scroll">
              {description}
            </p>
            <CardFooter
              className=""
              id={id}
              title={title}
              note={note}
              price={price}
              gotIt={gotIt}
              cart={cart}
              setCart={setCart}
              favicon={favicon}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default GameCard
