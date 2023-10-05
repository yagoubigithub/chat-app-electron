import React, { useState } from 'react'

import './messages.css'
import { useEffect } from 'react';
import moment from 'moment/moment';
const Messages = () => {

    const profile = JSON.parse(localStorage.getItem("profile"))
    const [text, setText] = useState("");
    const [wait, setWait] = useState(false)
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages(JSON.parse(localStorage.getItem("messages")))
    }, [])
    const send = () => {
        const message = { text, date: new Date(), type: messages.length % 2 !== 0 ? "replay"  : "message"};



     

        const _messages = [...messages]
        _messages.push(message)
        setMessages(_messages)

        setWait(false)
        localStorage.setItem("messages", JSON.stringify(_messages))
       

        setText("")
    }
    return (
        <div id='messages-container'>

            <div className="messages-header">
                <img src="./img/profile.jfif" alt="" />
                <h3>{profile.firstname}</h3>
            </div>

            <div id="messages-list">


                <div className="inner">
                    <>


                        {messages.map((message, index) => {
                            return (<div key={index} className={`message__content ${message.type}`}>{message.text}

                                <div className={`date ${message.type === 'message' ? 'text-white' : ''}`}>{moment(message.date).fromNow()}</div>
                            </div>)
                        })}

                        {wait && <div className={`message__content wait `}>


                            <div className="is-typing">
                                <div className="jump1"></div>
                                <div className="jump2"></div>
                                <div className="jump3"></div>
                                <div className="jump4"></div>
                                <div className="jump5"></div>
                            </div>
                        </div>}
                    </>

                </div>

            </div>
            <div id='message-input-container'>
                <input type='text' onChange={(e) => setText(e.target.value)}
                    value={text} name="message" id="message-input" placeholder='Message' onKeyDown={(e)=>{

                        setWait(messages.length % 2 !== 0)
                        if (e.key === 'Enter') 
                        {
                           send()
                        }
                    }} />


                <button id='send-btn'><img src="./img/arrow-top.png" alt="" onClick={send} /></button>
            </div>
        </div>
    )
}

export default Messages