import type { DomProperties } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { Dayjs } from "dayjs";

export interface DatePickerProps extends DomProperties {
  name: string;
  defaultValue?: string;
  dateFormat?: string;
  onChange?: (date: string) => void;
  width?: Dimensions;
  maxWidth?: Dimensions;
  disabled?: boolean;
}

export interface DateDropDownProperties extends DomProperties {
  isUp: boolean;
}

export interface CalendarDaysProps {
  currentDate: Dayjs;
  selectedDate?: Dayjs | null;
  onSelected: (date: Dayjs) => void;
}
