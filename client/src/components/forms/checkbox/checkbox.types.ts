import type { FocusEvent } from "react";
import type {
  DomProperties,
  ClickActions,
  MickeyObject,
} from "@/helpers/types/base.types";

export interface CheckboxContainerProps extends DomProperties, ClickActions {
  disabled?: boolean;
}

export interface CheckboxProps extends DomProperties, ClickActions {
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: MickeyObject) => void;
  checked?: boolean;
  defaultValue?: boolean;
  errorMessage?: string;
  dirtyMessage?: string;
  name: string;
  id?: string;
  label?: string;
  labelPosition?: "left" | "right";
  disabled?: boolean;
  labelNoWrap?: boolean;
}
