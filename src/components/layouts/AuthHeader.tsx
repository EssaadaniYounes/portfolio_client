import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { Josefin_Sans } from "next/font/google";
const josefin_sans = Josefin_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

function AuthHeader() {
  return (
    <header className="h-14 flex items-center justify-between px-4 bg-gray-100">
      <h2
        className={josefin_sans.className + " text-lg font-bold text-gray-700"}
      >
        My portfolio
      </h2>
      <nav>
        <ul>
          <li className="btn min-h-[1rem] h-9 text-gray-800 bg-blue-300 hover:bg-blue-400 hover:text-gray-200">
            <span>Logout</span>
            <IoMdLogOut />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AuthHeader;
