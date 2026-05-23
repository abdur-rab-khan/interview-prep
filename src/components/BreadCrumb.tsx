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
          <Link href={`/${path}`}>{title}</Link>
          <span className="cursor-default">/</span>
        </React.Fragment>
      ) : (
        <span className="cursor-default">{title}</span>
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

  return (
    <div className="flex items-center gap-x-2.5 font-medium text-2xl capitalize mb-4">
      {HomeIcon && <HomeIcon className="text-3xl" />}
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
  );
}

export default BreadCrumb;
