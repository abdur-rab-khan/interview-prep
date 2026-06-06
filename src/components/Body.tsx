import React from "react";
import BreadCrumb from "./BreadCrumb";

function Body({ children }: { children: React.ReactNode }) {
  return (
    <section className="ml-0 flex size-full flex-1 flex-col overflow-hidden p-4 pt-20 transition-all duration-300 lg:pt-4 lg:pl-81">
      <BreadCrumb />
      <main className="mt-4 flex-1 overflow-hidden">{children}</main>
    </section>
  );
}

export default Body;
