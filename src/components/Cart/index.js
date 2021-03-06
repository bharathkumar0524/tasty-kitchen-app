import {Component} from 'react'
import Header from '../Header'
import EmptyCartView from '../EmptyCartView'
import CartItem from '../CartItem'
import CartTotal from '../CartTotal'
import Footer from '../Footer'
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

  renderEmptyCartView = () => (
    <div className="empty-cart-view-container">
      <EmptyCartView />
    </div>
  )

  deleteCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartList: updatedCartList})
  }

  addQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decreaseQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.deleteCartItem(id)
    }
  }

  render() {
    const {cartList} = this.state
    // console.log(cartList)
    localStorage.setItem('cartData', JSON.stringify(cartList))
    const isCartListEmpty = cartList.length === 0
    // console.log(isCartListEmpty)
    return (
      <>
        <Header isCartActive="true" isHomeActive="false" />

        {isCartListEmpty ? (
          this.renderEmptyCartView()
        ) : (
          <>
            <div className="cart-container">
              <div className="cart-container-content">
                <div className="cart-content-container">
                  <div className="cart-headings-container">
                    <p className="cart-headings item">Item</p>
                    <p className="cart-headings quantity">Quantity</p>
                    <p className="cart-headings price">Price</p>
                    <p className="cart-headings">Remove</p>
                  </div>
                </div>
                <ul className="cart-list-container" testid="cartItem">
                  {cartList.map(eachCartItem => (
                    <CartItem
                      key={eachCartItem.id}
                      cartItemDetails={eachCartItem}
                      addQuantity={this.addQuantity}
                      decreaseQuantity={this.decreaseQuantity}
                      deleteCartItem={this.deleteCartItem}
                    />
                  ))}
                </ul>
                <hr className="cart-horizontal-line" />
                <CartTotal />
              </div>
            </div>
            <Footer />
          </>
        )}
      </>
    )
  }
}
export default Cart
