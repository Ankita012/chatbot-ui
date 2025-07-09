import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ChatbotUI from './ChatbotUI';
import reportWebVitals from './reportWebVitals';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">ChatBot AI</div>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our Smart Chatbot</h1>
            <p>Experience the power of AI-driven conversations. Our chatbot is here to help answer your questions 24/7.</p>
            <button className="cta-button">Learn More</button>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <span role="img" aria-label="robot">🤖</span>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Instant Responses</h3>
              <p>Get immediate answers to your questions, any time of day.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Our bot understands context and provides relevant information.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Easy Integration</h3>
              <p>Add our chatbot to any website with minimal setup.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 ChatBot AI. All rights reserved.</p>
      </footer>
      
      {/* The ChatbotUI component remains as a floating widget */}
      <ChatbotUI />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

reportWebVitals();
