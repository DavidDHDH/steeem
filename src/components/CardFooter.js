import AddToCartButton from './AddToCartButton'
import Notation from './Notation'

function CardFooter({ note, price, gotIt }) {
  if (gotIt) {
    return (
      <div className="flex flex-row items-center justify-between">
        <Notation />
        <AddToCartButton gotIt={gotIt} />
      </div>
    )
  } else {
    return (
      <div className="flex flex-row items-center justify-between px-2">
        <div>
          <p className="font-semibold text-lg">Note : {note}/20</p>
          <p className="font-semibold text-lg">Prix : {price}€</p>
        </div>
        <AddToCartButton gotIt={gotIt} />
      </div>
    )
  }
}
export default CardFooter
