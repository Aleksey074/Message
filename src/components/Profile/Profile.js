import { Checkbox } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { toggleCheckbox, setName } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";
import { selectName, selectShowName } from "./selectors";
import "./Profile.css";

export const Profile = () => {
  const dispatch = useDispatch(); // хук диспатча
  const name = useSelector(selectName);  //этим селектором забираем имя
  const showName = useSelector(selectShowName); // этим  selectShowName из selectors.js
  const handleClick = () => {
    dispatch(toggleCheckbox)
  }

  const handleSubmit = (text) => {  //форма принимает текст 
    dispatch(setName(text))  // сюда падает результат вызова setName
  }

  return (
    <>
      <div className="main-info">
        <h1 className="profile">Мой профиль:</h1>
        {showName && <h1 className="profile-name">{name}</h1>}
      </div>


      <div className="name-checkbox"><Checkbox onClick={handleClick} />Отображать имя</div>
      <Form onSubmit={handleSubmit} />
    </>
  )
}
