import { useState, useRef, useEffect } from "react";
import ChatbotIcon from "./componentsChatbot/chatbotIcon";
import ChatForm from "./componentsChatbot/ChatForm";
import ChatMessage from "./componentsChatbot/ChatMessage";
import { mydata } from "./componentsChatbot/mydata";

const Chatbot = () => {

  const [chatHistory, setChatHistory] = useState([{ hideInChat: true, role: "model", text: mydata }]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {

    // Updating Chat history with bot response
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Typing..."), { role: "model", text, isError }]);
    }

    // Formatting chat hsisotry for API request 
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOperation = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: history }),
    }

    try {
      // Fetching response from API
      const response = await fetch(import.meta.env.VITE_API_URL, requestOperation);
      const data = await response.json();
      // Updating chat history with bot response
      if (!response.ok) throw new Error(data.error.message || "Error fetching response from API");
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);

    } catch (error) {
      updateHistory(error.message, true);
    }

  };


  useEffect(() => {
    // Auto Scroll when history updates
    chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: "smooth" });
  }, [chatHistory]);



  return (
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`}>
      <button onClick={() => setShowChatbot((prev) => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>
      <div className="chatbot-popup">

        {/* chatbot header  */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">BusBuddy</h2>
          </div>
          <button onClick={() => setShowChatbot((prev) => !prev)} className="chatbot-btn material-symbols-rounded">keyboard_arrow_down</button>
        </div>

        {/* chatbot body  */}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Hi there! I am BusBuddy. <br /> Nice to see you. What you want to know?</p>
          </div>

          {/* Rendering chat message dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}

        </div>

        {/* chatbot footer  */}
        <div className="chat-footer">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse} />
        </div>
      </div>
    </div>
  );
};
export default Chatbot
