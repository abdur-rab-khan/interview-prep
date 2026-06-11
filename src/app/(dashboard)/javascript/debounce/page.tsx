import CodePreview from "@/components/code-preview/CodePreview";
import Debounce from "@/problems/react/debounce/Debounce";
import { getCodeFromPath } from "@/utils/utils";

function DebouncePage() {
  const debounceCode = getCodeFromPath("/javascript/debounce/debounce.ts");

  return (
    <CodePreview
      title="Debounce"
      description="Debounce delays a function until after a pause in repeated events, helping reduce unnecessary calls and improve performance."
      code={debounceCode}
    >
      <Debounce />
    </CodePreview>
  );
}

export default DebouncePage;
