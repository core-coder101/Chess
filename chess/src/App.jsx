import React, { useEffect, useState } from 'react'
import { auth } from "./config/firebase";
import "./App.css"
import MyRouter from './components/MyRouter.jsx';
import {useAuthState} from 'react-firebase-hooks/auth';

export default function App() {

  const [user] = useAuthState(auth)

  useEffect(() => {
    console.log("user: ", user);
  }, [user])
  return (
    <div className='wrapper'>
      <MyRouter user={user} />
    </div>
  )
}
