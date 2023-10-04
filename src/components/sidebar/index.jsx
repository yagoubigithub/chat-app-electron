import React, { useEffect, useState } from 'react'

import './sidebar.css'
const Sidebar = () => {

  const profile = JSON.parse(localStorage.getItem("profile"))
  
  const  [messages  ,  setMessages] = useState(JSON.parse(localStorage.getItem("messages")))
  useEffect(()=>{
    setInterval(()=>{
      setMessages(me=>JSON.parse(localStorage.getItem("messages")))
    } , 2000)
  })
  return (
    <div id='sidebar'>

      <ul className='chat-list'>

        <li className="chat-item">

          <img src="./img/profile.jfif" alt=""  />
         
         <div className='chat-item-content-text'>
        
        <div className='chat-item-top'>
        <p>{profile.firstname}</p>
          <p>6:10 AM</p>
        </div>
         <p> {messages.length >= 1 && <small>{messages[messages.length -1].text}</small>}</p>
         </div>

        </li>

      </ul>
    </div>
  )
}

export default Sidebar