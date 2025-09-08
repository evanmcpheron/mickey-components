import React, { createContext, useContext, useMemo, useState } from "react";
import { StyledButtonGroup } from "./button.group.styled";
import { Button } from "@/components";
import type { ButtonProps } from "@components";
export type { ButtonProps };

const Group = ({
  orientation = "horizontal",
  fullWidth = false,
  ...props
}: any) => (
  <StyledButtonGroup
    role="group"
    $orientation={orientation}
    $fullWidth={fullWidth}
    {...props}
  />
);

type Value = string | string[] | null;
type Ctx = {
  value: Value;
  exclusive: boolean;
  setValue: (val: string) => void;
  isSelected: (val: string) => boolean;
  buttonProps?: Partial<ButtonProps>;
  disabled?: boolean;
};
const ButtonGroupContext = createContext<Ctx | null>(null);

interface ButtonGroupProps {
  value?: Value;
  defaultValue?: Value;
  exclusive?: boolean;
  onChange?: (value: Value) => void;
  disabled?: boolean;
  orientation?: "horizontal" | "vertical";
  children: React.ReactNode;
  fullWidth?: boolean;
  buttonProps?: Partial<ButtonProps>;
}

const ButtonGroupBase: React.FC<ButtonGroupProps> = ({
  value: controlled,
  defaultValue = null,
  exclusive = true,
  onChange,
  disabled,
  buttonProps,
  fullWidth,
  orientation = "horizontal",
  children,
}) => {
  const isControlled = controlled !== undefined;
  const [uncontrolled, setUncontrolled] = useState<Value>(defaultValue);
  const currentValue = isControlled ? controlled! : uncontrolled;

  const setValue = (val: string) => {
    if (exclusive) {
      const next: Value = val;
      isControlled ? onChange?.(next) : setUncontrolled(next);
    } else {
      const arr = Array.isArray(currentValue) ? currentValue : [];
      const exists = arr.includes(val);
      const nextArr = exists ? arr.filter((v) => v !== val) : [...arr, val];
      const next: Value = nextArr;
      isControlled ? onChange?.(next) : setUncontrolled(next);
    }
  };

  const isSelected = (val: string) =>
    exclusive
      ? currentValue === val
      : Array.isArray(currentValue) && currentValue.includes(val);

  const ctx: Ctx = useMemo(
    () => ({
      value: currentValue,
      exclusive,
      buttonProps,
      setValue,
      isSelected,
      disabled,
    }),
    [currentValue, exclusive, disabled]
  );

  return (
    <ButtonGroupContext.Provider value={ctx}>
      <Group fullWidth={fullWidth} orientation={orientation} {...buttonProps}>
        {children}
      </Group>
    </ButtonGroupContext.Provider>
  );
};

type GroupButtonProps = ButtonProps & { value: string; disabled?: boolean };

const GroupButton: React.FC<GroupButtonProps> = ({
  value,
  disabled: disabledProp,
  onPress,
  ...rest
}) => {
  const ctx = useContext(ButtonGroupContext);
  if (!ctx)
    throw new Error("ButtonGroup.Button must be used within <ButtonGroup>");

  const { isSelected, setValue, disabled: groupDisabled, buttonProps } = ctx;
  const disabled = groupDisabled || disabledProp;
  const selected = isSelected(value);

  const handle = (e: any) => {
    onPress?.();
    if (e?.defaultPrevented) return;
    if (!disabled) setValue(value);
  };

  return (
    <Button
      {...buttonProps}
      {...rest}
      aria-pressed={selected}
      data-selected={selected}
      disabled={disabled}
      onPress={handle as any}
    />
  );
};

type ButtonGroupComponent = React.FC<ButtonGroupProps> & {
  Button: React.ComponentType<GroupButtonProps>;
};

export const ButtonGroup = Object.assign(ButtonGroupBase, {
  Button: GroupButton,
}) as ButtonGroupComponent;
