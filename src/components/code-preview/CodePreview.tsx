import React from "react";
import Header from "./Header";
import CodeContainer from "./Container";
import Code from "./Code";
import Section from "./Section";

interface ICodePreviewProps {
  code: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

function CodePreview({
  code,
  title,
  children,
  description,
}: ICodePreviewProps) {
  return (
    <section className="flex size-full flex-col">
      <Header title={title} description={description} />
      <CodeContainer>
        {children && (
          <Section style="flex justify-center items-center">{children}</Section>
        )}
        <Section style="p-0!">
          <Code code={code} />
        </Section>
      </CodeContainer>
    </section>
  );
}

export default CodePreview;
