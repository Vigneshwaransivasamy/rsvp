import Link from "next/link";
import React from "react";

const NavLink = ({
  to,
  icon,
  label,
}: {
  to: string;
  icon: JSX.Element;
  label: string;
}) => {
  return (
    <Link
      href={to}
      className="shadow-md rounded-md bg-white dark:bg-transparent dark:border-1 darK:shadow-none dark:border dark:border-sky-400 p-3 text-center w-32 cursor-pointer hover:text-semibold dark:hover:bg-sky-700 transition-colors"
    >
      <div className="inline-block">{icon}</div>
      <div className="text-sm">{label}</div>
    </Link>
  );
};

export default NavLink;
