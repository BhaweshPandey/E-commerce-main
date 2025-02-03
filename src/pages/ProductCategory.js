import React, { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import Product from "../components/Product";
const ProductCategory = () => {
  const { id } = useParams(); // Extracting the product ID from the URL parameters
  useEffect(() => {
    console.log("Product ID:", id);
  }, [id]);
  const products = useContext(ProductsContext); // Accessing the products data from context

  const [searchQuery, setSearchQuery] = useState(""); // State for managing the search query input
  const [sortOrder, setSortOrder] = useState(""); // State for managing the selected sort order
 const [categoryProducts, setCategoryProducts] = useState([]); // State to hold the list of products
 const [originalCategoryProducts, setOriginalCategoryProducts] = useState([]); // State to hold the list of products
  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.category === id // Filtering products by title based on search query
    );
    setCategoryProducts(filteredProducts);
    setOriginalCategoryProducts(filteredProducts);
  },[id, products])

const shortProduct = (value) => {
    setSortOrder(value);
    // add filter for high to low and low to high
    setCategoryProducts((prev)=> [...prev].sort((a, b) => {
      if (value === "lowToHigh") {
        return a.price - b.price; // Sort by price low to high
      } else if (value === "highToLow") {
        return b.price - a.price; // Sort by price high to low
      }
      return 0; // No sorting if no order selected
    }));
  }; 

const searchByCategory = (value) => {
    setSearchQuery(value);
    const filteredProducts = originalCategoryProducts.filter(
      (product) => product.title.toLowerCase().includes(value.toLowerCase()) && product.category === id // Filtering products by title based on search query
    );
    setCategoryProducts(filteredProducts);
}
  return (
    <div className="container mx-auto mt-28 mb-28 px-4">
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
          All Products
        </div>
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              placeholder="Search products..."
              className="p-3 pl-10 border border-gray-300 rounded-lg w-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              value={searchQuery}
              onChange={(e) => searchByCategory(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M11.742 10.742a7 7 0 1 1-1.414-1.414 7 7 0 0 1 1.414 1.414zM9 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
  
          <div className="relative w-full sm:max-w-xs">
            <select
              className="p-3 border border-gray-300 rounded-lg shadow-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              value={sortOrder}
              onChange={(e) => shortProduct(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
  
  

};

export default ProductCategory;
