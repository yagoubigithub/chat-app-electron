import React, { useState } from 'react'

import './messages.css'
import { useEffect } from 'react';
import moment from 'moment/moment';
const Messages = () => {


    const [text, setText] = useState("");
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

        localStorage.setItem("messages", JSON.stringify(_messages))
        setTimeout(() => {

            setMessages(_messages => [..._messages, replay])
            localStorage.setItem("messages", JSON.stringify(_messages))

        }, 2000)

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
                    {messages.map((message, index) => {
                        return (<p key={index} className={`message__content ${message.type}`}>{message.text} 
                        
                        <p cassName={`date ${message.type === 'message' ? 'text-white' : ''}`}>{moment(message.date).fromNow()}</p>
                        </p>)
                    })}
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