import { Link, Outlet } from "react-router-dom";
import { Form } from "../Form/Form";
import "./ChatList.css";



export const ChatList = ({ chats, addChat, deleteChat }) => {    //пропсом принимает chats из App


  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`
    }
    addChat(newChat)
  }




  return (
    <>
      <div className="chat-list">
        {chats.map((chat) => (

          <div className="chat-item" key={chat.id}>

            <Link className="chat-link" to={`/chat/${chat.id}`} >
              {chat.name}
            </Link>
            <button className="chat-delete" onClick={() => deleteChat(chat.id)}>Х</button>
          </div>
        ))}



      </div>

      <Form onSubmit={handleSubmit} />
      <Outlet />

    </>
  );
};