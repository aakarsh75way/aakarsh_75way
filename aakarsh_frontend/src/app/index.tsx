import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './rootReducer'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './containers/Dashboard';
import LoginPage from './containers/Auth/containers/Loginpage';
import RegisterPage from './containers/Auth/containers/RegisterPage';
import UsersPage from './containers/UsersPage';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/*" element={<Dashboard />} />
              <Route path="/auth/login" element={<LoginPage />} />
              <Route path="/auth/register" element={<RegisterPage />} />
              <Route path="/properties" element={<UsersPage />} />


            </Routes>
      </BrowserRouter>
      )

}

export default App