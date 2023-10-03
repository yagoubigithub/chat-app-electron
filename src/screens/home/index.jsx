import React, { useEffect } from 'react'
import Sidebar from '../../components/sidebar'
import Messages from '../../components/messages'
import { Navigate, useNavigate } from 'react-router-dom'

const Home = () => {


  const profile = localStorage.getItem("profile");
  if (!profile) {
   return <Navigate to='/' />
    
  }else {
     return (
    <div id='home'>

      <Sidebar />
      <Messages />
    </div>
  )
  }
 
 
}

export default Home