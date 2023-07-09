import CardFooter from './CardFooter'

function GameCard({
  id,
  title,
  short_description,
  genre,
  platform,
  thumbnail,
  game_url,
  note,
  price,
  gotIt,
  cart,
  setCart,
}) {
  return (
    <>
      <div className=" bg-white rounded-lg shadow-md flex flex-col max-h-[580px]">
        <a href={game_url} target="_blank" rel="noreferrer">
          <img
            className="rounded-lg w-full"
            src={thumbnail}
            alt="Couverture du jeu vidéo"
          ></img>
        </a>
        <div className="p-3 flex-grow">
          <h2 className=" text-center font-semibold text-lg h-fit mb-3">
            {title}
          </h2>
          <div className="text-center pb-3 flex justify-around flex-wrap">
            <div className="bg-red-100 p-1 rounded-xl text-sm flex items-center md:text-base md:px-3 lg:px-1 lg:text-sm xl:px-2 2xl:text-base 2xl:px-3">
              {genre}
            </div>
            <div className="bg-blue-100 p-1 rounded-xl text-sm flex items-center md:text-base md:px-3 lg:px-1 lg:text-sm  xl:px-2 2xl:text-base 2xl:px-3">
              {platform}
            </div>
          </div>
          <p className="text-center mb-2 h-auto max-xl:text-sm max-lg:text-base max-md:text-sm">
            {short_description}
          </p>
        </div>
        <div className="p-3">
          <CardFooter
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
