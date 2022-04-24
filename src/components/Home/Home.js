import { useState } from "react";
import { Link } from "react-router-dom";
import { logIn, signUp } from "../../services/firebase";
import { LoginForm } from "../LoginForm/LoginForm";


export const Home = ({ isSignUp }) => {
  const [error, setError] = useState("");

  const handleSubmit = async ({ login, pass }) => {   //из формы прилетает логин/пароль
    try {
    if (isSignUp) {    //если это страница регистрации - передаём туда логин / пароль 
     await signUp(login, pass);  //это ф-ия из services/firebase
    } else {
     await logIn(login, pass) // иначе  - авторизация (также передаем туда логин/пароль)
    }
    } catch (e) {
      setError(e.message)
    }
  };

  return (
    //если зарагистрирован - авторизоваться, иначе - регистрация 
    <>
      <h1>Домашняя  страница</h1>
      <LoginForm onSubmit={handleSubmit} />
      {error && <h4>{error}</h4>} 
      <Link to={isSignUp ? "/" : "signup"}>
        {isSignUp ? "Авторизоваться" : "Зарегистрироваться"}
      </Link>
    </>
  )
}