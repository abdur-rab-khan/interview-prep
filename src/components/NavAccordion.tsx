"use client";

import Link from "next/link";
import React, { useCallback } from "react";
import { navList } from "@/constants/const";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

import { IconType } from "react-icons";
import { FaBook } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";

interface IAccordionLinkProps {
  href: string;
  title: string;
  icon: IconType;
  isActive?: boolean;
  children?: React.ReactNode;
}

const AccordionNotFound = () => (
  <li className="flex items-center text-sm gap-3 text-slate-400 p-2 italic">
    <FaBook className="text-xs" />
    <span>No topics found</span>
  </li>
);

const AccordionLink = ({
  href,
  title,
  icon: Icon,
  isActive = false,
  children,
}: IAccordionLinkProps) => (
  <Link
    href={href}
    className={`group flex items-center p-3 transition-all duration-300 ease-out relative overflow-hidden ${
      isActive
        ? "bg-slate-800/80 text-white shadow-inner"
        : "hover:bg-slate-800/40 text-slate-400 hover:text-slate-200"
    } ${isActive ? "rounded-t-xl" : "rounded-xl"}`}
  >
    {isActive && (
      <motion.div
        layoutId="active-indicator"
        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
      />
    )}
    <span className="flex-1 flex items-center gap-3 font-sans tracking-wide">
      <Icon
        className={`text-xl transition-transform duration-300 ${
          isActive
            ? "scale-110 text-blue-400"
            : "group-hover:scale-110 opacity-70 group-hover:opacity-100"
        }`}
      />
      <span className={isActive ? "font-semibold" : "font-medium"}>
        {title}
      </span>
    </span>
    <span
      className={`transition-transform duration-300 ${
        isActive ? "rotate-0 text-blue-400" : "-rotate-90 opacity-40"
      }`}
    >
      {children}
    </span>
  </Link>
);

export function NavAccordion() {
  const pathname = usePathname();
  const currentRootPath = `/${pathname.split("/")[1] ?? ""}`;

  const isNavItemActive = useCallback(
    (path: string) => {
      return path === currentRootPath;
    },
    [currentRootPath],
  );

  return (
    <ul className="flex flex-col gap-y-3 mt-2 list-none px-1">
      {navList.map(({ title, path, icon, children = [] }) => {
        const active = isNavItemActive(path);

        return (
          <li key={path} className="group/item">
            <AccordionLink
              href={path}
              icon={icon}
              title={title}
              isActive={active}
            >
              <IoIosArrowDropdown className="text-lg" />
            </AccordionLink>

            {/* Accordion content */}
            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  key={"accordion-content"}
                  initial={{ height: 0, opacity: 0, y: -10 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    y: 0,
                  }}
                  exit={{ height: 0, opacity: 0, y: -10 }}
                  transition={{
                    height: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full rounded-b-xl overflow-hidden bg-slate-800/40 border-t border-slate-700/50"
                >
                  <ul className="flex flex-col gap-y-1 list-none p-2 ml-2 border-l border-slate-700/50 mt-1 mb-1">
                    {children.map(({ title, icon: SubIcon, path }) => {
                      const isSubActive = pathname === path;
                      return (
                        <li key={path}>
                          <Link
                            href={path}
                            className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-200 ${
                              isSubActive
                                ? "bg-blue-500/10 text-blue-400 font-medium"
                                : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/30"
                            }`}
                          >
                            <SubIcon
                              className={`text-lg ${
                                isSubActive ? "text-blue-400" : "opacity-50"
                              }`}
                            />
                            <span className="text-sm">{title}</span>
                          </Link>
                        </li>
                      );
                    })}

                    {!children.length && <AccordionNotFound />}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
