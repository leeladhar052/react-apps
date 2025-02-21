import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./appwrite/store/authSlice"



function App() {
  const [loading, setLoading]= useState(true)
  const dispatch = useDispatch()

  useEffect(() =>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div></div>
  ) : null
  
}

export default App
