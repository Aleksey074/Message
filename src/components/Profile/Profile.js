import { onValue, set } from "@firebase/database";

import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { Form } from "../../components/Form/Form";
import { useState, useEffect, } from "react";
import "./Profile.css";
import { logOut, userNameRef, userShowNameRef } from "../../services/firebase";
import { initProfileTrack, setName, stopProfileTrack } from "../../store/profile/actions";
import { useSelector } from "react-redux";
import { setNameFB, setShowName } from "../../store/profile/actions";
import { selectName, selectShowName } from "./selectors";



export const Profile = ({ onLogout }) => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const showName = useSelector(selectShowName);
  const handleClick = () => {
    dispatch(setShowName(!showName));
  };

  const handleSubmit = (text) => {
    dispatch(setNameFB(text));
  };

  useEffect(() => {
    dispatch(initProfileTrack());

    return () => {
      dispatch(stopProfileTrack());
    };
  }, []);


  return (
    <>
      <div className="main-info">
        <h1 className="profile">Мой профиль:</h1>
        {showName && <h1 className="profile-name">{name}</h1>}
      </div>
      <button onClick={onLogout}>Выйти из профиля</button>


      <div className="name-checkbox"><Checkbox onClick={logOut} />Отображать имя</div>
      <Form onSubmit={handleSubmit} />
    </>
  )
}
