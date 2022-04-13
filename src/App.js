import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Chat } from './screens/Chat/Chat';
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { ChatList } from './components/ChatList/ChatList';



function App() {


  return (

    <BrowserRouter>

      <ul className='menu'>
        <li><NavLink className="menu-link" to="/" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Домой</NavLink></li>
        <li><NavLink className="menu-link" to="/chat" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Диалоги</NavLink></li>
        <li><NavLink className="menu-link" to="/profile" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Профиль</NavLink></li>

      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<ChatList />}>
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path="*" element={<h4>Ошибка 404...</h4>} />
      </Routes>

    </BrowserRouter>

  )
}

export default App;
