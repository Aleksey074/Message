import { useRef, useMemo, useState, useEffect } from "react";
import { Form } from "../../components/Form/Form";
import { AUTHORS } from "../../utils/constants";
import { useParams, Navigate } from "react-router-dom";
import { MessageList } from "../../components/MessageList/MessageList";
import { useDispatch, useSelector } from "react-redux";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { addMessageWithReply } from "../../store/messages/actions";
import "./Chat.css";
import { onValue, push } from "firebase/database";
import { getMsgsListRefById, getMsgsRefById } from "../../services/firebase";



export const Chat = () => { //пропсом принимает messages мз App

  const { id } = useParams();

  const [messages, setMessages] = useState([]);

  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]);
  const dispatch = useDispatch();

  const sendMessage = (text) => {
    push(getMsgsListRefById(id), {
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    const unsubscribe = onValue(getMsgsRefById(id), (snapshot) => {
      const val = snapshot.val();
      if (!snapshot.val()?.exists) {
        setMessages(null);
      } else {
        console.log(val.messageList);
        setMessages(Object.values(val.messageList || {}));
      }
    });

    return unsubscribe;
  }, [id]);

  if (!messages) {
    return <Navigate to="/chat" replace />;
  }


  return (  // рендер открытого диалога + чатов (также проверка: выбран ли с кем-то диалог..)
    <>

      <div className="Chat">


        <div>
          <div className="msg-list"><MessageList messages={messages} /></div>
          <Form onSubmit={sendMessage} />
        </div>


      </div>




    </>
  );
}

