import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";
import styles from "../styles/components/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.site_footer} role="contentinfo">
      <div className={styles.footer_container}>
        <div className={styles.footer_grid}>
          <div className={styles.footer_col}>
            <h4 className={styles.footer_title}>Company</h4>
            <ul className={styles.footer_list}>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className={styles.footer_col}>
            <h4 className={styles.footer_title}>Help</h4>
            <ul className={styles.footer_list}>
              <li><a href="#">Support</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Docs</a></li>
            </ul>
          </div>

          <div className={styles.footer_col}>
            <h4 className={styles.footer_title}>Legal</h4>
            <ul className={styles.footer_list}>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>

          <div className={styles.footer_col}>
            <h4 className={styles.footer_title}>Download</h4>
            <ul className={styles.footer_list}>
              <li><a href="#">iOS</a></li>
              <li><a href="#">Android</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Focus Solutions. All rights reserved.
          </div>

          <div className={styles.socials} aria_label="Social links">
            <a href="#" aria_label="Facebook" className={styles.social_link}><BsFacebook /></a>
            <a href="#" aria_label="Instagram" className={styles.social_link}><BsInstagram /></a>
            <a href="#" aria_label="Twitter" className={styles.social_link}><BsTwitter /></a>
            <a href="#" aria_label="Github" className={styles.social_link}><BsGithub /></a>
            <a href="#" aria_label="Dribbble" className={styles.social_link}><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
