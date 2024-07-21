import React, { useEffect, useState } from 'react'
import { auth } from "./config/firebase";
import "./App.css"
import MyRouter from './components/MyRouter.jsx';

export default function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("user: ", user);
  }, [user])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='wrapper'>
      <MyRouter user={user} />
    </div>
  )
}
