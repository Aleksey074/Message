//import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import { Message } from "./components/Message/Message"
import { Form } from './components/Form/Form';
//import { Counter } from "./components/Message/example/example.js"


const MessageList = () => {

  const name = "Я";

  const [messages, setMessages] = useState([]);   //изначальное значение - Пустой массив

  useEffect(() => {

    const lastMessage = messages[messages.length - 1]  //проверка последнего сообщения

    if (lastMessage?.author !== "Робот" && messages.length) {  //проверяем: кто был автором последнего сообщения
      setMessages([...messages, { text: "Привет! Я виртуальный помощник. Чем я могу тебе помочь?", author: "Робот" }])

    }

  }, [messages]);

  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: name }])
  }

  return (
    <div className="App" style={{ backgroundColor: "grey" }}>
      {messages.map((msg) => (                            //рендер списка сообщений через map
        <Message text={msg.text} author={msg.author} />
      ))}
      <Form onSubmit={addMessage} />
    </div>
  );
}

export default MessageList;
