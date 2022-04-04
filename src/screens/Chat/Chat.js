import { useEffect, useRef, useState } from "react";
import { ChatList } from "../../components/ChatList/ChatList";
import { Form } from "../../components/Form/Form";
import { AUTHORS } from "../../utils/constants";
import "../Chat.css";
import { useParams } from "react-router-dom";
import { MessageList } from "../../components/MessageList/MessageList";



export const Chat = () => {

  const chats = [         //здесь хранится массив дилогов
  {name: "Виктория",
    id: "chat1",
  },
  {
    name: "Евгений",
    id: "chat2",
  },
  {
    name: "Иван",
    id: "chat3",
  },
  {
    name: "Марина",
    id: "chat4",
  },
];

const initMessages = {  //все диалоги изначально - пустые массивы
  chat1: [],
  chat2: [],
  chat3: [],
  chat4: [],
};


    const { id } = useParams(); //хук, определяет параметр path(id) в адресной строке и записывает его в объект
    const [messages, setMessages] = useState(initMessages);   //изначальное значение дилогов  - пустые массивы
    const timeout = useRef();  //хук таймаута
  
    useEffect(() => {
      const lastMessage = messages[id]?.[messages[id]?.length - 1];
      if (lastMessage?.author === AUTHORS.human) {  //проверка (чтобы последнее сообщение было от human) и ответ робота через 4 секунды
        timeout.current = setTimeout(() => {
          addMessage({
            author: AUTHORS.robot,  
            text: "Привет! Чем я тебе могу помочь?",
            id: `msg-${Date.now()}`,
          });
        }, 4000);
      }

      return () => {
        clearTimeout(timeout.current);
      };
    }, [messages]);  // чистим таймаут
  
  
    const addMessage = (newMsg) => {
          setMessages({ ...messages, [id]: [...messages[id], newMsg] });  //добавление сообщения
    }

    const sendMessage = (text) => {  //эта функция срабатывает при нажатии на форму и вызывает  addMessage (передается: автор - human, введенный текст + уник. ключ)
      addMessage ({
        author: AUTHORS.human,
        text,
        id: `msg-${Date.now()}`
      })
    }
  
    return (  // рендер открытого диалога + чатов (также проверка: выбран ли с кем-то диалог..)
      <>
  
        <div className="Chat">

         { id &&
        ( 
         <div> 
          <MessageList messages={messages[id]}/> 
          <Form onSubmit={sendMessage} />  
          </div>
        )}

        </div>
  
  
        <div >           
          <ChatList  />
        </div>

      </>
    );
  }