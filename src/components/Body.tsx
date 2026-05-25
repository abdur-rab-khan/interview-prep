import React from "react";
import BreadCrumb from "./BreadCrumb";

function Body({ children }: { children: React.ReactNode }) {
  return (
    <section className="ml-0 lg:ml-78 p-4 pt-20 lg:pt-4 transition-all duration-300">
      <BreadCrumb />
      <main className="mt-4">{children}</main>
    </section>
  );
}

export default Body;
