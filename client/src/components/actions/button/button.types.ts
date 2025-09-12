import type { DomProperties, ClickActions } from "@/helpers/types/base.types";

export interface ButtonProps extends DomProperties, ClickActions {
  children?: React.ReactNode;
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
  radius?: "partial" | "rounded" | "full";
  dimensions?: { width?: string; height?: string };
  type?: "button" | "submit";
  selected?: boolean;
  onSelected?: (isSelected: boolean) => void;
}
