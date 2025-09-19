import React from "react";
import styles from "../home/styles.module.css";

export default function ContactSection() {
  return (
    <section id="contactSection" className={styles.nContactsSection}>
      <div className={styles.container}>
        <div className={styles.contactSection}>
          <div id="formWrap" className={styles.formWrapFlexbox}>
            <form
              autoComplete="off"
              id="formContacts"
              className={`${styles.form} ${styles.formContact} ${styles.formContactRating} ${styles.contactForm} ${styles.contactMeAbout}`}
              action="#"
              method="post"
              encType="multipart/form-data"
              data-handler=""
              data-form-id="contacts-col-3"
              data-type="ContactForm"
              data-id="98b78903-c3fa-45fe-9a4e-b57d7e95e4c9"
              data-url="//traccoon.intellectsoft.net/forms/intellectsoft/contacts"
            >
              <h2>Contact Us</h2>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">
                  First Name*
                </label>
                <input
                  id="name"
                  type="text"
                  className={styles.formControl}
                  name="name"
                  maxLength="255"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="lastName">
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  className={styles.formControl}
                  name="last_name"
                  maxLength="255"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">
                  Business Email*
                </label>
                <input
                  type="text"
                  id="email"
                  className={styles.formControl}
                  name="email"
                  maxLength="255"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="alternativeEmail">
                  Alternative Email
                </label>
                <input
                  type="text"
                  id="alternativeEmail"
                  className={styles.formControl}
                  name="alternative_email"
                  maxLength="255"
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="phoneNumber"
                  className={styles.formControl}
                  name="phone"
                  maxLength="50"
                />
                <input id="country" name="country" type="hidden" value="" />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className={styles.formControl}
                  name="company"
                  maxLength="255"
                />
              </div>

              <div className={`${styles.formGroup} ${styles.formGroupDescription}`}>
                <label className={styles.label} htmlFor="description">
                  Tell us about your project
                </label>
                <textarea
                  className={styles.formTextarea}
                  id="description"
                  name="description"
                  maxLength="65535"
                ></textarea>
                <div className={styles.formFooter}>
                  <div
                    className={`${styles.formGroup} ${styles.uploadWrapper} ${styles.jsEmptyFiles}`}
                  >
                    <input type="file" id="attach" name="attach" data-label="Attach file" />
                    <button className={styles.clearAttach}>x</button>
                    <label
                      className={`${styles.uploadLabel} ${styles.uploadLabelWhite}`}
                      htmlFor="attach"
                    >
                      <span className={styles.uploadedText}>
                        <i className={styles.isoiPaperClip}></i>
                        Attach file
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className={`${styles.formGroup} ${styles.noValidationIcon}`}>
                <input type="hidden" name="send_nda" value="0" />
                <input
                  type="checkbox"
                  id="sendNda"
                  className={styles.formCheckbox}
                  name="send_nda"
                  value="0"
                />
                <label className={styles.formCheckboxLabel} htmlFor="sendNda">
                  Request an NDA
                </label>
              </div>

              <div className={`${styles.formGroup} ${styles.privacyText}`}>
                By sending this form I confirm that I have read and accept Intellectsoft{" "}
                <a href="https://www.intellectsoft.net/privacy-policy">Privacy Policy</a>
              </div>

              <div className={`${styles.formFooter} ${styles.formFooterRating}`}>
                <button
                  className={`${styles.formSubmit} ${styles.formSubmitContact} ${styles.buttonWhiteGreen} ${styles.sendGetInTouch}`}
                >
                  Send
                </button>
              </div>

              <input
                type="hidden"
                id="checkBrowse"
                className={styles.checkBrowse}
                name="check_ad_block"
              />

              <p className={styles.contactError}>
                Something went wrong. Send form again, please.
              </p>

              <div className={styles.formSpinner}>
                <div className={styles.rect1}></div>
                <div className={styles.rect2}></div>
                <div className={styles.rect3}></div>
                <div className={styles.rect4}></div>
                <div className={styles.rect5}></div>
              </div>
            </form>

            <div className={`${styles.jsThx} ${styles.thank} ${styles.thankBorderNone} ${styles.textWhite}`}>
              <div className={`${styles.thankContent} ${styles.thankContentBlue}`}>
                <h3 className={`${styles.thankTitle} ${styles.thankTitleBig}`}>
                  Thank you for your response!
                </h3>
                <p className={styles.thankText}>
                  We have sent an email to <b><span className={styles.thankTextUserEmail}></span></b>{" "}
                  to acknowledge receipt of your request. In the event that you have not received
                  our email, we kindly suggest checking your spam folder or alternatively,
                  contacting us directly at{" "}
                  <b>
                    <a href="mailto:info@intellectsoft.net">info@intellectsoft.net</a>
                  </b>
                </p>
                <a id="clearStorage" href="" className={`${styles.button} ${styles.buttonPrimary}`}>
                  Send again
                </a>
              </div>
            </div>
          </div>

          <div className={styles.contactInformation}>
            <p>What’s Next?</p>
            <ul>
              <li>
                We will send a short email notifying you that we successfully received your request
                and started working on it.
              </li>
              <li>
                Our solution advisor analyzes your requirements and will reach back to you within 3
                business days.
              </li>
              <li>
                We may sign an optional mutual NDA within 1-2 business days to make sure you get the
                highest confidentiality level.
              </li>
              <li>
                Our business development manager presents you an initial project estimation,
                ballpark figures, or our project recommendations within approximately 3-5 days.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
