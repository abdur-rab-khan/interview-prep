import React from "react";

function CodeContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-h-208 flex-1 flex gap-4 pt-2 flex-wrap">
      {children}
    </section>
  );
}

export default CodeContainer;
