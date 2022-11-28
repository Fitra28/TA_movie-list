import React, { useRef, useEffect } from 'react';
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { RiSlideshow3Line } from "react-icons/ri";
import { Link, useLocation } from 'react-router-dom';
import './footer.scss';


const Footer = () => {
const footerNav = [
    {
        display: 'Home',
        icon : <AiOutlineHome />,
        path: '/'
    },
    {
        display: 'Movies',
        icon : <BiMoviePlay />,
        path: '/movie'
    },
    {
        display: 'TV Series',
        icon : <RiSlideshow3Line />,
        path: '/tv'
    }
];
    const { pathname } = useLocation();
    const footerRef = useRef(null);

    const active = footerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                footerRef.current.classList.add('shrink');
            } else {
                footerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={footerRef} className="footer">
            <div className="footer__wrap container">
                <ul className="footer__nav">
                    {
                        footerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path} >
                                    {e.icon}
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    } 
                </ul>
                
            </div>
        </div>
    );
}
export default Footer;
