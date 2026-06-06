import React from "react";

function Section({
  children,
  style = "",
}: {
  children: React.ReactNode;
  style?: string;
}) {
  return (
    <section
      className={`code-block size-full flex-1 overflow-auto rounded-lg border border-slate-500/50 bg-[#001428] p-3 ${style}`}
    >
      {children}
    </section>
  );
}

export default Section;
