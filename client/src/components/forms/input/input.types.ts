import type {
  ClickActions,
  DomProperties,
  MickeyObject,
} from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";

export interface InputContainerProperties extends DomProperties {
  disabled?: boolean;
}

export interface InputProps extends ClickActions, DomProperties {
  disabled?: boolean;
  autoComplete?: string;
  isFormField?: boolean;
  onBlur?: (e: MickeyObject) => void;
  onFocus?: (e: MickeyObject) => void;
  onChange?: (e: MickeyObject) => void;
  onInput?: (e: MickeyObject) => void;
  onIconClick?: (e: MickeyObject) => void;
  onKeyDown?: (e: MickeyObject) => void;
  placeholder?: string;
  value?: string;
  defaultValue?: MickeyObject;
  errorMessage?: string;
  dirtyMessage?: string;
  name: string;
  type?: string;
  clear?: boolean;
  minNumber?: number;
  maxNumber?: number;
  ignoreError?: boolean;
  width?: Dimensions;
  readOnly?: boolean;
  numberFormat?: "INT" | "FLOAT" | "";
}
