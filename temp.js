import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const App = () => {
  const handleSuccess = (response) => {
    console.log("Login Success:", response);
  };

  const handleFailure = (error) => {
    console.log("Login Failed:", error);
  };
  useEffect(() => {
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div>
      <h1>aaaaaaaaaaaa
          
          </h1><h1>aaaaaaaaaaaa
          
          </h1><h1>aaaaaaaaaaaa
          
          </h1><h1>aaaaaaaaaaaa
          
          </h1>
        <h2>Login with Google</h2>
        <GoogleLogin onSuccess={handleSuccess} onError={handleFailure} />
      </div>
    </GoogleOAuthProvider>
  );
};

export default App;
