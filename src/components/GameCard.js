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
  favicon,
}) {
  return (
    <>
      <div className="bg-white items-center flex flex-col space-y-4 rounded-lg shadow-md h-auto max-h-[580px]  max-xl:space-y-2">
        <div className="flex flex-col items-center  max-xl:mt-3 max-lg:mt-2 ">
          <img
            className="rounded-lg h-40 max-xl:h-28 max-xl:w-52 max-lg:w-60"
            src={thumbnail}
            alt="Couverture du jeu vidéo"
          ></img>
        </div>
        <div className="p-3">
          <h2 className="text-center font-semibold text-2xl h-fit mb-3 2xl:text-xl max-xl:text-lg">
            {title}
          </h2>
          <div className="">
            <p className="text-center mb-4 h-60 max-xl:h-72 ">
              {short_description}
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
              thumbnail={thumbnail}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default GameCard
