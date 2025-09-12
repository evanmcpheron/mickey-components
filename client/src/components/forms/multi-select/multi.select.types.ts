import type { DomProperties } from "@/helpers/types/base.types";
import type { CssDimensions } from "@/helpers/types/style.types";

export interface ContainerProps extends DomProperties {
  disabled?: boolean;
  width?: CssDimensions;
  height?: CssDimensions;
}

export interface MultiSelectOptionValue {
  value: string;
  label: string;
  selected?: boolean;
}

export interface MultiSelectProps extends DomProperties {
  onSelected?: (data: MultiSelectOptionValue[]) => void;
  defaultValue?: MultiSelectOptionValue[];
  errorMessage?: string;
  dirtyMessage?: string;
  name: string;
  id?: string;
  disabled?: boolean;
  options: MultiSelectOptionValue[];
  width?: CssDimensions;
  height?: CssDimensions;
}
