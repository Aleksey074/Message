import { useEffect, useRef, useMemo } from "react";
import { Form } from "../../components/Form/Form";
import { AUTHORS } from "../../utils/constants";
import "../Chat.css";
import { useParams, Navigate } from "react-router-dom";
import { MessageList } from "../../components/MessageList/MessageList";
import { useDispatch, useSelector } from "react-redux";
import { selectMessages, selectMessagesByChatId } from "../../store/messages/selectors";
import { addMessage } from "../../store/messages/actions";



export const Chat = () => { //пропсом принимает messages мз App

  const { id } = useParams(); //хук, определяет параметр path(id) в адресной строке и записывает его в объект
  const getMessages = useMemo(() => selectMessagesByChatId(id), [id]); //этот хук отслеживает изменение завис-ти 
  const messages = useSelector(getMessages);
  const dispatch = useDispatch();


  const timeout = useRef();  //хук таймаута

  const sendMessage = (text) => {  //эта функция срабатывает при нажатии на форму и вызывает  addMessage (передается: автор - human, введенный текст + уник. ключ)
    dispatch(
      addMessage(
        {
          author: AUTHORS.human,
          text,
          id: `msg-${Date.now()}`
        },
        id
      )
    );
  };


  useEffect(() => {
    const lastMessage = messages?.[messages?.length - 1];
    if (lastMessage?.author === AUTHORS.human) {  //проверка (чтобы последнее сообщение было от human) и ответ робота через 4 секунды
      timeout.current = setTimeout(() => {
        dispatch(
          addMessage({
            author: AUTHORS.robot,
            text: "Привет! Чем я тебе могу помочь?",
            id: `msg-${Date.now()}`,
          }, id));  //id - второй агрумент id чата из useParams
      }, 4000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);  // чистим таймаут




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

