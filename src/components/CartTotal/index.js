import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'

import './index.css'

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('cartData')
  const parsedCartList = JSON.parse(stringifiedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}

const CartTotal = () => {
  const cartList = getCartListFromLocalStorage()
  let totalOrderCost = 0
  cartList.forEach(eachCartItem => {
    totalOrderCost += eachCartItem.cost * eachCartItem.quantity
  })

  return (
    <>
      <div className="cart-summary-container">
        <div className="cart-summary-content">
          <h1 className="order-total-heading">Order Total:</h1>
          <div className="total-container">
            <p testid="total-price" className="total">
              <BiRupee /> {totalOrderCost}
            </p>
          </div>
        </div>
      </div>
      <Link to="/payment" className="place-order-link">
        <div className="place-order-container">
          <button type="button" className="order-button">
            Place Order
          </button>
        </div>
      </Link>
    </>
  )
}

export default CartTotal
