import {Component} from 'react'

import './index.css'

class Counter extends Component {
  render() {
    const {
      quantity,
      onDecrement,
      onIncrement,
      decrementTestId,
      quantityTestId,
      incrementTestId,
    } = this.props
    return (
      <div className="counter-container">
        <button
          type="button"
          onClick={onDecrement}
          testid={decrementTestId}
          className="quantity-controller-buttons"
        >
          -
        </button>
        <div>
          <p testid={quantityTestId} className="cart-quantity">
            {quantity}
          </p>
        </div>
        <button
          type="button"
          onClick={onIncrement}
          testid={incrementTestId}
          className="quantity-controller-buttons"
        >
          +
        </button>
      </div>
    )
  }
}

export default Counter
