import React, { useState, Suspense, memo } from 'react';
import AutoRefreshComponent from '../components/Bg';
import Footer from '../components/Footer';
import styles from '../styles/home.module.css';
import SlideAnime from './SlideAnime';
import { FaAngleDown } from 'react-icons/fa6';
import logo1 from '../assets/images/home/logos/4-removebg-preview.webp';
import logo2 from '../assets/images/home/logos/arab-bank-removebg-preview.webp';
import logo3 from '../assets/images/home/logos/1630604748905-removebg-preview.webp';
import logo4 from '../assets/images/home/logos/bank-al-etihad-removebg-preview.webp';
import logo5 from '../assets/images/home/logos/cairo-amman-bank_jo.webp';
import logo6 from '../assets/images/home/logos/capital-1-removebg-preview.webp';
import logo7 from '../assets/images/home/logos/central-bank-of-libya-removebg-preview.webp';
import logo8 from '../assets/images/home/logos/citi-bank-removebg-preview.webp';
import logo9 from '../assets/images/home/logos/giz-removebg-preview.webp';
import logo10 from '../assets/images/home/logos/hb_logo_-_en-01-removebg-preview.webp';
import logo11 from '../assets/images/home/logos/icc-removebg-preview.webp';
import logo12 from '../assets/images/home/logos/images-removebg-preview.webp';
import logo13 from '../assets/images/home/logos/invest-bank-removebg-preview.webp';
import logo14 from '../assets/images/home/logos/jordan_ahli_bank_ahli-01-removebg-preview.webp';
import logo15 from '../assets/images/home/logos/jordan-commercial-bank-removebg-preview.webp';
import logo16 from '../assets/images/home/logos/libyan-islamic-bank-removebg-preview.webp';
import logo17 from '../assets/images/home/logos/national-bank-of-Iraq-removebg-preview.webp';
import logo18 from '../assets/images/home/logos/national-commercial-bank-libya-removebg-preview.webp';
import logo19 from '../assets/images/home/logos/safwa-bank-removebg-preview.webp';
import logo20 from '../assets/images/home/logos/standard-chartered-removebg-preview.webp';
import logo21 from '../assets/images/home/logos/who-removebg-preview.webp';
import logo22 from '../assets/images/home/logos/Zain_(Unternehmen)_logo.svg.webp';
import logo23 from '../assets/images/home/logos/بنك-الخرطوم-السودان-removebg-preview.webp';
import focusLogo from '../assets/images/home/bg/fkn-focus-logo-300x97.png';
import { IoSettingsSharp } from "react-icons/io5";



const cards_info = [
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/1.svg',
    title: 'Custom',
    content:
      'Designing solutions that perfectly align with your vision and needs. Leveraging the latest technologies to bring your ideas to life. No matter how ambitious they are.',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/7.svg',
    title: 'Dedicated',
    content:
      'Experience the power of a dedicated development team. Our experts dive deep into every aspect of your project, delivering exceptional quality',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/11.svg',
    title: 'Adaptable',
    content:
      'Choose an engagement model that fits your business. Our flexible approach ensures our partnership aligns with your specific goals, budget, and objectives',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/2.svg',
    title: 'Agile',
    content:
      'Receive high-quality, user-centered solutions on time. We ensure your project meets expectations and drives satisfaction for both your clients and end-users',
  },
];

const cards_info2 = [
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/1.svg',
    title: 'Custom',
    content:
      'Designing solutions that perfectly align with your vision and needs. Leveraging the latest technologies to bring your ideas to life. No matter how ambitious they are.',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/7.svg',
    title: 'Dedicated',
    content:
      'Experience the power of a dedicated development team. Our experts dive deep into every aspect of your project, delivering exceptional quality',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/11.svg',
    title: 'Adaptable',
    content:
      'Choose an engagement model that fits your business. Our flexible approach ensures our partnership aligns with your specific goals, budget, and objectives',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/2.svg',
    title: 'Agile',
    content:
      'Receive high-quality, user-centered solutions on time. We ensure your project meets expectations and drives satisfaction for both your clients and end-users',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/1.svg',
    title: 'Custom',
    content:
      'Designing solutions that perfectly align with your vision and needs. Leveraging the latest technologies to bring your ideas to life. No matter how ambitious they are.',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/7.svg',
    title: 'Dedicated',
    content:
      'Experience the power of a dedicated development team. Our experts dive deep into every aspect of your project, delivering exceptional quality',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/11.svg',
    title: 'Adaptable',
    content:
      'Choose an engagement model that fits your business. Our flexible approach ensures our partnership aligns with your specific goals, budget, and objectives',
  },
  {
    image: 'https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/2.svg',
    title: 'Agile',
    content:
      'Receive high-quality, user-centered solutions on time. We ensure your project meets expectations and drives satisfaction for both your clients and end-users',
  },
];
const columns = [
  [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo23],
  [logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo22],
  [logo15, logo16, logo17, logo18, logo19, logo20, logo21],
];

export default function Home() {
  return (
    <SlideAnime
      PanelAContent={<PanelAContent />}
      PanelBContent={<PanelBContent />}
    />
  );
}



const PanelAContent = memo(() => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      <AutoRefreshComponent/>
      <div className={styles.navbar}>
        <img
          src={focusLogo}
          loading="lazy"
          style={{
            width: 140,
            marginRight:220,
            //makes the logo white version
            filter: 'invert(100%)',
            // optional for smooth effect
            transition: 'filter 0.3s',
          }}
        />

        <div className={styles.navbar_child}>
          <div className={styles.navbar_item}>
            <span>Services</span>
            <FaAngleDown />
          </div>
          <div className={styles.navbar_item}>
            <span>Industries</span>
            <FaAngleDown />
          </div>
          <div className={styles.navbar_item}>
            <span>Our Clients</span>
            <FaAngleDown />
          </div>
          <div className={styles.navbar_item}>
            <span>Case Studies</span>
            <FaAngleDown />
          </div>
          <div className={styles.navbar_item}>
            <span>Company</span>
            <FaAngleDown />
          </div>
          <div className={styles.navbar_item}>
            <span>Contact us</span>
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className={styles.panelA_Content_container}>
        <h1>Build Bespoke Software Solution for Your Business Growth</h1>
        <p style={{ fontWeight: 300, fontSize: 18, paddingRight: 50 }}>
          From innovative startups
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",              
            marginTop: 50,
            width: "100%",           
            justifyContent: "flex-start",
            flexWrap: "wrap",         
          }}
        >
          {cards_info2.map((card, idx) => (
            <div
              key={idx}
              className={styles.panelA_card}
              style={{
                backgroundColor:hoveredIndex === idx ? "white" : "rgba(255,255,255,0.06)",
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <IoSettingsSharp style={{color: hoveredIndex === idx ? "rgb(0, 114, 245)" : "white"}}/>
                <h5 className="card-title" style={{color: hoveredIndex === idx ? "black" : "white"}}>{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20}}>
                </p>
              </div>
          ))}
        </div>

        <div style={{ marginTop: "7vh", display: "flex", flexDirection: "row", gap: 20 }}>
          <button style={{ height: "52px", width: "333px", fontSize: "16px", fontWeight: 400, backgroundColor: "blue", border: "none", color: "white" }}>
            Book a free consultation
          </button>
          <button style={{ height: "52px", width: "163px", fontSize: "16px", fontWeight: 400 }}>
            View portfolio
          </button>
        </div>
      </div>

      

    </>
  );
});


const PanelBContent = memo(() => {
  // Clients button state (moved here)
  const [isMorePressed, setPress] = useState(false);

  // cards data (inlined)
  

  // clients logos (inlined)
  
  return (
    <div>
      <div className={styles.div1}>
        <span className={styles.span1}>
          Why Choose Intellectsoft as Your Custom Software Development Partner?
        </span>
        <span className={styles.span2}>
          Leading software development company. With over 17 years of market experience. Present in 20 countries. Our development team drives excellence, ensuring we deliver exactly what your business needs. Trusted by Fortune 500 giants like Intel, Luxottica, Jaguar Land Rover, and Guinness, bold mid-sized companies, and ambitious startups..
        </span>

        {/* Inlined Cards */}
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{width: 50, height: 50, margin: 10}}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.button_div1}>See what Intellectsoft can do for you</button>
      </div>

      <div className={styles.div2}>
        {/* Inlined Clients */}
        <div style={{ marginTop: 100 }}> 
            <span>Our Clients</span>
            <hr className={styles.divider} />
        </div>
        <div className={styles.div2_first_col}>
          <div className={styles.div2_second_col}>
            {columns.map((col, i) => (
              <div key={i} className={styles.div2_cols}>
                {col
                  .slice(0, isMorePressed ? col.length : Math.ceil(col.length / 2))
                  .map((logo, j) => (
                    <img
                      key={j}
                      src={logo}
                      alt="logo"
                      loading="lazy"
                      className={styles.div2_col_img}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>

        {!isMorePressed && (
          <button className={styles.div2_button} onClick={() => setPress(true)}>
            See More
          </button>
        )}
      </div>

      <div className={styles.div3}>
        <div style={{ marginTop: 100 }}> 
            <span>Intelligent Software Solutions</span>
            <hr className={styles.divider} />
        </div>
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: 50, height: 50, margin: 10 }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: 50, height: 50, margin: 10 }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.div1_cards}>
          {cards_info.map((card, idx) => (
            <div key={idx} className={`${"card"} ${styles.card}`}>
              <img
                src={card.image}
                className="card-img-top"
                alt={card.title}
                style={{ width: 50, height: 50, margin: 10 }}
                loading="lazy"
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text" style={{ fontSize: 20 }}>
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.div4}>4</div>
      <div className={styles.div5}>5</div>
      <div className={styles.div6}>6</div>
      <div className={styles.div7}>7</div>
      <div className={styles.div8}>8</div>
      <div className={styles.div9}>9</div>
      <div className={styles.div10}>
        <Footer/>
      </div>
    </div>
  );
});
