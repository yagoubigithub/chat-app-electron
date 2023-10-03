import React from 'react'

import './messages.css'
const Messages = () => {
    return (
        <div id='messages-container'>

            <div className="messages-header">
                <img src="./img/profile.jfif" alt="" />
                <h3>Darry</h3>
            </div>

            <div className="messages-list">

            </div>
            <div id='message-input-container'>
                <textarea name="message" id="message-input" placeholder='Message' ></textarea>


                <button id='send-btn'><img src="./img/arrow-top.png" alt="" /></button>
            </div>
        </div>
    )
}

export default Messages