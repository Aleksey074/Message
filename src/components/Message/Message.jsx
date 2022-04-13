import "./Message.style.css"

export const Message = ({ author, text }) => {
    return (
        <div className="message">
            <span className="author">{author}: </span>
            <span className="text">{text}</span>
        </div>
    );
};



