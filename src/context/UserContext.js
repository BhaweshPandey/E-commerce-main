import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

// Create a Context for User Authentication
const UserContext = createContext();

// Custom hook to access the user context
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider component to provide state throughout the app
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Check if the token is stored in the cookie and decode it to get user data
  const getUserFromToken = () => {
    const token = Cookies.get("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return decoded; // Return the decoded user information
      } catch (error) {
        console.error("Token decoding failed", error);
      }
    }
    return null;
  };

  // Set user state based on the token in the cookie when the app loads
  useEffect(() => {
    const storedUser = getUserFromToken();
    setUser(storedUser);
    setIsLoading(false); // Set loading to false after state is set
  }, []);

  // Login function to store user data and token
  const login = (token, userData) => {
    Cookies.set("authToken", token, { expires: 7, secure: true });
    setUser(userData);
  };

  // Logout function to reset user data and clear token from cookies
  const logout = () => {
    Cookies.remove("authToken");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {!isLoading ? children : <div>Loading...</div>} {/* Show loading indicator */}
    </UserContext.Provider>
  );
};
