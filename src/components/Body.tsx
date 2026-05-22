import React from "react";
import BreadCrumb from "./BreadCrumb";

function Body({ children }: { children: React.ReactNode }) {
  return (
    <section className="ml-78 p-4">
      <BreadCrumb />
      {children}
    </section>
  );
}

export default Body;
