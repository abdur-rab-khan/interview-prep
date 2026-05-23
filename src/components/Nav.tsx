import Link from "next/link";
import { NavBody } from "./Accordion";
import { GoGoal } from "react-icons/go";

const Header = () => (
  <header>
    <Link href={"/javascript"} className="flex items-center gap-x-2">
      <span className="bg-blue-900 p-2 rounded-md shadow shadow-black/30">
        <GoGoal className="text-2xl" />
      </span>
      <span className="text-xl">Interview Preparation</span>
    </Link>
  </header>
);

function Nav() {
  return (
    <nav className="h-full w-78 bg-slate-900 border-r shadow-2xl shadow-black/40 p-3 border-gray-500/30 text-white fixed inset-0">
      <Header />
      <NavBody />
    </nav>
  );
}

export default Nav;
