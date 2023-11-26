import React from "react";
import { FaUserGear, FaDiagramProject } from "react-icons/fa6";
import { GiWhiteBook } from "react-icons/gi";
import { MenuItem } from "..";
function SideBar() {
  return (
    <aside className="w-14 md:w-40 bg-gray-100 duration-100 transition-all py-6 px-[8px] md:px-2">
      <ul className="flex flex-col space-y-2">
        <MenuItem href="/me" title="Information" icon={FaUserGear} />
        <MenuItem href="/skills" title="Skills" icon={GiWhiteBook} />
        <MenuItem href="/projects" title="Projects" icon={FaDiagramProject} />
      </ul>
    </aside>
  );
}

export default SideBar;
