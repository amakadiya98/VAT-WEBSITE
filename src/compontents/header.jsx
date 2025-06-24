import React, { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useDirection } from '../context/DirectionContext';
import api from '../utils/api';
import { generalPageURL, generalPageURLArabic } from '../utils/urls';
function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const { dir } = useDirection();
    const [data, setData] = useState({})

    useEffect(() => {
        const storedMode = localStorage.getItem("theme");
        if (storedMode === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        }
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const generalData = await api.get(generalPageURL)
                const generalDataArabic = await api.get(generalPageURLArabic)
                const newData = { en: generalData?.data?.data, ar: generalDataArabic?.data?.data }

                setData(newData)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [dir])


    const toggleDarkMode = () => {
        const isDark = document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
        setDarkMode(isDark);
    };


    const { Menus } = data[dir === 'rtl' ? 'ar' : 'en'] || {};

    return (
        <div className={`z-50 fixed right-0 left-0 ${isOpen ? 'backdrop-blur-none' : ''} ${scrolled ? 'sm:top-[16px] top-[0px] backdrop-blur-[58px] sm:backdrop-blur-none' : 'lg:top-[96px] sm:top-[70px] top-[16px]'} transition-all ease-in-out duration-[0.5s]`}>
            <div className='px-[30px]'>
        <header
        ref={menuRef}
        className={`flex gap-[50px] p-[6px_8px] sm:p-[11px_21px] sm:py-[11px] rounded-[21px] mx-auto w-full max-w-[1528px] justify-between items-center border border-white dark:border-[rgba(255,255,255,0.10)]

            ${isOpen ? 'backdrop-blur-none' : 'sm:backdrop-blur-[58px]'} 
            bg-[#FFFFFF] dark:bg-[#181717C2]`}
        >
                    <div className="max-w-[54px] max-h-[25px] sm:max-w-[75px] sm:max-h-[35px] lg:max-w-[95px] lg:max-h-[45px] w-full h-full -mt-[22px]">
                        <img src="/images/logo.svg" className='block dark:hidden' width={100} height={100} alt="Site Logo" />
                        <img src="/images/logo.svg" className='hidden dark:block' width={100} height={100} alt="Site Logo" />
                    </div>
                    <div className={`absolute top-full left-0 right-0 max-w-[90%] m-auto w-full lg:relative lg:max-w-[880px] z-40 transition-all duration-300 header-menu ease-in-out ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-8'} lg:translate-y-0 lg:opacity-100 lg:visible`}>
                       <ul className={`flex gap-4 flex-col lg:flex-row justify-between sm:mt-[23px] mt-[13px] border border-[#FFFFFF5E] lg:border-none p-[35px_17px] lg:p-0 rounded-[10px] lg:backdrop-blur-none lg:bg-transparent lg:text-purple-1 lg:mt-0 ${isOpen ? 'bg-white dark:bg-[#0706069E] backdrop-blur-[50px] dark:backdrop-blur-[50px]' : 'bg-transparent backdrop-blur-[50px]'}`}>
                            <a href='/' onClick={() => setIsOpen(false)} ><li className='font-inter-medium text-black tracking-[-3%] cursor-pointer hover:underline dark:text-white'>{Menus?.[0]?.Title || "HOME"}</li></a>
                            <a href='#about' onClick={() => setIsOpen(false)} ><li className='font-inter-medium text-black tracking-[-3%] cursor-pointer hover:underline dark:text-white whitespace-nowrap'>{Menus?.[1]?.Title || "ABOUT US"}</li></a>
                            <a href='#services' onClick={() => setIsOpen(false)}><li className='font-inter-medium text-black tracking-[-3%] cursor-pointer hover:underline dark:text-white'>{Menus?.[2]?.Title || "SERVICES"}</li></a>
                            <a href='#testimonials' onClick={() => setIsOpen(false)}><li className='font-inter-medium text-black tracking-[-3%] cursor-pointer hover:underline dark:text-white'>{Menus?.[3]?.Title || "TESTIMONIALS"}</li></a>
                            <a href='#contact' onClick={() => setIsOpen(false)} ><li className='font-inter-medium text-black tracking-[-3%] cursor-pointer hover:underline dark:text-white whitespace-nowrap'>{Menus?.[4]?.Title || "CONTACT US"}</li></a>
                            <LanguageSwitcher />
                        </ul>
                    </div>
                    <div className="flex gap-[15px] items-center">
                        <button
                            className="lg:hidden flex items-center gap-2 focus:outline-none text-[16px] text-black dark:text-white font-urbanist-bold uppercase"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Menu"
                        >
                            <img src="/images/align-justify.svg" alt="Menu Icon" />
                            <p>Menu</p>
                        </button>
                        <div onClick={toggleDarkMode} className="cursor-pointer h-[24px] w-[24px]">
                            {darkMode ? <img src="/images/sun.svg" alt="Toggle Theme" /> : <img src="/images/light-theme-icon.svg" alt="Toggle Theme" />}
                        </div>
                       <button className="py-[10px] px-[47px] bg-gradient-to-r from-[#BA0000] to-[#F00000] rounded-[14px] text-white hover:opacity-90 transition-all duration-200 text-[18px] font-inter-medium hidden lg:flex">
  Get Started
</button>

                    </div>
                </header>
            </div>
        </div>
    );
}
export default Header;