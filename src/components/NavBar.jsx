import React, { useState } from 'react'
import styles from '../styles/home.module.css';
import focusLogo from '../assets/images/home/bg/fkn-focus-logo-300x97.png';
import trapImg from '../assets/images/home/navbar images/pexels-lkloeppel-466685.webp';
import VerticalDivider from '../components/VerticalDivider';
import { FaAngleDown } from 'react-icons/fa6';


function NavBar() {
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [isNavItemHovered, setIsItemNavHovered] = useState(false);
    const navItems = [
        "Services",
        "Industries",
        "Our Clients",
        "Case Studies",
        "Company",
        "Contact us",
    ];
    return (
        <div
            className={styles.navbar}
            onMouseEnter={() => setIsNavHovered(true)}
            onMouseLeave={() => {setIsNavHovered(false);setIsItemNavHovered(false);}}
        >
            <div className={styles.logo_navbar}>
                <img
                    src={focusLogo}
                    loading="lazy"
                    style={{
                        width: 140,
                        marginRight: 220,
                        filter: isNavHovered ? null : "invert(100%)",
                        transition: isNavHovered ? null : "filter 0.3s",
                    }}
                />
            </div>

            <div className={styles.items_navbar}>
                {navItems.map((item, idx) => (
                    <div
                        key={idx}
                        className={styles.navbar_item}
                        style={{ color: isNavHovered ? "black" : "white" }}
                        onMouseEnter={() => setIsItemNavHovered(true)}
                    >
                        <span style={{ fontWeight: isNavHovered ? 900 : 400 }}>{item}</span>
                        {!isNavHovered ? <FaAngleDown /> : <div style={{ width: 12 }} />}
                    </div>
                ))}
            </div>
            {isNavItemHovered &&
                <div className={styles.navbar_info_container}
                    onMouseLeave={() => setIsItemNavHovered(false)}
                >
                    <div className={styles.trapezoid}>
                        <img src={trapImg} loading='lazy' style={{ objectFit: "cover", height: "100%", width: "100%" }} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }} className={styles.slide_in}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ color: 'gray', fontSize: 20 }}>Company</span>
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
            }
        </div>
    )
}

export default NavBar