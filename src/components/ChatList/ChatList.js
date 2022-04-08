import { width } from "@mui/system";
import { Children } from "react";
import { Link } from "react-router-dom";
import { Form } from "../Form/Form";
import "./ChatList.css";

 

export const ChatList = ( {chats, addChat, deleteChat} ) =>   {    //пропсом принимает chats из App
  
  
  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`
    }
    addChat(newChat)
  }

  const handleDelete = (id) => {

  }

  
  return (
  <>
    <div className="chat-list">  
      {chats.map((chat) => (

        <div className="chat-item">

        <Link className="chat-link" to={`/chat/${chat.id}`} key={chat.id}>
          {chat.name}
        </Link>
        <button className="chat-delete" onClick={() => deleteChat(chat.id)}>Х</button>
        </div>
      ))}



    </div>

    <div className="chat-form"><Form onSubmit={handleSubmit}>{Children}</Form></div>

  </>
  );
};