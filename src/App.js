import React from "react";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import NavBar from "./components/NavBar/navBar";
import SearchHelp from "./components/Search_help";
import PostHelp from "./components/Post_help";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Signin />} />

          <Route path="/signup" element={<Signup />} />

          <Route path="/account">
            <Route 
               index             
               element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
               }/>
             <Route
                path="post-help"
                element={<PostHelp/>}
             />

              <Route
                path="search-help"
                element={<SearchHelp/>}
             />
          </Route>     
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
