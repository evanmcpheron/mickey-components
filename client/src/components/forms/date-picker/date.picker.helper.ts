import dayjs, { type Dayjs } from "dayjs";

export const getFormattedDate = (
  date: Dayjs | string,
  dateFormat: string
): string => {
  const parsedDate =
    typeof date === "string" ? dayjs(date, dateFormat, true) : date;
  return parsedDate.isValid() ? parsedDate.format(dateFormat) : "";
};
