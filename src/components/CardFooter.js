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
      <div className="flex flex-row items-center justify-between">
        <div>
          <p>Note : {note}/20</p>
          <p>Prix : {price}€</p>
        </div>
        <AddToCartButton gotIt={gotIt} />
      </div>
    )
  }
}
export default CardFooter
