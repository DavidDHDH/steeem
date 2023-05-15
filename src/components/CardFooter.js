import AddToCartButton from './AddToCartButton'
import Notation from './Notation'

function CardFooter({ ...props }) {
  if (props.gotIt) {
    return (
      <div className="b">
        <Notation />
      </div>
    )
  } else {
    return (
      <div className="flex flex-row items-center justify-between px-2">
        <div>
          <p className="font-semibold text-lg">Note : {props.note}/20</p>
          <p className="font-semibold text-lg">Prix : {props.price}€</p>
        </div>
        <AddToCartButton
          id={props.id}
          favicon={props.favicon}
          title={props.title}
          cart={props.cart}
          setCart={props.setCart}
          price={props.price}
        />
      </div>
    )
  }
}
export default CardFooter
