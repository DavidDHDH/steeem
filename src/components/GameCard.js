import CardFooter from './CardFooter'

function GameCard({ title, description, image, note, price, gotIt }) {
  return (
    <>
      <div className="bg-white flex flex-col p-2 space-y-4 h-fit rounded-lg shadow-md">
        <div>
          <img className="rounded-lg" src={image}></img>
        </div>
        <h2 className="text-center font-semibold text-xl">{title}</h2>
        <p className="text-center mb-10">{description}</p>
        <CardFooter note={note} price={price} gotIt={gotIt} />
      </div>
    </>
  )
}

export default GameCard
