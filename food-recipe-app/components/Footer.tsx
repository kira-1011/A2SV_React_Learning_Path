import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-700 lg:text-left">
      <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
       <p> © 2023 Copyright:</p>
        <Link
          className="text-neutral-800 ml-2 dark:text-neutral-400"
          href="/"
        >
          Food Crafts
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
