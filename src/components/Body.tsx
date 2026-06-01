import React from "react";
import BreadCrumb from "./BreadCrumb";

function Body({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col flex-1 ml-0 lg:pl-81 p-4 pt-20 lg:pt-4 transition-all duration-300 size-full">
      <BreadCrumb />
      <main className="mt-4 flex-1">{children}</main>
    </section>
  );
}

export default Body;
