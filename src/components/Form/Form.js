import { useState } from "react";

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

    return  (
        <form className="form" onSubmit={handleSubmit}>
            <input value={value} onChange={handleChange} type="text" className="form-text" placeholder="Введите текст сообщения..." />
            <input type="submit" />
        </form>
    )
}