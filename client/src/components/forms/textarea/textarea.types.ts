import type { DomProperties } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import type { ChangeEvent, FocusEvent } from "react";

export type TextareaContainerProperties = {
  disabled?: boolean;
};

export interface TextareaProps extends DomProperties {
  disabled?: boolean;
  autoComplete?: string;
  isFormField?: boolean;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onInput?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  errorMessage?: string;
  dirtyMessage?: string;
  clear?: boolean;
  height?: Dimensions;
  name: string;
}
