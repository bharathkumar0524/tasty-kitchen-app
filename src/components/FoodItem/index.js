import './index.css'
import {Component} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {ImStarFull} from 'react-icons/im'
import {FaRupeeSign} from 'react-icons/fa'

class FoodItem extends Component {
  state = {quantity: 0}

  deleteCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartList: updatedCartList})
  }

  onClickAddToCart = () => {
    const {addCartItem, foodItemDetails, quantity} = this.props
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }))
    addCartItem({...foodItemDetails, quantity})
  }

  onAddQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity + 1,
    }))
  }

  onDecreaseQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    } else {
      this.setState({quantity: 0})
    }
  }

  render() {
    const {quantity} = this.state
    const {foodItemDetails} = this.props
    const {imageUrl, name, cost, rating} = foodItemDetails

    return (
      <li testid="foodItem" className="food-item-container">
        <img src={imageUrl} alt="food-item" className="food-item-image" />
        <div>
          <h1 className="food-name">{name}</h1>
          <div className="cost-container">
            <FaRupeeSign />
            <p className="food-cost">{cost}.00</p>
          </div>
          <div className="rating-container">
            <ImStarFull className="star" />
            <p className="rating">{rating}</p>
          </div>

          {quantity === 0 ? (
            <button
              onClick={this.onClickAddToCart}
              className="add-button"
              type="button"
            >
              Add
            </button>
          ) : (
            <div className="cart-quantity-container">
              <button
                testid="decrement-count"
                onClick={this.onDecreaseQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsDashSquare
                  className="quantity-controller-icon"
                  color="#52606D"
                  size={12}
                />
              </button>
              <p testid="active-count" className="cart-quantity">
                {quantity}
              </p>
              <button
                testid="increment-count"
                onClick={this.onAddQuantity}
                type="button"
                className="quantity-controller-button"
              >
                <BsPlusSquare
                  className="quantity-controller-icon"
                  color="#52606D"
                  size={12}
                />
              </button>
            </div>
          )}
        </div>
      </li>
    )
  }
}

export default FoodItem
