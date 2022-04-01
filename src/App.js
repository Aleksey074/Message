import './App.css';
import React, { useEffect, useState, useRef } from 'react';
import { Message } from "./components/Message/Message"
import { Form } from './components/Form/Form';
import { ChatList } from './components/ChatList/ChatList';
import { AUTHORS } from "./utils/constans";


const MessageList = () => {

  const [messages, setMessages] = useState([]);   //изначальное значение - Пустой массив
  const timeout = useRef();


  const [chatList, setChatList] = useState([
    { id: `cht-1`, name: 'Людмила' },
    { id: `cht-2`, name: 'Евгений' },
    { id: `cht-3`, name: 'Василий' },
  ]);



  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        setMessages([...messages, { text: "Привет, я помогу тебе! Какой у тебя вопрос?", author: AUTHORS.robot, id: `msg-${Date.now()}` }])
      }, 4000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);


  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: AUTHORS.human, id: `msg-${Date.now()}` }])
  }

  return (

    <>

      <div className="App" style={{ backgroundColor: "rgb(0, 255,170)", width: "988px", position: "absolute", right: "0", minHeight: "100vh" }}>
        {messages.map((msg) => (                            //рендер списка сообщений через map
          <Message key={msg.id} text={msg.text} author={msg.author} />
        ))}
        <Form onSubmit={addMessage} />
      </div>


      <div>
        <ChatList sx={{ gridArea: 'chat-list' }} chatList={chatList} />
      </div>

    </>

  );
}


export default MessageList;
