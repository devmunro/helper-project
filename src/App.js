import React from "react";
import Signin from "./components/Account/Signin";
import Signup from "./components/Account/Signup";
import Account from "./components/Account/Account";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Account/ProtectedRoute";
import NavBar from "./components/NavBar/navBar";
import SearchHelp from "./components/SearchFilter/SearchFunction";
import PostHelp from "./components/Add Job/PostJob";
import Success from "./components/Add Job/Sucess";
import { DatabaseProvider } from "./context/DatabaseContext";
import SinglePostPage from "./components/SearchFilter/singlePostPage";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <DatabaseProvider>
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
              }
            />
            <Route
              path="/account/post-help"
              element={
                <ProtectedRoute>
                  <PostHelp />
                </ProtectedRoute>
              }
            />

            <Route
              path="/account/search-help"
              element={
                <ProtectedRoute>
                  <SearchHelp />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route exact path="/:id" element={<SinglePostPage />}></Route>
          <Route path="/success" element={<Success />} />
        </Routes>
        </DatabaseProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
