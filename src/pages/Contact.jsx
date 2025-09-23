import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from '../styles/contact.module.css';

export default function Contact() {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div style={{ marginTop: "20dvh" }} />
        <div className={styles.grid_container}>
            <div className={styles.div1}>
              <div>
                <h1 style={{marginLeft:170,fontWeight:"bold"}}>Contact Us</h1>
                <p style={{marginRight:120}}>
                  If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
                </p>
              </div>
            </div>
            <div className={styles.div2}>
              <div>
                <span style={{ fontWeight: 600, fontSize: 20, display: "block", marginBottom: 0 }}>
                  Get in touch
                </span>
                <hr style={{ color: "black", marginTop: 2, marginBottom: 0 }} />
              </div>
              <div style={{display:"flex",flexDirection:"row",width:"100%",gap:10}}>
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
                    type="number"
                    placeholder="Enter your phone number*"
                  />
                </div>

              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email*"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  rows="4"
                />
              </div>

              <button className={styles.button_send}>
                Send message
              </button>
            </div>
            <div className={styles.div3}>3</div>
            <div className={styles.div4}>4</div>
            <div className={styles.div5}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d630.5709632201485!2d35.86710965004449!3d31.988030944861595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2YXYrNmF2Lkg2LfZiNmE2YPYsdmFINi02KfYsdi5INin2YTZhdiv2YrZhtip!5e1!3m2!1sen!2sjo!4v1758662298243!5m2!1sen!2sjo" style={{border:"transparent",height:'100%',width:'100%'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
