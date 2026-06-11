import CodePreview from "@/components/code-preview/CodePreview";
import NestedCheckbox from "@/problems/react/nested-checkbox/NestedCheckbox";
import { getCodeFromPath } from "@/utils/utils";

function NestedCheckboxPage() {
  const nestedCheckboxCode = getCodeFromPath(
    "/react/nested-checkbox/NestedCheckbox.tsx",
  );

  return (
    <CodePreview
      title="Nested Checkbox"
      description="A nested checkbox component that lets parent checkboxes control child checkboxes and reflect partial selection."
      code={nestedCheckboxCode}
    >
      <NestedCheckbox />
    </CodePreview>
  );
}

export default NestedCheckboxPage;
