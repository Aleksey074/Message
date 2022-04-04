import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Chat } from './screens/Chat/Chat';

const Home = () => {
  return (<h1>Домашняя  страница</h1>)
}

const Profile = () => {
  return (<h1>Мой профиль</h1>)
}


function App() {
  return (
    <BrowserRouter>

      <ul className='menu'>
        <li><NavLink className="menu-link" to="/" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Домой</NavLink></li>
        <li><NavLink className="menu-link" to="/chat" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Диалоги</NavLink></li>
        <li><NavLink className="menu-link" to="/profile" style={({ isActive }) => ({ color: isActive ? "rgb(0, 255,170)" : "blue" })}>Профиль</NavLink></li>

      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} >
            <Route path=':id' element={<Chat />}  />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<h4>Ошибка 404..</h4>} />


      </Routes>

    </BrowserRouter>

  )
}

export default App;
