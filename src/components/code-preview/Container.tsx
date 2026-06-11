import React from "react";

function CodeContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex w-full flex-1 flex-row flex-wrap gap-4 overflow-hidden pt-2 lg:flex-nowrap">
      {children}
    </section>
  );
}

export default CodeContainer;
