"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({isMenuActive}: {isMenuActive: boolean}) => {

    const current_path = usePathname();

  return (
    <ul id="dropdown" className={`my-6 space-y-4 ${isMenuActive? "block" : "hidden"} md:block` }>
      <li className="text-gray-700 font-bold">
        <Link
          href="/"
          className={`flex justify-start px-4`}
        >
          <span>Home</span>
          <svg
            className={`inline-block w-5 ml-2 ${current_path === "/"? "text-primary" : "" }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className="flex justify-start px-4"
        >
          <span>About</span>
          <svg
            className={`inline-block w-5 ml-2 ${current_path === "/about"? "text-primary" : "" }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="flex justify-start px-4 "
        >
          <span>Contact</span>
          <svg
            className={`inline-block w-5 ml-2 ${current_path === "/contact"? "text-primary" : "" }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
