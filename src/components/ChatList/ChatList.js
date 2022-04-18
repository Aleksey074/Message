import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { initMessagesForChat } from "../../store/messages/actions";
import { clearMessages } from "../../store/messages/actions";
import { selectChats } from "../../store/chats/selectors";
import { addChat } from "../../store/chats/actions";
import { deleteChat } from "../../store/chats/actions";
import { Form } from "../Form/Form";
import "./ChatList.css";



export const ChatList = ( ) => {    

  const chats = useSelector(selectChats);
  const dispatch = useDispatch();


  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };

    dispatch(addChat(newChat));
    dispatch(initMessagesForChat(newChat.id));
  }

  const handleRemoveChat = (id) => {
    dispatch(deleteChat(id));;
    dispatch(clearMessages(id));
  }

  return (
    <>
      <div className="chat-list">
        {chats.map((chat) => (

          <div className="chat-item" key={chat.id}>

            <Link className="chat-link" to={`/chat/${chat.id}`} >
              {chat.name}
            </Link>
            <button className="chat-delete" onClick={() => handleRemoveChat(chat.id)}>Х</button>
          </div>
        ))}



      </div>

      <Form onSubmit={handleSubmit} />
      <Outlet />

    </>
  );
};