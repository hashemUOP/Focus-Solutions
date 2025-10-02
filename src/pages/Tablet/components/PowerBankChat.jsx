import React, { useState,useEffect } from "react";
import styles from "../styles/components/chat.module.css";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaMicrophone, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

export function PowerBankChat({ show, handleClose }) {
  const [messages, setMessages] = useState([
    { type: "system", text: "👋 Hello! I'm your PowerBank AI Assistant. How can I help you with your financial needs today?" },
  ]);
  const [input, setInput] = useState("");
  const [showLoading,setLoading] = useState(true);
  const sendData = async (message) => {
    try {
      // show user message immediately
      setMessages((prev) => [...prev, { type: "user", text: message }]);
      // send to backend
      const res = await axios.get("https://n8n.kcsc.com.jo/webhook/4a1395ca-46c0-4710-b23e-ef50209c58f7", {
        message: message,
      });
      // show system response
      setMessages((prev) => [...prev, { type: "system", text: res.data.message || "✅ Received!" }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [...prev, { type: "system", text: "⚠️ Error connecting to server." }]);
    }finally{
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      sendData(input);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.chat_container}>
      {/* Header */}
      <div className={styles.chat_header}>
        <div>
          <FiArrowLeft
            size={25}
            style={{ marginLeft: 5, cursor: "pointer" }}
            onClick={handleClose}
          />
          <BiDotsHorizontalRounded style={{ marginLeft: 20 }} />
        </div>
        <FiMinus onClick={handleClose} style={{ cursor: "pointer" }} size={25} />
      </div>

      {/* Body */}
      <div className={styles.chat_body}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.type === "user" ? styles.chat_user : styles.chat_message}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={styles.chat_footer}>
        <FiPlus size={25} />
        <input
          type="text"
          placeholder="Write a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <FaMicrophone size={20} />
        <FaPaperPlane
          size={20}
          style={{ marginRight: "5px", cursor: "pointer" }}
          onClick={handleSend}
        />
      </div>
    </div>
  );
}

