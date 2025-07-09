import { useState } from 'react';
import './App.css';
import dummyLlogo from './assets/images/dummyLogo.png';

const ChatbotUI = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you? ", sender: "bot" }
  ]);

const [input, setInput] = useState(""); 
const [typing, setTypying] = useState(false); 

const responses = {
  'hi': 'Hello! How can I assist you today? 😀',
  'hello': 'Hi there! What can I do for you? 😀',
  'how are you': "I'm just a bot, but thanks for asking! How can I help you? 🤖",
  'bye': 'Goodbye! Have a great day! 👋',
  'help': 'Sure! What do you need help with? 💡'
};

const getResponse = (msg) => {
  const text = msg.toLowerCase();
  for(const [key, value] of Object.entries(responses)) {
    if(text.includes(key)) return value;
  }
  return "I'm not sure about that. Try asking somethig else!";
}

const sendMessage = () => {
  if(!input.trim()) return;

  const userMsg = { id: Date.now(), text: input, sender: 'user' };
  setMessages(prev =>[...prev, userMsg]);
  setInput("");
  setTypying(true);

  setTimeout(() => {
    const botResponse = { id: Date.now() + 1, text: getResponse(input), sender: 'bot' };
    setMessages(prev => [...prev, botResponse]);
    setTypying(false);
  }, 1000);
}

return (
  <div className="chatbot-container">
    <div className='chatbot-header'>
      <div className='logo-div'>
      <img src={dummyLlogo} alt="Chatbot Logo" className='chatbot-logo' />
      </div>
      {/* <h2 className='chatbot-title'>Chatbot</h2> */}
    </div>
    <div className='chatbot-messages'> 
      {messages.map(msg => (
        <div key={msg.id} className={`message-container ${msg.sender}-container`}>
          <span className={`avatar-icon ${msg.sender}-icon`}>
            {msg.sender === 'bot' ? '🤖' : '👤'}
          </span>
          <span className={`message ${msg.sender}`}>{msg.text}</span>
        </div>
      ))}
    </div>

    {typing && <div className="typing-indicator">Bot is typing...</div>}

    <div className="input-area">
      <input className="input-field"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      placeholder='Type your message here...'
      />
      <button className="send-button" onClick={sendMessage}>➤</button> 
    </div>

  </div>
)}
export default ChatbotUI;