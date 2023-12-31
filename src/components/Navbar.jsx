// import React, { useEffect, useState } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { navLinks } from '../constants';
import { logo, menu, close } from '../assets'

const regularUlStyle = "list-none hidden sm:flex flex-row gap-10";
const toggleUlStyle = "list-none flex justify-end items-start flex-col gap-2";

const regularLiStyle = "hover:text-white text-[18px] font-medium cursor-pointer";
const toggleLiStyle = "font-poppins font-medium cursor-pointer text-[16px]";

function renderNavLinks(active, setActive, toggle=null, setToggle=null, toggleable=false){
  let ulStyle = toggleable ? toggleUlStyle : regularUlStyle;
  let liStyle = toggleable ? toggleLiStyle : regularLiStyle;

  return (
    <ul className={ulStyle}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`
            ${
              active === link.title
                ? "text-white"
                : "text-secondary"
            } 
            ${liStyle}
          `}
          onClick={toggleable ? () => { setActive(link.title) } : () => {
            setActive(link.title);
            setToggle(!toggle);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`sm:px-4 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="name logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Mitul Saha &nbsp;
            <span className="sm:block hidden"></span>| Software Engineer
          </p>
        </Link>
        { renderNavLinks(active, setActive) }
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`
            ${toggle ? 'flex' : 'hidden'}
              p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
            `}
          >
            { renderNavLinks(active, setActive, toggle, setToggle, true) }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar