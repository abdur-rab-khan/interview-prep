"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GoGoal } from "react-icons/go";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavAccordion } from "./NavAccordion";
import { MobileDrawer } from "./MobileDrawer";

const Header = ({ onClick }: { onClick?: () => void }) => (
  <header className="px-2 py-4">
    <Link
      href={"/javascript"}
      className="flex items-center gap-x-3 group"
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-blue-500/20 rounded-xl blur-sm group-hover:bg-blue-500/40 transition-all duration-500" />
        <span className="relative flex items-center justify-center bg-slate-800 p-2.5 rounded-xl border border-slate-700/50 shadow-lg transition-transform duration-500 group-hover:scale-105">
          <GoGoal className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors" />
        </span>
      </div>
      <span className="font-sans text-xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-br from-white to-slate-400">
        Interview Preparation
      </span>
    </Link>
  </header>
);

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 right-4 z-60 bg-slate-800 p-3 rounded-xl border border-white/10 shadow-xl text-blue-400 hover:text-white transition-all active:scale-95"
        aria-label="Open Menu"
      >
        <HiMenuAlt3 className="text-2xl" />
      </button>

      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex h-full w-78 bg-slate-950/80 backdrop-blur-xl border-r border-white/5 shadow-2xl p-4 text-white fixed inset-y-0 left-0 z-50 flex-col">
        <Header />
        <section className="flex-1 overflow-y-auto mt-2 custom-scrollbar">
          <NavAccordion />
        </section>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        header={<Header onClick={() => setIsOpen(false)} />}
        footer={
          <p className="text-xs text-slate-500 font-sans uppercase tracking-widest font-semibold">
            Focus on Mastery
          </p>
        }
      >
        <NavAccordion />
      </MobileDrawer>
    </>
  );
}

export default Nav;
