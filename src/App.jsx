import { useState } from 'react'

import './App.css'
import UserContextProvider from '../context/UserContextProvider'
import Login from './login'
import Profile from './Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
