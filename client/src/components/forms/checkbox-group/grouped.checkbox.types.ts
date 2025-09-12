export type CheckboxOption = {
  value: string;
  label: string;
  active: boolean;
};
export type GroupedCheckboxProps = {
  options: CheckboxOption[];
  onChange?: (checked: CheckboxOption[]) => void;
  columns?: number;
  direction?: "row" | "column";
  disabled?: boolean;
  name: string;
};
