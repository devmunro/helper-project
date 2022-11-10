import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import {Routes,Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import NavBar from './components/NavBar/navBar';
import Form from './components/Form/Form';
const App=()=>{
  return (
    <div className="App">
      <NavBar/>
      <Form/>
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
    </div>
  );
}

export default App;
