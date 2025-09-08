import React, { createContext, useContext, useState } from "react";
import {
  CustomControl,
  HiddenRadio,
  RadioOptionWrapper,
  RadioWrapper,
} from "./radio.styled";
import type { RowDirection, Direction, Spacing } from "@/helpers";
import { Font } from "@/components/font";

// Context to share between Radio and Radio.Option
const RadioContext = createContext<{
  value: string | null;
  setValue: (val: string) => void;
  labelDirection: Direction;
} | null>(null);

type RadioProps = {
  value?: string;
  groupDirection?: RowDirection;
  labelDirection?: Direction;
  spacing?: Spacing;
  onChange?: (val: string) => void;
  children: React.ReactNode;
};

export const Radio = ({
  value: controlled,
  groupDirection = "row",
  labelDirection = "right",
  spacing,
  onChange,
  children,
}: RadioProps) => {
  const [uncontrolled, setUncontrolled] = useState<string | null>(null);

  const isControlled = controlled !== undefined;
  const currentValue = isControlled ? controlled : uncontrolled;

  const setValue = (val: string) => {
    if (isControlled) {
      onChange?.(val);
    } else {
      setUncontrolled(val);
    }
  };

  return (
    <RadioContext.Provider
      value={{ value: currentValue, setValue, labelDirection }}
    >
      <RadioWrapper
        $groupDirection={groupDirection}
        $spacing={spacing}
        role="radiogroup"
      >
        {children}
      </RadioWrapper>
    </RadioContext.Provider>
  );
};

type RadioOptionProps = {
  value: string;
  disabled?: boolean;
  color?: string;
  children: React.ReactNode;
};

const RadioOption = ({
  value,
  children,
  disabled,
  color,
}: RadioOptionProps) => {
  const ctx = useContext(RadioContext);
  if (!ctx) throw new Error("Radio.Option must be used within <Radio>");

  const checked = ctx.value === value;
  const labelDireciton = ctx.labelDirection;

  return (
    <RadioOptionWrapper $disabled={disabled}>
      {labelDireciton === "left" && <Font variant="body2">{children}</Font>}
      <HiddenRadio
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => !disabled && ctx.setValue(value)}
      />
      <CustomControl
        $checked={checked}
        $disabled={disabled}
        $color={color}
        aria-hidden
      />
      {labelDireciton === "right" && <Font variant="body2">{children}</Font>}
    </RadioOptionWrapper>
  );
};

Radio.Option = RadioOption;
