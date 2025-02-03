import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [hold, setHold] = useState(false);

  const addToCart = (product) => {
    console.log("Adding to cart.666..", product);
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setHold(true);
    setTimeout(() => {
      setHold(false);
    }, 1000);

    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === productId) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return null;
            }
          }

          return item;
        })
        .filter((item) => item !== null);
    });
  };

  const deleteFromCart = (productId) => {
    setHold(true);
    setTimeout(() => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
      setHold(false);
    }, 1000);
  };

  const deleteAllFormCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        deleteFromCart,
        deleteAllFormCart,
        hold,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
