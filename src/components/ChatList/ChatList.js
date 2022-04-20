import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { initMessagesForChat } from "../../store/messages/actions";
import { clearMessages } from "../../store/messages/actions";
import { selectChats } from "../../store/chats/selectors";
import { addChat } from "../../store/chats/actions";
import { deleteChat } from "../../store/chats/actions";
import { Form } from "../Form/Form";
import "./ChatList.css";
import { useEffect, useState } from "react";
import { chatsRef, getChatRefById } from "../../services/firebase";
import { onValue, set, remove } from "@firebase/database";
import { Link } from "@mui/material";
import { getMsgsRefById } from "../../services/firebase";




export const ChatList = () => {

  const [chats, setChats] = useState([]);
  // const chats = useSelector(selectChats);
  const dispatch = useDispatch();

  const handleSubmit = (newChatName) => {
    const newChat = {
      name: newChatName,
      id: `chat-${Date.now()}`,
    };

    set(getChatRefById(newChat.id), newChat);
    set(getMsgsRefById(newChat.id), { exists: true });
  };

  const handleRemoveChat = (id) => {
    remove(getChatRefById(id));
    set(getMsgsRefById(id), null);
  };

  useEffect(() => {
    const unsubscribe = onValue(chatsRef, (snapshot) => {
      console.log(snapshot.val());
      setChats(Object.values(snapshot.val() || {}));
    });
    return unsubscribe;
  }, []);


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