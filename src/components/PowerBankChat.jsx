import React, { useState } from "react";
import styles from "../styles/components/chat.module.css";
import { FiArrowLeft, FiMinus, FiPlus } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";

function PowerBankChat({ show, handleClose }) {
  const [messages, setMessages] = useState([
    { type: "system", text: "👋 Hello! I'm your PowerBank AI Assistant.How can I help you with your financial needs today?" },
    { type: "user", text: "Hello from user" },
    { type: "system", text: "How can I help?" },
    { type: "user", text: "I need a power bank." },
  ]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setMessages([...messages, { type: "user", text: input }]); // add user msg
      setInput(""); // clear input
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

      {/* Body - messages appear here */}
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
        <FaMicrophone size={20} />
        <input
          type="text"
          placeholder="Write a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <FaPaperPlane size={20} style={{marginRight:"5px",cursor:"pointer"}} />
      </div>
    </div>
  );
}

export default PowerBankChat;
