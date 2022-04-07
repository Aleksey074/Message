import { Link } from "react-router-dom";
import "./ChatList.css";

const chats = [         //здесь хранится массив дилогов
  {
    name: "Виктория",
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

export const ChatList = () => (
  <>
    <div className="chat-list">  
      {chats.map((chat) => (
        <Link className="chat-item" to={`/chat/${chat.id}`} key={chat.id}>
          {chat.name}
        </Link>
      ))}
    </div>
  </>
);