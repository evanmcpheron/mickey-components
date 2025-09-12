import type { MickeyObject, DomProperties } from "@/helpers/types/base.types";

export interface ButtonGroupOption {
  key: string;
  label: string;
  icon?: MickeyObject;
  default?: boolean;
  disabled?: boolean;
  role?:
    | "primary"
    | "primarylight"
    | "secondary"
    | "destructive"
    | "cancel"
    | "action"
    | "select";
  size?: "xx-small" | "x-small" | "small" | "medium" | "large";
  align?: "center" | "left" | "right";
}

export interface ButtonGroupProperties extends DomProperties {
  options: ButtonGroupOption[];
  role?:
    | "primary"
    | "primarylight"
    | "secondary"
    | "destructive"
    | "cancel"
    | "action"
    | "select";
  size?: "xx-small" | "x-small" | "small" | "medium" | "large";
  align?: "center" | "left" | "right";
  onSelected?: (item: ButtonGroupOption) => void;
  disabled?: boolean;
  name: string;
}
