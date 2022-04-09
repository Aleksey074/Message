import { Checkbox } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { toggleCheckbox } from "../../store/profile/actions";
import "./Profile.css";

export const Profile = () => {
  const state = useSelector(state => state)  //хук дял использования даных их redux
  const dispatch = useDispatch(); // хук диспатча
  const handleClick = () => { 
    dispatch(toggleCheckbox)
  }
  return (
    <>
      <div className="main-info">
        <h1 className="profile">Мой профиль:</h1>
        {state.showName && <h1 className="profile-name">{state.name}</h1>}
      </div>

      <div className="name-checkbox"><Checkbox onClick={handleClick}  />Отображать имя</div>
    </>
  )
}
