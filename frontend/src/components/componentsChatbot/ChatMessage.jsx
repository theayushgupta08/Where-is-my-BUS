import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
    const isTyping = chat.text === "Typing...";
    
    return (
        !chat.hideInChat && (
            <div className={`message ${chat.role === "model" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>

                {/* Adding chatbot icon only if chat role is model */}
                {chat.role === "model" && <ChatbotIcon />}
                <p className={`message-text ${isTyping ? "typing-indicator" : ""}`}>
                    {isTyping ? (
                        <span className="typing-dots">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </span>
                    ) : (
                        chat.text
                    )}
                </p>
            </div>
        )
    );
};

export default ChatMessage;
