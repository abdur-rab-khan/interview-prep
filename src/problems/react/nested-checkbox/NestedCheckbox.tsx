"use client";
import { useState } from "react";
import nestedCheckboxesData, { CheckboxesType } from "./data";

interface CheckboxProps {
  id: number;
  name: string;
  depth?: number;
  checked: boolean;
  onChecked: (id: number) => void;
}

interface CheckboxParentProps {
  depth?: number;
  isParentActive?: boolean;
  checkbox: CheckboxesType;
  onChildrenToggle?: (id: number) => void;
}

interface CheckboxContainerProps {
  checkboxes: CheckboxesType[];
}

const NoCheckbox = () => {
  return <p>There is no checkboxes</p>;
};

const Checkbox = ({
  id,
  name,
  checked,
  onChecked,
  depth = 0,
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id.toString()}
      style={{
        marginLeft: `${depth * 3}px`,
      }}
      className={"select-none"}
    >
      <input
        id={id.toString()}
        type="checkbox"
        checked={checked}
        onChange={() => onChecked(id)}
      />
      <span className="ml-2">{name}</span>
    </label>
  );
};

const CheckboxParent = ({
  checkbox,
  depth = 0,
  onChildrenToggle,
  isParentActive = false,
}: CheckboxParentProps) => {
  const [activeChildren, setActiveChildren] = useState(new Set());

  const isCurrentCheckboxActive =
    isParentActive || activeChildren.size === checkbox.children?.length;

  const handleChecked = (id: number) => {
    if (onChildrenToggle) {
      onChildrenToggle(id);
    }
  };

  const handleToggleChildren = (id: number) => {
    setActiveChildren((prevActiveChildren) => {
      const prevActiveChildrenSet = new Set(prevActiveChildren);

      if (prevActiveChildrenSet.has(id)) {
        prevActiveChildrenSet.delete(id);
      } else {
        prevActiveChildrenSet.add(id);
      }

      return prevActiveChildrenSet;
    });
  };

  return (
    <div>
      <Checkbox
        checked={isCurrentCheckboxActive}
        depth={depth}
        id={checkbox.id}
        name={checkbox.name}
        onChecked={handleChecked}
      />
      {checkbox?.children?.map((childCheckbox) => (
        <CheckboxParent
          key={childCheckbox.id}
          depth={depth + 8}
          checkbox={childCheckbox}
          isParentActive={isCurrentCheckboxActive}
          onChildrenToggle={handleToggleChildren}
        />
      ))}
    </div>
  );
};

const CheckboxContainer = ({ checkboxes }: CheckboxContainerProps) => {
  return !checkboxes.length ? (
    <NoCheckbox />
  ) : (
    checkboxes.map((checkbox) => (
      <CheckboxParent key={checkbox.id} checkbox={checkbox} />
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
