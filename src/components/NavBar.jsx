import React, { useState } from 'react';
import styles from '../styles/home/home.module.css';
import focusLogo from '../assets/images/home/bg/fkn-focus-logo-300x97.png';
import trapImg from '../assets/images/home/navbar images/pexels-lkloeppel-466685.webp';
import VerticalDivider from '../components/VerticalDivider';
import { FaAngleDown, FaGlobe } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";

function NavBar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [isNavItemHovered, setIsItemNavHovered] = useState(false);
    const [lastItemHoveredIndex, setLastItemHoveredIndex] = useState(null);
    const [choosenLang,setChoosenLang] = useState('English');
    const navigate = useNavigate();
    const navItems = [
        "Language",
        "Services",
        "Our Clients",
        "Case Studies",
        "Company",
        "Contact us",
    ];

    // const changeLanguage = (lng) => {
    //     i18n.changeLanguage(lng);
    // };

    return (
        <div
            className={styles.navbar}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => { setIsNavHovered(false); setIsItemNavHovered(false); setLastItemHoveredIndex(null); }}
        >
            {/* Logo */}
            <div className={styles.logo_navbar}>
                <img
                    src={focusLogo}
                    loading="lazy"
                    style={{
                        width: 140,
                        marginRight: 220,
                        cursor: "pointer"
                    }}
                    onClick={() => navigate('/home')}
                />
            </div>

            {/* Nav Items */}
            <div className={styles.items_navbar}>
                {navItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={styles.navbar_item}
                        style={{
                            color: lastItemHoveredIndex === idx && lastItemHoveredIndex !== 0 ? "rgb(132, 143, 153)" : "black",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => { setHoveredIndex(idx); setIsItemNavHovered(true); setLastItemHoveredIndex(idx); }}
                        onMouseLeave={() => { setHoveredIndex(null); }}
                    >
                        {
                            idx !== 0 && (
                                <>
                                    <span style={{ fontWeight: lastItemHoveredIndex === idx ? 900 : 400 }} onClick={idx === 5?() => navigate('/contact'): idx===1?()=>navigate('/services'):()=>console.log("item: ",idx)}>
                                        {item}
                                    </span>
                                    <FaAngleDown />
                                </>
                            )
                        }
                        {/* appearance of globe icon*/}
                        {
                            idx === 0 && (
                                <div className="dropdown">
                                    {/* Trigger */}
                                    <div
                                        className="d-flex align-items-center gap-2"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <FaGlobe size={20} />
                                        <span style={{ color: "black" }}>{choosenLang}</span>
                                    </div>

                                    {/* Dropdown Menu */}
                                    <ul className="dropdown-menu">
                                        <li>
                                            <button className="dropdown-item" onClick={() => {setChoosenLang('English');}}>
                                                English
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => {setChoosenLang("Arabic");}}>
                                                Arabic
                                            </button>
                                        </li>
                                        <li>
                                            <button className="dropdown-item" onClick={() => setChoosenLang("French")}>
                                                French
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }

                    </div>
                ))}
            </div>


            {/* Info panel per hovered item */}
            {/* isNavItemHovered */}
            {isNavItemHovered && lastItemHoveredIndex !== 0 && (
                <div
                    className={styles.navbar_info_container}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className={styles.trapezoid}>
                        <img
                            src={trapImg}
                            loading='lazy'
                            style={{ objectFit: "cover", height: "100%", width: "100%" }}
                        />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }} className={styles.slide_in}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'gray', fontSize: 20 }}>
                                {navItems[lastItemHoveredIndex]}
                            </span>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <VerticalDivider thickness='1px' color='gray' height='40px' />
                                <div className={styles.navbar_info_container_items_container}>
                                    <span>item 1</span>
                                    <span>item 2</span>
                                    <span>item 3</span>
                                    <span>item 4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavBar;
