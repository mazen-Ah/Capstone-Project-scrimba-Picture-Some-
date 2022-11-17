import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

const Cart = () => {
  const [textBottom, setTextBottom] = useState("Place Order");
  const { cartItems } = useContext(Context);
  const Total = 5.99 * cartItems.length;
  const cartItemsElements = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} />;
  });
  function processing() {
    setTextBottom("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      cartItems.length = 0;
      setTextBottom("Place Order");
    }, 3000);
  }
  return (
    <>
      <Header />
      <div className="p-3">
        <h1 className="text-center text-2xl font-extralight">Check out</h1>
        {cartItemsElements}
        <p className="m-3 text-right font-bold p-3">Total:{Total}</p>
        {cartItems.length > 0 ? (
          <div className="flex justify-center">
            <button
              onClick={processing}
              className="border-2 border-black cursor-pointer p-4 py-3 bg-slate-100"
            >
              {textBottom}
            </button>
          </div>
        ) : (
          <p>You have no items in your cart.</p>
        )}
      </div>
    </>
  );
};

export default Cart;
