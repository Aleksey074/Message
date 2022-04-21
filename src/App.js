import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Chat } from './screens/Chat/Chat';
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { ChatList } from './components/ChatList/ChatList';
import { Articles } from './screens/Articles/Articles';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { useEffect, useState } from 'react';
import { PublicRoute } from './components/PublicRoute/PublicRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./../src/services/firebase";



function App() {

  const [authed, setAuthed] = useState(false);

  const handleLogin = () => {
    setAuthed(true);
  }

  const handleLogout = () => {
    setAuthed(false);
  }

  useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {  //слушатель события: изменения состояния авторизации
        if(user) {  //если пользователь залогинился - будет значение user
            handleLogin();
        } else {
          handleLogout();
        }
    });

    return unsubscribe; //отписываеися от слушаетелей 
  }, [])  // выполянется только на монтировании 
 

  return (

    <BrowserRouter>

      <ul className='menu'>
        <li><NavLink className="menu-link" to="/" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Домой</NavLink></li>
        <li><NavLink className="menu-link" to="/chat" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Диалоги</NavLink></li>
        <li><NavLink className="menu-link" to="/profile" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Профиль</NavLink></li>
        <li><NavLink className="menu-link" to="/articles" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Лента</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<PublicRoute authed={authed} />}>
          <Route path="" element={<Home onAuth={handleLogin} />} />
          <Route path='signup' element={<Home onAuth={handleLogin} isSignUp />} />
        </Route>

        <Route path="/profile" element={<PrivateRoute authed={authed} />} >
          <Route path='' element={<Profile onLogout={handleLogout} />} />
        </Route>

        <Route path="/chat" element={<ChatList />}>
          <Route path=":id" element={<Chat />} />
        </Route>
        <Route path="articles" element={<Articles />} />
        <Route path="*" element={<h4>Ошибка 404...</h4>} />
      </Routes>

    </BrowserRouter>

  )
}

export default App;
