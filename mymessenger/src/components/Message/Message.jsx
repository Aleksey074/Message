import "./Message.style.css"

export const Message = ({ text, name, surname }) => {
    return <h1 className="message"> {text}: {name} {surname} </h1>;
};
 