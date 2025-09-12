import type { DomProperties, MickeyObject } from "@/helpers/types/base.types";
import type { PixelSize } from "@/helpers/types/style.types";

export interface ContainerProps extends DomProperties {
  disabled?: boolean;
  width?: PixelSize | "-webkit-fill-available";
}

export interface SelectDropdownProps {
  disabled?: number;
  dropup: number;
  maxHeight?: number;
}

export interface SelectOptionValue {
  value: string;
  label: string;
  default?: boolean;
  className?: string;
}

export interface SelectProps extends DomProperties {
  onSelected?: (data: SelectOptionValue) => void;
  defaultValue?: string;
  name: string;
  disabled?: boolean;
  options?: SelectOptionValue[];
  defaultText?: string;
  width?: PixelSize | "-webkit-fill-available";
  setSelectedValue?: (value: MickeyObject) => void;
  ignoreForm?: boolean;
  maxHeight?: number;
  makeDifferent?: boolean;
}
