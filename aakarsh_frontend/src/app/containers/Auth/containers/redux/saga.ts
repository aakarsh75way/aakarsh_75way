import {all, call,put, takeLatest} from "redux-saga/effects"
import { getRegisterSuccess, getUserFailure, getUserSuccess } from "./slice"
import { LoggedInUser, RegisterUserResponse } from "../../../../../utils/types"
import { PayloadAction } from "@reduxjs/toolkit";


function* workGetUserFetch(action: PayloadAction<{ email: string; password: string }>){
    try{
      const { email, password } = action.payload;
      const response: Response = yield call(() => fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }));
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const user: LoggedInUser = yield response.json();
        console.log("User",user)
   if(user){
    localStorage.setItem("user", JSON.stringify({ accessToken: user.accessToken, role: user.findUser.role }));
    yield put(getUserSuccess(user))
   }
    }catch(err){
     console.log(err)
    yield put(getUserFailure())

    }
}
function* workRegisterUser(action: PayloadAction<{ email: string; password: string,username:string,confirmPassword:string }>){
console.log("yaha aya ma register ma")
  try{
    const { email, password,username,confirmPassword } = action.payload;
    const response: Response = yield call(() => fetch('http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password,username,confirmPassword }),
    }));

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const user: RegisterUserResponse = yield response.json();
 if(user.message==="Successfully Registered"){
  yield put(getRegisterSuccess())
 }
  }catch(err){
   console.log(err)
  yield put(getUserFailure())

  }
}
function* loginSaga(){
    yield  takeLatest("authState/setUser",workGetUserFetch)
    yield  takeLatest("authState/setRegisterUser",workRegisterUser)

}
export function* rootSaga() {
    yield all([
      loginSaga(),
    ]);
  }