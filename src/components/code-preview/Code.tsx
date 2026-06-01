import { codeToHtml } from "shiki";

export default async function Code({ code }: { code: string }) {
  const formattedCode = await codeToHtml(code, {
    lang: "typescript",
    theme: "night-owl",
  });

  return (
    <div
      className="[&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:whitespace-pre-wrap xl:[&>pre]:wrap-break-word xl:[&>pre]:overflow-x-hidden"
      dangerouslySetInnerHTML={{ __html: formattedCode }}
    />
  );
}
