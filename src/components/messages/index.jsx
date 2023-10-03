import React, { useState } from 'react'

import './messages.css'
import { useEffect } from 'react';
import moment from 'moment/moment';
const Messages = () => {


    const [text, setText] = useState("");
    const [wait , setWait] = useState(false)
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(JSON.parse(localStorage.getItem("messages")))
    }, [])
    const send = () => {
        const message = { text, date: new Date(), type: 'message' };



        const replay = {
            text: "this a automativaly replay we can change this later 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'",
            date: new Date(),
            type: "replay"
        }

        const _messages = [...messages]
        _messages.push(message)
        setMessages(_messages)

        setWait(true)
        localStorage.setItem("messages", JSON.stringify(_messages))
        setTimeout(() => {
            setWait(false)
            setMessages(_messages => [...JSON.parse(localStorage.getItem("messages")), replay])
            localStorage.setItem("messages", JSON.stringify(_messages))

        }, 1000)

        setText("")
    }
    return (
        <div id='messages-container'>

            <div className="messages-header">
                <img src="./img/profile.jfif" alt="" />
                <h3>Darry</h3>
            </div>

            <div id="messages-list">


                <div className="inner">
                   <>
                   
                   
                   {messages.map((message, index) => {
                        return (<p key={index} className={`message__content ${message.type}`}>{message.text} 
                        
                        <p className={`date ${message.type === 'message' ? 'text-white' : ''}`}>{moment(message.date).fromNow()}</p>
                        </p>)
                    })}
                    
                   {wait &&  <p className={`message__content wait `}>


                   <div class="is-typing">
      <div class="jump1"></div>
      <div class="jump2"></div>
      <div class="jump3"></div>
      <div class="jump4"></div>
      <div class="jump5"></div>
   </div>
                    </p>}
                    </>

                </div>
                
            </div>
            <div id='message-input-container'>
                <textarea onChange={(e) => setText(e.target.value)}
                    value={text} name="message" id="message-input" placeholder='Message' ></textarea>


                <button id='send-btn'><img src="./img/arrow-top.png" alt="" onClick={send} /></button>
            </div>
        </div>
    )
}

export default Messages