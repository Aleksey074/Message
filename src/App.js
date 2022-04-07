import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { Chat } from './screens/Chat/Chat';
import { Profile } from "./components/Profile/Profile";
import { Home } from "./components/Home/Home";
import { store } from "./store";


function App() {
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
        <Route path='/chat' element={<Chat />} >
            <Route path=':id' element={<Chat />}  />
        </Route>
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<h4>Ошибка 404..</h4>} />


      </Routes>

    </BrowserRouter>

</Provider>
  )
}

export default App;
