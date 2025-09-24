import React, { useState } from 'react'
import styles from '../styles/home/contact.module.css';
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { GrAttachment } from "react-icons/gr";
import { steps } from '../data/HomeData';

function ContactSection() {
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone submitted:", phone);
  };
  return (
    <>
      <div className={styles.leftBox}>
        <span style={{ marginTop: 10 }}>Contact Us</span>
        <form className={styles.formContact}>
          <input
            type="text"
            name="fname"
            placeholder="First Name*"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <input
            type='text'
            placeholder="Last Name*"
            name='lname'
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <input
            type='email'
            placeholder="Business Email*"
            name='lname'
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <input
            type='email'
            placeholder="Alternative Email"
            name='lname'
          // value={formData.name}
          // onChange={handleChange}
          />
          <div style={{
            width:'100%',
            height: 36,
            fontSize: 16,
            fontWeight: 400,
            color: 'grey',
            borderRadius: '5px'
          }}>
            <PhoneInput
              value={phone}
              onChange={setPhone}
              defaultCountry="JO"
              international
            />
          </div>
          <input
            type='text'
            placeholder="Company"
            name='company'
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <div className={styles.textAreaWrapper}>
            <textarea
              style={{resize:"none"}}
              type="text"
              placeholder="Tell us something about your project"
              name="lname"
              required
            />
            <span className={styles.attachLabel}><GrAttachment />Attach file</span>
          </div>
          <div className={styles.checkboxWrapper}>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
              />
              Request an NDA
            </label>
          </div>
        </form>
        <p style={{ fontSize: 12, fontWeight: 400, color: 'gray', padding: "0px 65px" }}>
          By sending this form I confirm that I have read and accept Intellectsoft{" "}
          <span style={{ color: 'blue', cursor: 'pointer' }}>Privacy Policy</span>
        </p>
        <button style={{ backgroundColor: "rgb(245, 76, 76)", width: "87%", borderRadius: 8, color: 'white', borderColor: "transparent", fontSize: 16, fontWeight: 600, height: 60 }}>
          Send
        </button>

      </div>
      <div className={styles.rightBox}>
        <div className={styles.heading}>WHAT'S NEXT?</div>
          <div className={styles.box}>
            <div className={styles.timelineCol}>
              <div className={styles.nodeContainer}>
                {steps.map((_, i) => (
                  <div key={i} className={styles.node} aria-hidden />
                ))}
              </div>
            </div>
            <div className={styles.contentCol}>
              {steps.map((text, idx) => (
                <div key={idx} className={styles.stepText}>
                  {text}
                </div>
              ))}
            </div>
            <div className={styles.subtlePattern} aria-hidden />
          </div>
        </div>
    </>
  );
}

export default ContactSection;