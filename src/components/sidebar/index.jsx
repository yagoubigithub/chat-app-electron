import React from 'react'

import './sidebar.css'
const Sidebar = () => {
  return (
    <div id='sidebar'>

      <ul className='chat-list'>

        <li className="chat-item">

          <img src="./img/profile.jfif" alt=""  />
         
         <div className='chat-item-content-text'>
        
        <div className='chat-item-top'>
        <p>Darry</p>
          <p>6:10 AM</p>
        </div>
          <p><small>but I think mostly they targeting...</small></p>
         </div>

        </li>

      </ul>
    </div>
  )
}

export default Sidebar