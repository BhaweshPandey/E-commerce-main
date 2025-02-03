import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Header = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useUser();
  const [totalItem, setTotalItem] = useState(0);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((total, item) => total + item.quantity, 0);
    setTotalItem(total);
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleLogout = () => {
    logout();
    setSelectedCategory("");
    setIsMenuOpen(false);
    navigate("/login");
  };

  const handleNavClick = (path) => {
    setSelectedCategory("");
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-4 w-full fixed z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-3xl font-bold text-white hover:text-gray-200 cursor-pointer transition duration-300 whitespace-nowrap"
          onClick={() => handleNavClick("/")}
        >
          My Shop
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-indigo-700 md:bg-transparent transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 md:items-center p-6 md:p-0">
            <li>
              <Link
                to="/"
                className="block px-6 py-2 md:px-0 hover:underline hover:text-gray-200 transition duration-200"
                onClick={() => handleNavClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="block px-6 py-2 md:px-0 hover:underline hover:text-gray-200 transition duration-200"
                onClick={() => handleNavClick("/cart")}
              >
                Cart ({totalItem})
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-6 py-2 md:px-0 hover:underline hover:text-gray-200 transition duration-200"
                onClick={() => handleNavClick("/about")}
              >
                About
              </Link>
            </li>
            {user && (
              <li>
                <button
                  onClick={handleLogout}
                  className="block px-6 py-2 md:px-0 hover:underline hover:text-gray-200 transition duration-200 focus:outline-none"
                >
                  Logout
                </button>
              </li>
            )}
            <li>
              <select
                className="p-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 w-full md:w-auto"
                value={selectedCategory}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  setSelectedCategory(selectedValue);
                  if (selectedValue === "") {
                    navigate("/");
                  } else {
                    navigate(`/category/${selectedValue}`);
                  }
                }}
              >
                <option value="">All Category</option>
                {category.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
