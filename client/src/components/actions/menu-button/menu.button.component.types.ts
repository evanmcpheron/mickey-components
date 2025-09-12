// menu.button.component.types.ts

import type { DomProperties } from "@/helpers/types/base.types";
import type { PixelSize } from "@/helpers/types/style.types";

export interface ContainerProps extends DomProperties {
  disabled?: boolean;
  width?: PixelSize | "-webkit-fill-available";
}

export interface MenuButtonDropdownProps extends DomProperties {
  disabled?: number;
  dropup: number;
  maxHeight?: number;
  dropdownWidth?: number;
  position?: "left" | "right";
}

export interface MenuButtonOptionValue {
  value: string;
  label: string;
  default?: boolean;
}

export interface MenuButtonProps extends DomProperties {
  children?: React.ReactNode;
  onSelected?: (data: MenuButtonOptionValue) => void;
  disabled?: boolean;
  options?: MenuButtonOptionValue[];
  maxHeight?: number;
  position?: "left" | "right";
  dropdownWidth?: number;
}
