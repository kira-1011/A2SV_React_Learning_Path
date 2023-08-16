'use client';
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";


const Navbar = () => {

  const [ active, setActive ] = useState<boolean>(false);

  return (
    <div className="text-md md:text-2xl md:col-span-1 md:flex md:justify-end">
      <nav>
        <div className="flex justify-between items-center">
          <h1 className="font-bold uppercase p-4 border-b border-b-gray-100 text-3xl hover:text-gray-900">
            <Link href="/">Food Crafts</Link>
          </h1>
          <div className="cursor-pointer md:hidden">
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
        <Menu/>
      </nav>
    </div>
  );
};

export default Navbar;
