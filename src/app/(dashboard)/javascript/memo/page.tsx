import CodePreview from "@/components/code-preview/CodePreview";
import { getCodeFromPath } from "@/utils/utils";

function MemoizationPage() {
  const memoizationCode = getCodeFromPath("/javascript/memo/memoization.ts");

  return (
    <CodePreview
      title="Memoization"
      code={memoizationCode}
      description="Memoization stores computed results to avoid repeating expensive calculations."
    >
      <></>
    </CodePreview>
  );
}

export default MemoizationPage;
