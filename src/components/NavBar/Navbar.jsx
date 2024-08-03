import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate("/", { replace: true });
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal "
      >
        <NavLink to={'About'} className="flex items-center cursor-pointer py-1.5 text-lg font-bold uppercase px-2 rounded-lg text-white">
          about
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <NavLink to={'Portfolio'} className="flex items-center cursor-pointer py-1.5 text-lg font-bold uppercase px-2 rounded-lg text-white">
          portfolio
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <NavLink to={'contact'} className="flex items-center cursor-pointer py-1.5 text-lg font-bold uppercase px-2 rounded-lg text-white">
          contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className={`fixed left-0 right-0 top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 ${
        scrolled ? "py-2 bg-opacity-90" : "py-6 bg-opacity-100"
      } bg-slate-700 shadow-none border-0 transition-all duration-300`}
    >
      <div className="flex items-center justify-between container mx-auto bg-slate-700">
        <Typography
          as="a"
          className="mr-4 cursor-pointer py-1.5 text-4xl font-bold uppercase"
          onClick={handleLogoClick}
        >
          Start Framework
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
