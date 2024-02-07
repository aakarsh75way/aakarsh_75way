import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoggedInUser, LoginResponse, RegisterUserResponse, authType } from "../../../../../utils/types";

const data = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!): {};
const initialState:authType={
    register:{
    username:"",
    email:"",
    password:"",
    isRegistered:false,
    confirmPassword:""
    },
    login : {
        email:"",
        password:""
    },
    isLoading:false,
    LoggedIn:{
        findUser:{
            _id:"",
            email:"",
            role:""
        },
        accessToken:"",
        isLoggedIn:false
    },

}
export const authSlice=createSlice({
    name:"authState",
    initialState,
    reducers:{
        setRegisterForm:(state,action:PayloadAction<{email:string,password:string,confirmPassword:string,username:string}>)=>{
            state.register.email=action.payload.email
            state.register.password=action.payload.password
            state.register.username=action.payload.username
            state.register.confirmPassword=action.payload.confirmPassword

           },
     setLoginForm:(state,action:PayloadAction<{email:string,password:string}>)=>{
      state.login.email=action.payload.email
      state.login.password=action.payload.password
     },
     setRegisterUser:(state,action:PayloadAction<{email:string,password:string,username:string,confirmPassword:string}>)=>{
        state.isLoading=true
       },
       getRegisterSuccess:(state)=>{
        //can perform according to reqirement
        state.register.isRegistered=true
        state.isLoading=false   
        },
     setUser:(state,action:PayloadAction<{email:string,password:string}>)=>{
      state.isLoading=true
     },
     getUserSuccess:(state,action:PayloadAction<LoggedInUser>)=>{
     //can perform according to reqirement
     state.LoggedIn.findUser._id=action.payload.findUser._id
     state.LoggedIn.findUser.email=action.payload.findUser.email
     state.LoggedIn.findUser.role=action.payload.findUser.role
     state.LoggedIn.accessToken=action.payload.accessToken
     state.LoggedIn.isLoggedIn=true
     state.isLoading=false   
     },
     getUserFailure:(state)=>{
     state.isLoading=false
    

     }
    }
})
export const  {setLoginForm,getRegisterSuccess,setRegisterUser,setRegisterForm,setUser,getUserSuccess,getUserFailure}=authSlice.actions
export default authSlice.reducer