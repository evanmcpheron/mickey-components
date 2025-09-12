import type { FocusEvent } from "react";
import type {
  DomProperties,
  ClickActions,
  MickeyObject,
} from "@/helpers/types/base.types";

export interface ContainerProps extends DomProperties, ClickActions {
  direction?: "row" | "column";
  disabled?: boolean;
}

export interface RadioOption {
  value: string | number | boolean;
  label: string;
  default?: boolean;
  disabled?: boolean;
}

export interface RadioProps extends DomProperties, ClickActions {
  handleOnBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  handleOnFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  handleOnChange?: (value: string | number | boolean | MickeyObject) => void;
  checked?: boolean;
  defaultValue?: string | number | boolean;
  errorMessage?: string;
  dirtyMessage?: string;
  name: string;
  id?: string;
  label?: string;
  labelPosition?: "left" | "right";
  disabled?: boolean;
  options: RadioOption[];
  direction?: "row" | "column";
}
