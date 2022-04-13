import { Link } from "react-router-dom";


export const ChatListField = ({ handleRemoveChat, chats }) => {

    return (
        <div className="chat-list">

            {chats.map((chat) => (

                <div className="chat-item" key={chat.id}>

                    <Link className="chat-link" to={`/chat/${chat.id}`} >
                        {chat.name}
                    </Link>
                    <button className="chat-delete" onClick={() => handleRemoveChat(chat.id)}>Х</button>
                </div>
            ))}

        </div>
    )
}