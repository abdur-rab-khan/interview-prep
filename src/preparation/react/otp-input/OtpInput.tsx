"use client";
import React, { useEffect, useRef, useState } from "react";

const OTPInputs = ({ digitCount = 4 }: { digitCount?: number }) => {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [otpDigits, setOtpDigits] = useState<string[]>(
    Array(digitCount).fill(""),
  );

  const isValidDigit = (value: string): boolean => /^\d$/.test(value);

  const handleDigitChange = (
    evt: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const rawDigit = evt.target.value.slice(-1).trim();
    const isRawDigitValue = isValidDigit(rawDigit);

    setOtpDigits((prevDigits) => {
      const updatedDigits = [...prevDigits];
      updatedDigits[idx] = isRawDigitValue ? rawDigit : "";
      return updatedDigits;
    });

    // 👉 I'll only shift to "next input", If "rawDigit" is a number
    if (isRawDigitValue) {
      inputRef.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (evt: React.ClipboardEvent<HTMLInputElement>) => {
    evt.preventDefault();
    const clipboardData = evt.clipboardData.getData("text").trim();
    const pastedData = clipboardData.split("").filter(isValidDigit);

    // ❌ Wrong: First I tried to directly replace the "otpDigits" with "pastedData".
    // 🤔 But I was wrong because what if user only gave "3" digit than, the whole input will shrink from "digitCount (size)" to "pastedData.length" and what if user only pasted "12"
    // 👉 That's why we are doing one by one based on "digitCount"
    setOtpDigits((prevDigits) => {
      const updatedDigits = [...prevDigits];
      pastedData.slice(0, digitCount).forEach((digit, idx) => {
        updatedDigits[idx] = digit;
      });
      return updatedDigits;
    });

    const nextEmptyIndex = Math.min(pastedData.length, digitCount - 1);
    inputRef.current[nextEmptyIndex]?.focus();
  };

  const handleKeyDown = (
    evt: React.KeyboardEvent<HTMLInputElement>,
    idx: number,
  ) => {
    // 👉 Instead of only checking the "key", I also check the current optDigit because if it's not there. mean now i can shift to previous input.
    if (evt.key === "Backspace" && !otpDigits[idx]) {
      inputRef.current[idx - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  return (
    <div className="mt-0.5">
      {otpDigits.map((digit, idx) => (
        <input
          type="text"
          inputMode="numeric"
          key={idx}
          value={digit}
          maxLength={1}
          className="bg-slate-800 size-12 text-lg font-semibold first:rounded-l-lg last:rounded-r-lg border text-center"
          onPaste={handlePaste}
          onKeyDown={(evt) => handleKeyDown(evt, idx)}
          onChange={(evt) => handleDigitChange(evt, idx)}
          ref={(ref) => {
            if (ref) inputRef.current[idx] = ref;
          }}
        />
      ))}
    </div>
  );
};

function OtpContainer() {
  return (
    <label>
      <span>OTP Input</span>
      <OTPInputs />
    </label>
  );
}

export default OtpContainer;
