import { useState } from "react";
import type {
  CheckboxOption,
  GroupedCheckboxProps,
} from "./grouped.checkbox.types";
import { CheckboxContainer, CheckboxItem } from "./grouped.checkbox.styled";
import { Checkbox } from "../checkbox/checkbox.component";

export const GroupedCheckbox: React.FC<GroupedCheckboxProps> = ({
  options,
  onChange,
  columns,
  direction = "row",
  disabled = false,
  name,
}) => {
  const [selected, setSelected] = useState<CheckboxOption[]>(options);

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    setSelected((prev) => {
      const updated = prev.map((opt) =>
        opt.value === value ? { ...opt, active: isChecked } : opt
      );
      onChange?.(updated.filter((opt) => opt.active));
      return updated;
    });
  };

  return (
    <CheckboxContainer direction={direction} columns={columns}>
      {selected.map((opt, idx) => (
        <CheckboxItem key={opt.value}>
          <Checkbox
            name={`${name}_${idx}`}
            label={opt.label}
            checked={opt.active}
            disabled={disabled}
            labelPosition="right"
            onChange={(next) => handleCheckboxChange(opt.value, next)}
            labelNoWrap
          />
        </CheckboxItem>
      ))}
    </CheckboxContainer>
  );
};
