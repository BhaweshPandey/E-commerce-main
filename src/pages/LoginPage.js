import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useUser } from "../context/UserContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoginPage = () => {
  const { login } = useUser(); // Access login function from UserContext
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSuccess = (response) => {
    console.log("Login Success:", response);

    // Get the token and user data from the Google response
    const token = response.credential; // The token received from Google login
    const userData = jwtDecode(token); // Decode the token to get user info
    console.log("User Data:", userData);

    // Store the token in the cookie and user data in the state
    login(token, userData); // Call the login function from the context

    // After successful login, navigate to a different page (e.g., homepage)
    navigate("/"); // Redirect to the homepage or wherever you'd like
  };

  const handleFailure = (error) => {
    console.log("Login Failed:", error);
  };

  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-600">
        <div className="bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg max-w-sm w-full">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Welcome to My Shop</h1>
          <h2 className="text-lg text-gray-600 mb-8 text-center">Log in with Google to continue</h2>
          
          {/* Google Login Button */}
          <div className="flex justify-center mb-6">
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleFailure}
              useOneTap
              shape="pill"
              width="auto"
              className="w-full max-w-xs bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition duration-200"
            />
          </div>
  
          {/* Optional Footer */}
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>By logging in, you agree to our <span className="text-blue-600 cursor-pointer hover:underline">Terms of Service</span> and <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>.</p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
