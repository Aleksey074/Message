import { useEffect, useState, useRef } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./Form.style.css";

export const Form = ({ onSubmit }) => {

 
    const [value, setValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
        setValue(""); //очищаем строку после ввода
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const inputRef = useRef();
    
    useEffect(() => {
        inputRef.current?.focus();
      }, []);


    return  (
        <form className="form" onSubmit={handleSubmit}>
            <TextField className="input-form" value={value} onChange={handleChange}  placeholder="Введите текст сообщения..." inputRef={inputRef} />
            <Button className="btn-form" type="submit" variant="contained">Отправить</Button>
        </form>
    )
}