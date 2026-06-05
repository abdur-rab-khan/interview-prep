import CodePreview from "@/components/code-preview/CodePreview";
import Progressbar from "@/problems/react/progress-bar/Progressbar";
import { getCodeFromPath } from "@/utils/utils";

function ProgressBarPage() {
  const progressBarCode = getCodeFromPath(
    "/react/progress-bar/Progressbar.tsx",
  );

  return (
    <CodePreview
      title="Progress Bar"
      code={progressBarCode}
      description="A progress bar shows how far a task or process has advanced."
    >
      <Progressbar />
    </CodePreview>
  );
}

export default ProgressBarPage;
