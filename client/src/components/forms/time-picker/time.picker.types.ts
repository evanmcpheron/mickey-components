import type { DomProperties } from "@/helpers/types/base.types";
import dayjs from "dayjs";
import { type ChangeEvent } from "react";
export type DateFormat =
  | "MM/DD/YYYY h:mm A"
  | "YYYY-MM-DD"
  | "DD-MM-YYYY h:mm"
  | "MM/DD/YYYY"
  | "h:mm A";

export interface TimePickerContainerProperties extends DomProperties {
  disabled?: boolean;
}

export interface TimePickerProps extends DomProperties {
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: Date | string | undefined;
  name: string;
  timeFormat?: "12" | "24";
}

export interface FormattedTime {
  date: dayjs.Dayjs;
  hour: number;
  minute: number;
  amPm: "AM" | "PM";
}

export const getFormatedTime = (
  value: Date,
  timeFormat: "12" | "24",
  amPm?: "AM" | "PM"
): FormattedTime => {
  const date = dayjs(value);
  let hour = date.hour();

  const currentAmPm: "AM" | "PM" = amPm || (hour >= 12 ? "PM" : "AM");

  if (timeFormat === "12") {
    if (currentAmPm === "AM" && hour >= 12) {
      hour = hour - 12;
    } else if (currentAmPm === "PM" && hour < 12) {
      hour = hour + 12;
    }

    hour = hour % 12 || 12;
  }

  const minute = date.minute();

  return {
    date: date.hour(hour),
    hour,
    minute,
    amPm: currentAmPm,
  };
};

export const setHour = (value: dayjs.Dayjs, hourToSet: number) => {
  const date = dayjs(value).hour(hourToSet);
  return date;
};

export const setMinute = (value: dayjs.Dayjs, minuteToSet: number) => {
  const date = dayjs(value).minute(minuteToSet);
  return date;
};

export const switchAmPm = (
  value: dayjs.Dayjs,
  amPm: "AM" | "PM",
  timeFormat: "12" | "24"
) => {
  const date = dayjs(value);

  if (timeFormat === "12") {
    const newHour = amPm === "AM" ? date.hour() + 12 : date.hour() - 12;
    const updatedDate = date.hour(newHour);
    return updatedDate;
  }

  return date;
};

export const formatTimePicker = (
  hour: number,
  minute: number,
  amPm: string,
  timeFormat: "12" | "24"
) => {
  return `${getPaddedTimeHour(hour, timeFormat)}:${getPaddedTimeMinute(
    minute,
    timeFormat
  )} ${amPm}`.trim();
};

export const getPaddedTimeHour = (
  value: number,
  timeFormat: "12" | "24"
): string => {
  return timeFormat === "12" && value < 10
    ? `${value}`
    : value < 10
    ? `0${value}`
    : `${value}`;
};

export const getPaddedTimeMinute = (
  value: number,
  timeFormat: "12" | "24"
): string => {
  return timeFormat === "12" && value < 10
    ? `0${value}`
    : value < 10
    ? `0${value}`
    : `${value}`;
};

export const getPaddedTimeValueForSelect = (
  value: number,
  timeFormat: "12" | "24"
): string => {
  return timeFormat === "12" && value < 10
    ? `0${value}`
    : value < 10
    ? `0${value}`
    : `${value}`;
};

export const formatDate = (
  date: Date,
  format: DateFormat
): { dateObject: Date; formatted: string } => {
  const formatted = dayjs(date).format(format);
  return {
    formatted,
    dateObject: date,
  };
};
