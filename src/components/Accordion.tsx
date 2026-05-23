"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navList } from "@/constants/const";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { Activity } from "react";

interface IAccordion {
  active: string;
}

export const NavBody = () => {
  const pathName = usePathname();
  const activePath = `/${pathName.split("/").at(1)}`;

  return (
    <section>
      <Accordion active={activePath} />
    </section>
  );
};

const AccordionLink = ({
  title,
  path,
  isActive = false,
  children,
}: {
  title: string;
  path: string;
  isActive?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      key={path}
      href={path}
      className={`bg-red-500 py-2.5 px-2 relative ${isActive ? "rounded-t-md " : "rounded-md"}`}
    >
      {title}
      {children && children}
    </Link>
  );
};

export function Accordion({ active }: IAccordion) {
  return (
    <ul className="flex flex-col gap-y-2 mt-6 list-none">
      {navList.map(({ title, icon, path, children }) => (
        <li key={path} className="w-full flex flex-col">
          <AccordionLink title={title} path={path} isActive={path === active}>
            {active === path ? (
              <IoIosArrowDropup className="absolute right-2 top-1/2 -translate-y-1/2" />
            ) : (
              <IoIosArrowDropdown className="absolute right-2 top-1/2 -translate-y-1/2" />
            )}
          </AccordionLink>
          <Activity mode={active === path ? "visible" : "hidden"}>
            <ul className="flex-col h-20 bg-yellow-500 rounded-b-md px-2 py-4 w-full">
              {children.map((props) => (
                <AccordionLink
                  key={props.path}
                  title={props.title}
                  path={props.path}
                />
              ))}
            </ul>
          </Activity>
        </li>
      ))}
    </ul>
  );
}
