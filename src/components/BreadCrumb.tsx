"use client";

import React from "react";
import { navIcon } from "../constants/const";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IPaths {
  title: string;
  path: string;
}

interface IBreadCrumbSegment {
  idx: number;
  title: string;
  path: string;
  lastIdx: number;
}

const handleBreadCrumbPaths = (acc: IPaths[], curr: string): IPaths[] => {
  if (!curr) return acc;

  let path = curr;
  if (acc.length > 0) {
    path = acc.at(-1)?.path + "/" + curr;
  }

  return [...acc, { title: curr, path }];
};

const BreadCrumbSegment = ({
  title,
  path,
  idx,
  lastIdx,
}: IBreadCrumbSegment) => {
  return (
    <React.Fragment>
      {idx !== lastIdx ? (
        <React.Fragment>
          <Link
            href={`/${path}`}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            {title}
          </Link>
          <span className="text-slate-600 font-light select-none">/</span>
        </React.Fragment>
      ) : (
        <span className="text-white font-bold select-none">{title}</span>
      )}
    </React.Fragment>
  );
};

function BreadCrumb() {
  const location = usePathname();
  const paths = location
    .trim()
    .split("/")
    .reduce(handleBreadCrumbPaths, [] as IPaths[]);
  const HomeIcon = navIcon[paths[0]?.path] ?? navIcon["default"];

  if (paths.length === 0) return null;

  return (
    <div className="flex items-center gap-x-3 font-sans text-xl sm:text-2xl capitalize bg-slate-800/20 w-fit px-4 py-2 rounded-2xl border border-white/5 backdrop-blur-md">
      <div className="p-1.5 bg-blue-500/10 rounded-lg">
        {HomeIcon && (
          <HomeIcon className="text-2xl sm:text-3xl text-blue-400" />
        )}
      </div>
      <div className="flex items-center gap-x-2 text-slate-400">
        {paths.map(({ title, path }, idx) => (
          <BreadCrumbSegment
            key={path}
            idx={idx}
            path={path}
            title={title}
            lastIdx={paths.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default BreadCrumb;
