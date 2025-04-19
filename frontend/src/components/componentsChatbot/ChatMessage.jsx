
import ChatbotIcon from "./chatbotIcon";

const ChatMessage = ({ chat }) => {
    return (
        !chat.hideInChat && (
            <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>

                {/* Adding chatbot icon only if chat role is model */}
                {chat.role === "model" && <ChatbotIcon />}
                <p className="message-text">{chat.text}</p>
            </div>
        )
    );
};

export default ChatMessage
