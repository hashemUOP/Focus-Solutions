import react from 'react';
import Spline from '@splinetool/react-spline';
import styles from '../styles/home.module.css'
import SlideAnime from './SlideAnime';
import { FaAngleDown } from "react-icons/fa6";
import logo1 from '../assets/images/home/logos/4-removebg-preview.png';
import logo2 from '../assets/images/home/logos/arab-bank-removebg-preview.png';
import logo3 from '../assets/images/home/logos/1630604748905-removebg-preview.png';
import logo4 from '../assets/images/home/logos/bank-al-etihad-removebg-preview.png';
import logo5 from '../assets/images/home/logos/cairo-amman-bank_jo.png';
import logo6 from '../assets/images/home/logos/capital-1-removebg-preview.png';
import logo7 from '../assets/images/home/logos/central-bank-of-libya-removebg-preview.png';
import logo8 from '../assets/images/home/logos/citi-bank-removebg-preview.png';
import logo9 from '../assets/images/home/logos/giz-removebg-preview.png';
import logo10 from '../assets/images/home/logos/hb_logo_-_en-01-removebg-preview.png';
import logo11 from '../assets/images/home/logos/icc-removebg-preview.png';
import logo12 from '../assets/images/home/logos/images-removebg-preview.png';
import logo13 from '../assets/images/home/logos/invest-bank-removebg-preview.png';
import logo14 from '../assets/images/home/logos/jordan_ahli_bank_ahli-01-removebg-preview.png';
import logo15 from '../assets/images/home/logos/jordan-commercial-bank-removebg-preview.png';
import logo16 from '../assets/images/home/logos/libyan-islamic-bank-removebg-preview.png';
import logo17 from '../assets/images/home/logos/national-bank-of-Iraq-removebg-preview.png';
import logo18 from '../assets/images/home/logos/national-commercial-bank-libya-removebg-preview.png';
import logo19 from '../assets/images/home/logos/safwa-bank-removebg-preview.png';
import logo20 from '../assets/images/home/logos/standard-chartered-removebg-preview.png';
import logo21 from '../assets/images/home/logos/who-removebg-preview.png';
import logo22 from '../assets/images/home/logos/Zain_(Unternehmen)_logo.svg.png';
import logo23 from '../assets/images/home/logos/بنك-الخرطوم-السودان-removebg-preview.png';

export default function Home() {
  return (
    <SlideAnime 
        PanelAContent={<PanelAContent />} 
        PanelBContent={<PanelBContent />} 
    />
    
  );
}

function PanelAContent(){
  return (
      <>
        <div style={{height:"100dvh",width:"100dvw"}} className={styles.background}>
            <Spline scene="https://prod.spline.design/TdByxbuudj3U-PvH/scene.splinecode" />
        </div>
        <div className={styles.navbar}>
            <span style={{fontSize:25}}>Focus Solutions</span>
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
    </>
  );
}

function PanelBContent() {
  return (
    <div className={styles.parent}>
      <div className={styles.div1}>
        <span className={styles.span1}>
          Why Choose Intellectsoft as Your Custom Software Development Partner?
        </span>
        <span className={styles.span2}>
          Leading software development company. With over 17 years of market experience. Present in 20 countries. Our development team drives excellence, ensuring we deliver exactly what your business needs. Trusted by Fortune 500 giants like Intel, Luxottica, Jaguar Land Rover, and Guinness, bold mid-sized companies, and ambitious startups..
        </span>
        {/* div1 row of cards */}
        <Cards/>
        <button className={styles.button_div1}>
          See what Intellectsoft can do for you
        </button>
      </div>
      <div className={styles.div2}>
        <p style={{marginTop:50}}>
          Our Clients
        </p>
        <div style={{display:'flex',justifyContent:"space-between",gap:200,maxHeight:'100%'}}>
          <div className={styles.div2_col}>
            <img src={logo1} alt='logo' className={styles.div2_col_img}/>
            <img src={logo2} alt='logo' className={styles.div2_col_img}/>
            <img src={logo3} alt='logo' className={styles.div2_col_img}/>
            <img src={logo4} alt='logo' className={styles.div2_col_img}/>
            <img src={logo5} alt='logo' className={styles.div2_col_img}/>
            <img src={logo6} alt='logo' className={styles.div2_col_img}/>
            <img src={logo7} alt='logo' className={styles.div2_col_img}/>
            <img src={logo23} alt='logo' className={styles.div2_col_img}/>
          </div>
          <div className={styles.div2_col}>
            <img src={logo8} alt='logo' className={styles.div2_col_img}/>
            <img src={logo9} alt='logo' className={styles.div2_col_img}/>
            <img src={logo10} alt='logo' className={styles.div2_col_img}/>
            <img src={logo11} alt='logo' className={styles.div2_col_img}/>
            <img src={logo12} alt='logo' className={styles.div2_col_img}/>
            <img src={logo13} alt='logo' className={styles.div2_col_img}/>
            <img src={logo14} alt='logo' className={styles.div2_col_img}/>
            <img src={logo22} alt='logo' className={styles.div2_col_img}/>
          </div>
          <div className={styles.div2_col}>
            <img src={logo15} alt='logo' className={styles.div2_col_img}/>
            <img src={logo16} alt='logo' className={styles.div2_col_img}/>
            <img src={logo17} alt='logo' className={styles.div2_col_img}/>
            <img src={logo18} alt='logo' className={styles.div2_col_img}/>
            <img src={logo19} alt='logo' className={styles.div2_col_img}/>
            <img src={logo20} alt='logo' className={styles.div2_col_img}/>
            <img src={logo21} alt='logo' className={styles.div2_col_img}/>
          </div>
        </div>
      </div>
      <div className={styles.div3}>3</div>
      <div className={styles.div4}>4</div>
      <div className={styles.div5}>5</div>
      <div className={styles.div6}>6</div>
      <div className={styles.div7}>7</div>
      <div className={styles.div8}>8</div>
      <div className={styles.div9}>9</div>
      <div className={styles.div10}>10</div>
    </div>
  );
}


function Cards() {
  const cards_info = [
    {
      image:
        "https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/1.svg",
      title: "Custom",
      content:
        "Designing solutions that perfectly align with your vision and needs. Leveraging the latest technologies to bring your ideas to life. No matter how ambitious they are.",
    },
    {
      image:
        "https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/7.svg",
      title: "Dedicated",
      content:
        "Experience the power of a dedicated development team. Our experts dive deep into every aspect of your project, delivering exceptional quality",
    },
    {
      image:
        "https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/11.svg",
      title: "Adaptable",
      content:
        "Choose an engagement model that fits your business. Our flexible approach ensures our partnership aligns with your specific goals, budget, and objectives",
    },
    {
      image:
        "https://www.intellectsoft.net/assets/94166408/img/n-offers/solutions/2.svg",
      title: "Agile",
      content:
        "Receive high-quality, user-centered solutions on time. We ensure your project meets expectations and drives satisfaction for both your clients and end-users",
    },
  ];

  return (
    <div className={styles.div1_cards}>
      {cards_info.map((card, idx) => (
        <div
          key={idx}
          className="card"
          style={{ width: "18rem", margin: "0 12px" }} // margin as fallback if gap isn't set
        >
          <img src={card.image} className="card-img-top" alt={card.title} style={{width:50,height:50,margin:10}}/>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text" style={{fontSize:20}}>{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}