import React from "react";
import Body from "@/components/Body";
import Nav from "@/components/Nav";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen bg-slate-900 text-white">
      <Nav />
      <Body>{children}</Body>
    </section>
  );
}

export default HomeLayout;
