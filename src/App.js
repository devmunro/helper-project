import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import {Routes,Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
const App=()=>{
  return (
    <div>
       <h1 className="text-center text-3xl font-bold">
         Initial Signup page
       </h1>
       <AuthContextProvider>
       <Routes>
          <Route 
            exact path="/"
            element={<Signin/>}
          />

          <Route
             path="/signup"
             element={<Signup/>}
          />          

          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account/>
              </ProtectedRoute>
            }
          />
       </Routes>
       </AuthContextProvider>
    </div>
  );
}

export default App;
