import Chip from "@/preparation/react/chip/Chip";
import CodePreview from "@/components/code-preview/CodePreview";
import { getCodeFromPath } from "@/utils/utils";

function ChipPage() {
  const chipCode = getCodeFromPath("react/chip/Chip.tsx");
  return (
    <CodePreview
      title="Input Chip"
      description="A input chip, where there will be a input and when user add something and press input the chip will shown."
      code={chipCode}
    >
      <Chip />
    </CodePreview>
  );
}

export default ChipPage;
