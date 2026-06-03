import OtpInput from "@/problems/react/otp-input/OtpInput";
import CodePreview from "@/components/code-preview/CodePreview";
import { getCodeFromPath } from "@/utils/utils";

function OtpInputPage() {
  const otpInputCode = getCodeFromPath("react/otp-input/OtpInput.tsx");

  return (
    <CodePreview
      title="OTP Input"
      description="A small, accessible OTP input component for entering verification codes."
      code={otpInputCode}
    >
      <OtpInput />
    </CodePreview>
  );
}

export default OtpInputPage;
