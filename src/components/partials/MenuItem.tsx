import Link from "next/link";
import React, { ReactElement } from "react";
import type { IconType } from "react-icons/lib/esm/iconBase";
function MenuItem({
  title,
  icon: Icon,
  href,
}: {
  title: string;
  icon: IconType;
  href: string;
}) {
  return (
    <li title={title}>
      <Link
        href={href}
        className="flex items-center justify-center md:justify-start space-x-1 rounded-md bg-blue-200 py-1.5 md:pl-2 cursor-pointer duration-150 hover:bg-blue-300 hover:text-gray-200"
      >
        <Icon size={19} />
        <span className="hidden md:block font-semibold text-sm mt-1">
          {title}
        </span>
      </Link>
    </li>
  );
}

export default MenuItem;
