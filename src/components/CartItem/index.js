import {AiFillCloseCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import Counter from '../Counter'
import './index.css'

const CartItem = props => {
  const {cartItemDetails, addQuantity, decreaseQuantity, deleteCartItem} = props
  // console.log(cartItemDetails)
  const {id, name, quantity, cost, imageUrl} = cartItemDetails

  const onIncrement = () => {
    addQuantity(id)
  }

  const onDecrement = () => {
    decreaseQuantity(id)
  }

  const onClickRemoveIcon = () => {
    deleteCartItem(id)
  }

  return (
    <li className="cart-item">
      <img className="cart-item-image" src={imageUrl} alt={name} />
      <div className="cart-item-details-container">
        <h1 className="cart-item-title">{name}</h1>
        <Counter
          quantity={quantity}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
          decrementTestId="decrement-quantity"
          quantityTestId="item-quantity"
          incrementTestId="increment-quantity"
        />
        <p className="cart-total-price">
          <FaRupeeSign /> {cost * quantity}/-
        </p>
        <button
          className="remove-button"
          type="button"
          onClick={onClickRemoveIcon}
        >
          Remove
        </button>
        <button
          className="delete-icon"
          type="button"
          onClick={onClickRemoveIcon}
        >
          <AiFillCloseCircle color="#616E7C" size={20} />
        </button>
      </div>
    </li>
  )
}

export default CartItem
