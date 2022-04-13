import { useRef, useMemo } from "react";
import { Form } from "../../components/Form/Form";
import { AUTHORS } from "../../utils/constants";
import "../Chat.css";
import { useParams, Navigate } from "react-router-dom";
import { MessageList } from "../../components/MessageList/MessageList";
import { useDispatch, useSelector } from "react-redux";
import { selectMessagesByChatId } from "../../store/messages/selectors";
import { addMessageWithReply } from "../../store/messages/actions";



export const Chat = () => { //пропсом принимает messages мз App

  const { id } = useParams(); //хук, определяет параметр path(id) в адресной строке и записывает его в объект
  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]); //этот хук отслеживает изменение завис-ти 
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();


  const timeout = useRef();  //хук таймаута

  const sendMessage = (text) => {  //эта функция срабатывает при нажатии на форму и вызывает  addMessage (передается: автор - human, введенный текст + уник. ключ)
    dispatch(
      addMessageWithReply(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`
        },
        id
      )
    );
  };

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

