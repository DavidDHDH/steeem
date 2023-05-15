import CardFooter from './CardFooter'

function GameCard({ title, description, image, note, price, gotIt }) {
  return (
    <>
      <div className="bg-white flex flex-col space-y-4 rounded-lg shadow-md h-auto">
        <div className="h-40 flex justify-center">
          <img
            className="rounded-lg"
            src={image}
            alt="Couverture du jeu vidéo"
          ></img>
        </div>
        <div className="p-3">
          <h2 className="text-center font-semibold text-2xl h-fit mb-3">
            {title}
          </h2>
          <div className="">
            <p className="text-center mb-10 h-60">{description}</p>
            <CardFooter className="" note={note} price={price} gotIt={gotIt} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GameCard
