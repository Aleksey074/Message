import { useEffect, useRef, useState } from "react";
import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { AUTHORS } from "../../utils/constants";
import "../Chat.css";
import { useParams, Navigate } from "react-router-dom";
import { MessageList } from "../../components/MessageList/MessageList";



export const Chat = ( {messages, addMessage} ) => { //пропсом принимает messages мз App

    const { id } = useParams(); //хук, определяет параметр path(id) в адресной строке и записывает его в объект
    const timeout = useRef();  //хук таймаута
  
    useEffect(() => {
      const lastMessage = messages[id]?.[messages[id]?.length - 1];
      if (lastMessage?.author === AUTHORS.human) {  //проверка (чтобы последнее сообщение было от human) и ответ робота через 4 секунды
        timeout.current = setTimeout(() => {
          addMessage({
            author: AUTHORS.robot,  
            text: "Привет! Чем я тебе могу помочь?",  
            id: `msg-${Date.now()}`,
          }, id);  //id - второй агрумент id чата из useParams
        }, 4000);
      }

      return () => {
        clearTimeout(timeout.current);
      };
    }, [messages]);  // чистим таймаут
  


    const sendMessage = (text) => {  //эта функция срабатывает при нажатии на форму и вызывает  addMessage (передается: автор - human, введенный текст + уник. ключ)
      addMessage ({
        author: AUTHORS.human,
        text,
        id: `msg-${Date.now()}`
      },
      id
      );
    };

    if (!messages[id]) {
      return <Navigate to="/chat" replace />;
    }
  
    return (  // рендер открытого диалога + чатов (также проверка: выбран ли с кем-то диалог..)
      <>
  
        <div className="Chat">

         
         <div> 
          <div className="msg-list"><MessageList  messages={messages[id]}/></div>  
          <Form onSubmit={sendMessage} />  
          </div>
        

        </div>
  
  
              

      </>
    );
  }

  