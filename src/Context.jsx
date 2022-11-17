import { React, createContext, useEffect, useState } from "react";
const Context = createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function toggleFavorite(id) {
    const updateArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updateArr);
  }
  function addToCart(newItem) {
    setCartItem((prevItems) => [...prevItems, newItem]);
  }
  function removeFromCart(id) {
    setCartItem((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  console.log(cartItems);
  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        addToCart,
        removeFromCart,
        cartItems,
      }}
    >
      {children}
    </Context.Provider>
  );
}
export { ContextProvider, Context };
