"use client";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";

interface IChip {
  id: string;
  title: string;
}

interface IChipInputProps {
  label: string;
  placeHolder: string;
  onEnter: (value: string) => void;
}

interface IChipElementProps {
  chip: IChip;
  onRemove: (id: string) => void;
}

// Input for chip
const ChipInput = ({ label, placeHolder, onEnter }: IChipInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value);
  };

  const handleEnter = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key !== "Enter" || !inputValue.trim()) return;

    onEnter(inputValue.trim());
    setInputValue("");
  };

  return (
    <label className="flex flex-col ">
      <span className="text-md">{label}</span>
      <input
        value={inputValue}
        placeholder={placeHolder}
        onChange={handleOnChange}
        onKeyDown={handleEnter}
        className="input-theme mt-2"
      />
    </label>
  );
};

const ChipItem = ({ chip, onRemove }: IChipElementProps) => {
  return (
    <div className="border px-4 py-1 rounded-full border-slate-500/50 flex items-center gap-2">
      <span>{chip.title}</span>
      <button
        onClick={() => onRemove(chip.id)}
        aria-label={`Remove ${chip.title}`}
        className="cursor-pointer"
      >
        <CgClose />
      </button>
    </div>
  );
};

// Main chip container
function ChipContainer() {
  const [chips, setChips] = useState<IChip[]>([]);

  const handleEnter = (value: string) => {
    const newChip = {
      id: `${value}_${Date.now()}`,
      title: value,
    };

    setChips((prev) => [...prev, newChip]);
  };

  const handleRemove = (id: string) => {
    setChips((prev) => prev.filter((chip) => chip.id !== id));
  };

  return (
    <div className="min-w-78">
      <ChipInput
        label="Chip Input"
        placeHolder="Type a chip and press enter"
        onEnter={handleEnter}
      />
      <div className="mt-2 flex gap-2 max-w-78 flex-wrap">
        {chips.map((chip) => (
          <ChipItem key={chip.id} chip={chip} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}

export default ChipContainer;
