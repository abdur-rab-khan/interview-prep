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
      className={`code-block flex-1 min-w-90 p-3 max-h-full overflow-auto bg-[#001428] rounded-lg border border-slate-500/50 ${style}`}
    >
      {children}
    </section>
  );
}

export default Section;
