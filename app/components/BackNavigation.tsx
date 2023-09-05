import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackNavigation = ({
  to,
  text = "Back",
}: {
  to: string;
  text?: string;
}) => {
  return (
    <Link href={to}>
      <div className="flex gap-2 items-center content-center">
        <FaArrowLeft></FaArrowLeft>
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default BackNavigation;
