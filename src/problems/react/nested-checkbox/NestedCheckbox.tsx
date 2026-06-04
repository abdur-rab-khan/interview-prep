"use client";
import { useState } from "react";
import nestedCheckboxesData, { CheckboxesType } from "./data";

interface GlobalCheckedType {
  [key: number]: boolean;
}

interface CheckboxProps {
  checked: boolean;
  checkbox: CheckboxesType;
  onCheckboxToggle: (isChecked: boolean, checkbox: CheckboxesType) => void;
}

interface CheckboxParentProps {
  checkbox: CheckboxesType;
  globalCheckedState: GlobalCheckedType;
  onCheckboxToggle: (isChecked: boolean, checkbox: CheckboxesType) => void;
}

interface CheckboxContainerProps {
  checkboxes: CheckboxesType[];
}

const NoCheckbox = () => {
  return <p>There is no checkboxes</p>;
};

const Checkbox = ({ checked, checkbox, onCheckboxToggle }: CheckboxProps) => {
  const { id, name } = checkbox;

  return (
    <label htmlFor={id.toString()} className={"select-none"}>
      <input
        id={id.toString()}
        type="checkbox"
        checked={checked}
        onChange={(evt) => onCheckboxToggle(evt.target.checked, checkbox)}
      />
      <span className="ml-2">{name}</span>
    </label>
  );
};

const CheckboxParent = ({
  checkbox,
  onCheckboxToggle,
  globalCheckedState,
}: CheckboxParentProps) => {
  return (
    <div className="px-5">
      <Checkbox
        checkbox={checkbox}
        onCheckboxToggle={onCheckboxToggle}
        checked={globalCheckedState[checkbox.id] || false}
      />
      {checkbox?.children &&
        checkbox.children.map((childCheckbox) => (
          <CheckboxParent
            key={childCheckbox.id}
            checkbox={childCheckbox}
            onCheckboxToggle={onCheckboxToggle}
            globalCheckedState={globalCheckedState}
          />
        ))}
    </div>
  );
};

const CheckboxContainer = ({ checkboxes }: CheckboxContainerProps) => {
  const [globalCheckedState, setGlobalCheckedState] =
    useState<GlobalCheckedType>({});

  const handleCheckboxToggle = (
    isChecked: boolean,
    currentCheckbox: CheckboxesType,
  ) => {
    setGlobalCheckedState((prevState) => {
      const updatedCheckedState = {
        ...prevState,
        [currentCheckbox.id]: isChecked,
      };

      // Update children's
      const updateChildren = (node: CheckboxesType) => {
        if (node?.children) {
          for (const child of node.children) {
            updatedCheckedState[child.id] = isChecked;
            if (child?.children) {
              updateChildren(child);
            }
          }
        }
      };
      updateChildren(currentCheckbox);

      // TODO: Update Parent's
      const updateParent = (node: CheckboxesType) => {};
      updateParent(currentCheckbox);

      return updatedCheckedState;
    });
  };

  return !checkboxes.length ? (
    <NoCheckbox />
  ) : (
    checkboxes.map((checkbox) => (
      <CheckboxParent
        key={checkbox.id}
        checkbox={checkbox}
        onCheckboxToggle={handleCheckboxToggle}
        globalCheckedState={globalCheckedState}
      />
    ))
  );
};

function NestedCheckbox() {
  return (
    <section>
      <CheckboxContainer checkboxes={nestedCheckboxesData} />
    </section>
  );
}

export default NestedCheckbox;
