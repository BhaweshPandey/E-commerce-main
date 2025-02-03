import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
  const { id } = useParams(); // Extracting the product ID from the URL parameters

  const products = useContext(ProductsContext); // Accessing the products data from context
  const { addToCart } = useContext(CartContext); // Accessing the addToCart function from the CartContext

  const [isAnimating, setIsAnimating] = useState(false); // State to handle the animation effect during adding to cart

  // Finding the product that matches the ID from the URL
  const product = products.find((p) => p.id === parseInt(id));

  // Function to handle adding the product to the cart with an animation
  const handleAddToCart = () => {
    setIsAnimating(true); // Start the animation

    setTimeout(() => {
      addToCart(product); // Add product to cart after animation
      setIsAnimating(false); // Stop the animation
    }, 1000); // 1 second for the animation duration
  };

  // If the product is not found (e.g., invalid ID), show a message
  if (!product) {
    return <h1>Product not found</h1>;
  }

return (
  <div className="container mx-auto px-4 pt-3 mt-28">
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg p-6">

      {/* Back to Products Button */}
      <Link to="/" className="mb-4  text-blue-600 hover:text-blue-800 font-semibold flex items-center w-max">
        <svg
          fill="#000000"
          width="24px"
          height="24px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z" />
        </svg>
        <span className="text-lg">Back to Products</span>
      </Link>

      {/* Product Details Section */}
      <div className="flex flex-col sm:flex-row h-full">
        {/* Image Section */}
        <div className="flex items-center justify-center sm:w-1/2 mb-6 sm:mb-0">
          <img
            src={product.image}
            alt={product.title}
            className="w-96 h-96 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="sm:w-1/2 sm:pl-10 flex flex-col justify-between h-full">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
            <p className="text-base text-gray-600 mb-6">{product.description}</p>

            {/* Rating Section */}
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {"★".repeat(Math.floor(product.rating.rate))}
                {"☆".repeat(5 - Math.floor(product.rating.rate))}
              </span>
              <span className="ml-2 text-sm text-gray-500">({product.rating.count} reviews)</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center mb-6">
              <p className="text-3xl font-semibold text-gray-900">
                ${(product.price - product.price * 0.1).toFixed(2)}{" "}
                <span className="text-sm text-gray-500 ml-2 line-through">
                  ${product.price}
                </span>
                <span className="text-sm text-green-500 ml-2">(10% OFF)</span>
              </p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 w-[180px]  text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={isAnimating}
          >
            <span className="flex items-center gap-2">
              <svg
                className={isAnimating ? "animate-spin" : ""}
                fill="#ffffff"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z" />
              </svg>
              {!isAnimating ? "Add to Cart" : ""}
            </span>
          </button>

          {/* Category Section */}
          <p className="text-lg text-gray-600 mt-6 font-semibold">Category: {product.category}</p>
        </div>
      </div>
    </div>
  </div>
);

  

};

export default ProductPage;
