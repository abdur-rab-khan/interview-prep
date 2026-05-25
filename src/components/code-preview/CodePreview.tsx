import React from "react";
import Header from "./Header";
import Code from "./Code";

interface ICodePreviewProps {
  code: string;
  title: string;
  description: string;
  children: React.ReactNode;
}

function CodePreview({
  code,
  title,
  children,
  description,
}: ICodePreviewProps) {
  return (
    <section>
      <Header title={title} description={description} />
      <Code />
    </section>
  );
}

export default CodePreview;
