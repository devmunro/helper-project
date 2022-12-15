import React from "react";
import Signin from "./components/Home Page/Signin";
import Signup from "./components/Home Page/Signup";
import Account from "./components/Account/Account";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Account/ProtectedRoute";
import NavBar from "./components/NavBar/navBar";
import SearchHelp from "./components/SearchFilter/SearchFunction";
import PostHelp from "./components/Account/Add Job/PostJob";
import Success from "./components/Account/Add Job/Sucess";
import { DatabaseProvider } from "./context/DatabaseContext";
import SinglePostPage from "./components/SearchFilter/singlePostPage";
import { AppliedProvider } from "./context/AppliedContext";
import Responses from "./components/Account/responses";


const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <DatabaseProvider>
          <AppliedProvider>
            <NavBar />

            <Routes>
              <Route exact path="/helper-project/" element={<Signin />} />

              <Route path="/helper-project/signup" element={<Signup />} />
              <Route
                path="/helper-project/account/search-help/:id"
                element={<SinglePostPage />}
              />
              <Route
                path="/helper-project/account/search-help/:id/response"
                element={<Responses />}
              />
              <Route path="/helper-project/account">
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <Account />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/helper-project/account/post-help"
                  element={
                    <ProtectedRoute>
                      <PostHelp />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/helper-project/account/search-help"
                  element={
                    <ProtectedRoute>
                      <SearchHelp />
                    </ProtectedRoute>
                  }
                ></Route>
              </Route>

              <Route path="/helper-project/success" element={<Success />} />
            </Routes>

          </AppliedProvider>
        </DatabaseProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
