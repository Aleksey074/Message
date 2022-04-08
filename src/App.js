import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { Chat } from './screens/Chat/Chat';
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { store } from "./store";
import { useState } from 'react';
import { ChatList } from './components/ChatList/ChatList';


const initialChats = [         //здесь хранится массив дилогов
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

const initMessages = initialChats.reduce((acc, chat) => {
  acc[chat.id] = []; 
  return acc;   
}, {}); //из initialChats получаем объект, для каждого id чата - будет пустой массив

function App() {

const [chats, setChats] = useState(initialChats);  //изначальное состояние чатов = initialChats
const [messages, setMessages] = useState(initMessages);

const addMessage = (newMsg, id) => {
   setMessages({ ...messages, [id]: [...messages[id], newMsg] });  //добавление сообщения
}

const addChat = (newChat) => { //принимает новый объект чата
  setChats(prevChats => [...prevChats, newChat])
  setMessages(prevMessages => ({...prevMessages, [newChat.id]: [] })) //предыдущие сообщения копируем + пустой массив доб. для нового чата
}

const  deleteChat = (id) => {   // фильтрацией удаляется чат с id, которое передали
  setChats(prevChats => prevChats.filter((chat) => chat.id !== id))
}  

  return (
<Provider store={store}>

    <BrowserRouter>

      <ul className='menu'>
        <li><NavLink className="menu-link" to="/" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Домой</NavLink></li>
        <li><NavLink className="menu-link" to="/chat" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Диалоги</NavLink></li>
        <li><NavLink className="menu-link" to="/profile" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Профиль</NavLink></li>

      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<ChatList chats={chats} addChat={addChat} deleteChat={deleteChat}  />}> 
            <Route path=':id' element={<Chat messages={messages} addMessage={addMessage} />}   />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<h4>Ошибка 404..</h4>} />


      </Routes>

    </BrowserRouter>

</Provider>
  )
}

export default App;
