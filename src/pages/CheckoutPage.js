import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CheckoutPage = () => {
  const { deleteAllFormCart } = useContext(CartContext); // Accessing the function to clear the cart after the order is placed

  const handleGoHome = () => {
    deleteAllFormCart(); // Clear the cart when user navigates to home
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
        <p className="text-lg text-gray-700 mb-6">
          We appreciate your business! Your order is being processed, and we will notify you once it's shipped.
        </p>
        <Link
          to="/"
          onClick={handleGoHome} // Now uses the handle function for better clarity
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutPage;
