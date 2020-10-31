//feature 1
import React from "react";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";

import store from "./store";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  }

  addToCart = (product) => {
    //copying the array using slice method
    const cartItems = this.state.cartItems.slice();
    let alreadyIn = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        console.log("increasing count of " + item._id + " to " + item.count);
        alreadyIn = true;
      }
    });
    if (!alreadyIn) {
      cartItems.push({ ...product, count: 1 });
    }

    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  removeFromCart = (product) => {
    //copying the array using slice method
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((item) => item._id !== product._id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((item) => item._id !== product._id))
    );
  };

  createOrder = (order) => {
    alert("need to save order for " + order.name);
  };

  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products addToCart={this.addToCart}></Products>
              </div>
              <div className="sidebar">
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                  createOrder={this.createOrder}
                />
              </div>
            </div>
          </main>
          <footer>All right is reserved</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
