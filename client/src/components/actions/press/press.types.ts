import type { DomProperties, ClickActions } from "@/helpers/types/base.types";

export interface OnPressProps extends DomProperties, ClickActions {
  children?: React.ReactNode;
}
