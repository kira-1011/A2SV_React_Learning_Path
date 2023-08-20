'use client';
import Link from "next/link";
import Menu from "./Menu";
import { useState } from "react";

const Navbar = () => {

  const [ isMenuActive, setIsMenuActive ] = useState(false);

  return (
    <div className="text-md md:w-[12em] shrink-0 md:text-2xl md:flex md:justify-start">
      <nav className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="font-bold whitespace-nowrap uppercase p-4 border-b border-b-gray-100 text-3xl hover:text-gray-900">
            <Link href="/">Food Crafts</Link>
          </h1>
          <div className="cursor-pointer mr-4 md:hidden" onClick={(e) => setIsMenuActive(!isMenuActive)}>
            <svg
              id="menu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>

        {/* Menu */}
        <Menu isMenuActive={isMenuActive} />
      </nav>
    </div>
  );
};

export default Navbar;
