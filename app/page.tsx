import Link from "next/link";
import { FaHome, FaPlus, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={`/add-participant`}
        className="shadow-md rounded-md bg-white dark:bg-transparent dark:border-1 darK:shadow-none dark:border dark:border-sky-400 p-3 text-center w-32 cursor-pointer hover:text-semibold dark:hover:bg-sky-700 transition-colors"
      >
        <div className="inline-block">
          <FaPlus />
        </div>
        <div className="text-sm">Add</div>
      </Link>
      <Link
        href={`/participants`}
        className="shadow-md rounded-md bg-white dark:bg-transparent dark:border-1 darK:shadow-none dark:border dark:border-sky-400 p-3 text-center w-32 cursor-pointer hover:text-semibold dark:hover:bg-sky-700 transition-colors"
      >
        <div className="inline-block">
          <FaSearch />
        </div>
        <div className="text-sm">Search</div>
      </Link>
      <Link
        href={`/participants/reports`}
        className="shadow-md rounded-md bg-white dark:bg-transparent dark:border-1 darK:shadow-none dark:border dark:border-sky-400 p-3 text-center w-32 cursor-pointer hover:text-semibold dark:hover:bg-sky-700 transition-colors"
      >
        <div className="inline-block">
          <FaHome />
        </div>
        <div className="text-sm">Analytics</div>
      </Link>
    </div>
  );
}
