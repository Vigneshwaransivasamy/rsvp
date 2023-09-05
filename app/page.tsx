import Link from "next/link";
import { FaPlus, FaSearch } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import NavLink from "./components/NavLink";

export default function Home() {
  return (
    <nav className="flex flex-wrap gap-2">
      <NavLink to="/add-participant" icon={<FaPlus />} label="Add" />
      <NavLink to="/participants" icon={<FaSearch />} label="Search" />
      <NavLink
        to="/participants/reports"
        icon={<TbBrandGoogleAnalytics />}
        label="Analytics"
      />
    </nav>
  );
}
