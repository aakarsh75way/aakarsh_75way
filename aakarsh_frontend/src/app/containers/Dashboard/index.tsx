import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../rootReducer'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const data=localStorage.getItem("user")
   if(data!==null){
    const user = JSON.parse(data);
    if(user.accessToken){
      if(user.role==="admin"){
       return <AdminDashboard />
      }
      if(user.role==="user"){
        return <UserDashboard />
      }
    }
   }
    
    return   <Navigate to="/auth/login" />
}

export default Dashboard