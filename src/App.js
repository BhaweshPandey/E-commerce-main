import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AboutPage from "./pages/AboutPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider, useUser } from "./context/UserContext"; // Import UserProvider
import ProductCategory from "./pages/ProductCategory";
import NotFoundPage from "./components/NotFound";
function App() {
  return (
    <UserProvider> {/* Wrap everything with UserProvider */}
      <Router>
        
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow bg-gray-100">
                <Routes>
                  <Route path="/" element={<ProtectedRoute><Products /></ProtectedRoute>}/>
                  <Route path="/product/:id" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
                  <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                  <Route path="/about" element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
                  <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
                  <Route path="/category/:id" element={<ProtectedRoute><ProductCategory /></ProtectedRoute>} />
                  <Route path="/login" element={<LoginRoute><LoginPage /></LoginRoute>} />
                  <Route path="*" element={<NotFound><NotFoundPage /></NotFound>} />
                </Routes>
              </main>
              <Footer />
            </div>
      </Router>
    </UserProvider>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    console.log("User inside ProtectedRoute:", user); // Log the user whenever it changes
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <ProductsProvider>
    <CartProvider>
    <Header />
      {children}
      </CartProvider>
    </ProductsProvider>
          
    </>
  );
};



const LoginRoute = () => {
  const { user } = useUser();

  useEffect(() => {
    console.log("User inside LoginRoute:", user); // Log the user whenever it changes
  }, [user]);

  if (user) {
    return <Navigate to="/" />; // If user is logged in, redirect to home page
  }

  return <LoginPage />;
};



const NotFound = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    console.log("User inside ProtectedRoute:", user); // Log the user whenever it changes
  }, [user]);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      {children}
    </>
  );
};