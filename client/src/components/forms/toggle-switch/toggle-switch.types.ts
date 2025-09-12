import type { DomProperties, ClickActions } from "@/helpers/types/base.types";
import type { CSSProperties, FocusEvent } from "react";

export interface ContainerProps extends DomProperties, ClickActions {
  disabled?: boolean;
}

export interface ToggleSwitchProps extends DomProperties, ClickActions {
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: boolean) => void;
  defaultValue?: boolean;
  name: string;
  label?: string;
  labelPosition?: "left" | "right";
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
  baseClassName?: string;
}

export interface SliderProps {
  toggled: boolean;
}
