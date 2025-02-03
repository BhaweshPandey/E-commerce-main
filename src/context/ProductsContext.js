import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext(); // Create a context for the products

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // State to hold the list of products

  useEffect(() => {
    // Function to fetch products from the API
    const fetchProducts = async () => {
      try {
        // Make a request to the API to fetch product data
        const response = await fetch("https://fakestoreapi.com/products");
        // https://api.escuelajs.co/api/v1/products
        const data = await response.json();
        // Set the fetched products in state
        console.log(data);
        setProducts(data); // Accessing the 'products' array from the response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts(); // Call the function to fetch products when the component mounts
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    // Provide the products data to the rest of the application through context
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
