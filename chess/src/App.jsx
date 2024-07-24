import React, { useEffect, useState } from 'react'
import { auth } from "./config/firebase";
import "./App.css"
import MyRouter from './components/MyRouter.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';
import { useDispatch, useSelector } from "react-redux"
import { setUser } from './redux/slices/user.js';

export default function App() {

  const dispatch = useDispatch()
  const [userData, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (userData) {
      const dataToSet = {
        uid: userData.uid,
        displayName: userData.displayName,
        email: userData.email,
        photoUrl: userData.photoURL,
      }
      console.log("dataToSet: ", userData);
      dispatch(setUser(dataToSet));
    }
  }, [userData, dispatch]);

  return (
    <div className='wrapper'>
      <MyRouter />
    </div>
  )
}
