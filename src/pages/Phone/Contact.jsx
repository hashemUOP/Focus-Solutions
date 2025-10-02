import React,{useState} from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import styles from './styles/contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";
import {PowerBankChat} from "./components/PowerBankChat";
import { LuBotMessageSquare } from "react-icons/lu";
import try_styles from './styles/home/try.module.css';

export default function ContactPhone() {
  const [showChat,setShowChat] = useState(false);
  return (
    <div className={styles.page}>
      {!showChat ? (
          <div className={try_styles.chat_circle} onClick={()=>setShowChat(!showChat)}>
            <LuBotMessageSquare color="white" size={50}/>
          </div>
        ) : (
          <PowerBankChat
            show={showChat}
            handleClose={() => setShowChat(false)}
          />
        )}
      <NavBar />
      <main className={styles.main}>
        <div style={{ marginTop: "20dvh" }} />
        <div className={styles.grid_container}>
            <div className={styles.div1}>
                <h1 style={{
                  fontWeight: "bold",
                  textAlign: "center"
                }}>
                  Contact Us
                </h1>
            </div>
            <div className={styles.div2}>
              <div>
                <span style={{ fontWeight: 600, fontSize: 20, display: "block", marginBottom: 0 }}>
                  Get in touch
                </span>
                <hr style={{ color: "black", marginTop: 2, marginBottom: 0 }} />
              </div>
              <div style={{display:"flex",flexDirection:"row",width:"100%",gap:10,marginTop: "15px"}}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Name:</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name*"
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number:</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number*"
                  />
                </div>

              </div>
              <div className={styles.inputGroup} style={{ marginTop: "15px" }}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" placeholder="Enter your email*" />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Your Message:</label>
                <textarea
                  style={{ resize: "none", borderColor:"lightgray",borderRadius:8}}
                  id="message"
                  rows="4"
                />
              </div>
              <button className={styles.button_send}>
                Send message
              </button>
            </div>
            <div className={styles.div3}>
              <div>
                <span style={{ fontWeight: 600, fontSize: 20, display: "block", marginBottom: 0 }}>
                  Get in touch
                </span>
                <hr style={{ color: "black", marginTop: 2, marginBottom: 0 }} />
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:20,padding:"20px 0px"}}>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <div style={{display:"flex",flexDirection:"row",alignItems:"center",width:"100%",gap:20}}>
                    <FaPhoneAlt size={25}/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                      <span style={{fontWeight:"bold"}}>Phone number</span>
                      <span>+962 (06) 554-3978</span>
                    </div>
                  </div>
                  <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}}>
                    <FaLocationDot size={50}/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                      <span style={{fontWeight:"bold"}}>Address</span>
                      <span>Toolkarem Commercial Complex, Al-Madina Al-Monawara St 194, Amman</span>
                    </div>
                  </div>
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:20}}>
                  <AiTwotoneMail size={25}/>
                  <div style={{display:"flex",flexDirection:"column"}}>
                    <span style={{fontWeight:"bold"}}>Email</span>
                    <span>info@focuskm.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div4}>
              <div>
                <span style={{ fontWeight: 600, fontSize: 20, display: "block", marginBottom: 0 }}>
                  Business Hours
                </span>
                <hr style={{ color: "black", marginTop: 2, marginBottom: 0 }} />
              </div>
              <div style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <span style={{fontWeight:"600"}}>Sunday – Thursday</span>
                  <span>8:00 AM – 6:00 PM</span>
                </div>
                <div style={{display:"flex",flexDirection:"column"}}>
                  <span style={{fontWeight:"600"}}>Friday & Saturday</span>
                  <span>Weekend / Closed</span>
                </div>
              </div>
            </div>
            <div className={styles.div5}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.1794917633968!2d35.8659815525602!3d31.98755912829611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca1cbf1a69621%3A0x3851a93204e10dbc!2sFocus%20Solutions%20Co!5e1!3m2!1sen!2sjo!4v1758699244526!5m2!1sen!2sjo" style={{border:"transparent",height:'100%',width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='focus solutions address'></iframe>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}