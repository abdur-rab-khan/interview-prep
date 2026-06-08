import CodePreview from "@/components/code-preview/CodePreview";
import { getCodeFromPath } from "@/utils/utils";

function ThrottlingPage() {
  const throttlingCode = getCodeFromPath(
    "./javascript/throttling/throttling.ts",
  );

  return (
    <CodePreview
      code={throttlingCode}
      title="Throttling"
      description="Throttling limits how often a function can run over time by enforcing a minimum interval between calls. It's useful for improving performance when handling frequent events like scroll or resize."
    >
      <></>
    </CodePreview>
  );
}

export default ThrottlingPage;
