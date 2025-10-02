import React, { useState, useRef } from "react";
import styles from "../styles/home/contact.module.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { GrAttachment } from "react-icons/gr";
import { steps } from "../../../data/HomeData";
import { AiOutlineClose } from "react-icons/ai";

function ContactSection() {
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    business_email: "",
    alt_email: "",
    company: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      formDataToSend.append("business_email", formData.business_email);
      formDataToSend.append("alt_email", formData.alt_email);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("desc", formData.desc);
      formDataToSend.append("phone", phone);
      formDataToSend.append("nda", isChecked);
      if (file) {
        formDataToSend.append("file", file);
      }

      const res = await fetch('http://localhost:5000/api/contact', {
        method: "POST",
        body: formDataToSend,
      });

      if (res.ok) {
        window.alert("Message sent successfully!");
      } else {
        alert("Failed to send message from Frontend");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      window.alert("Something went wrong.");
    }
  };

  // =================== File Attach Logic ===================//
  const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20 MB in bytes
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click(); // trigger hidden file input
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (!selectedFile) return;

    const allowedTypes = [
      "text/plain",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "application/vnd.ms-powerpoint",
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      "image/png",
      "image/jpeg",
      "image/webp",
      "video/mp4",
      "audio/mpeg",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      window.alert("File type not allowed");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      window.alert("The file is too large. Maximum allowed size is 20 MB.");
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = (e) => {
    e.stopPropagation();
    setFile(null);
  };
  // =================== #### End File Attach Logic #### ===================//

  return (
    <>
      <div className={styles.leftBox}>
        <span style={{ marginTop: 10 }}>Contact Us</span>

        <form className={styles.formContact} onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder="First Name*"
            value={formData.first_name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name*"
            value={formData.last_name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="business_email"
            placeholder="Business Email*"
            value={formData.business_email}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="alt_email"
            placeholder="Alternative Email"
            value={formData.alt_email}
            onChange={handleInputChange}
          />
          <div
            style={{
              width: "100%",
              height: 36,
              fontSize: 16,
              fontWeight: 400,
              color: "grey",
              borderRadius: "5px",
            }}
          >
            <PhoneInput
              value={phone}
              onChange={setPhone}
              defaultCountry="JO"
              international
            />
          </div>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleInputChange}
            required
          />
          <div className={styles.textAreaWrapper}>
            <textarea
              name="desc"
              placeholder="Tell us something about your project"
              value={formData.desc}
              onChange={handleInputChange}
              style={{ resize: "none", paddingBottom: 50 }}
              required
            />
            <div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept=".txt,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.png,.jpeg,.jpg,.webp,.mp4,.mp3"
              />
              <span
                className={styles.attachLabel}
                onClick={handleClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                {file ? (
                  <>
                    <AiOutlineClose
                      color="red"
                      onClick={removeFile}
                      style={{ cursor: "pointer" }}
                    />
                    <p
                      style={{
                        margin: 0,
                        marginLeft: 10,
                        marginRight: 10,
                        maxWidth: "150px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {file.name}
                    </p>
                  </>
                ) : (
                  <>
                    <GrAttachment />
                    Attach file
                  </>
                )}
              </span>
            </div>
          </div>

          <div className={styles.checkboxWrapper}>
            <label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              Request an NDA
            </label>
          </div>

          <p
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "gray",
              padding: "0px 65px",
            }}
          >
            By sending this form I confirm that I have read and accept
            Intellectsoft{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>
              Privacy Policy
            </span>
          </p>

          <button type="submit" className={styles.send_button}>
            Send
          </button>
        </form>
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
