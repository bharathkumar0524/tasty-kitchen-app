import {Component} from 'react'
import Header from '../Header'
import './index.css'

const getCartListFromLocalStorage = () => {
  const stringifiedCartList = localStorage.getItem('cartData')
  const parsedCartList = JSON.parse(stringifiedCartList)
  if (parsedCartList === null) {
    return []
  }
  return parsedCartList
}

class Cart extends Component {
  state = {
    cartList: getCartListFromLocalStorage(),
  }

  render() {
    const {cartList} = this.state
    console.log(cartList)
    return (
      <>
        <Header />
        <div>
          <h1>Hello</h1>
        </div>
      </>
    )
  }
}
export default Cart
