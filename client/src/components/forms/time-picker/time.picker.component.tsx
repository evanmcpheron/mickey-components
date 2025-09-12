import React, { useCallback, useEffect, useMemo, useRef } from "react";
import dayjs from "dayjs";
import {
  formatDate,
  type FormattedTime,
  formatTimePicker,
  getFormatedTime,
  getPaddedTimeHour,
  getPaddedTimeMinute,
  setHour,
  setMinute,
  switchAmPm,
  type TimePickerProps,
} from "./time.picker.types";
import { Container } from "./time.picker.styled";
import { useFormName } from "../form/form.context";
import { Select } from "../select";
import { Input } from "../input/input.component";
import { Block, Cell, useForm } from "@/components";
import type { MickeyObject } from "@/helpers/types/base.types";

export const TimePicker: React.FC<TimePickerProps> = ({
  name,
  defaultValue,
  onChange,
  disabled,
  value,
  style,
  className,
  timeFormat = "12",
}) => {
  const formName = useFormName();
  const {
    setValue,
    getValue,
    registerField,
    deregisterField,
    subscribe,
    unsubscribe,
  } = useForm({ formName });

  const getInitialTime = useCallback(() => {
    let timeObject: FormattedTime = getFormatedTime(new Date(), timeFormat);

    if (value) {
      timeObject = getFormatedTime(dayjs(value).toDate(), timeFormat);
    }

    if (defaultValue) {
      timeObject = getFormatedTime(dayjs(defaultValue).toDate(), timeFormat);
    }

    return timeObject;
  }, []);

  const initialTime = useRef<FormattedTime>(getInitialTime());
  const hourRef = useRef<string>(getInitialTime().hour.toString());
  const minuteRef = useRef<string>(getInitialTime().minute.toString());
  const amPmRef = useRef<string>(getInitialTime().amPm);

  const selectHourRef = useRef<{ set: (value: string) => void }>(null);
  const selectMinuteRef = useRef<{ set: (value: string) => void }>(null);
  const selectAmPmRef = useRef<{ set: (value: string) => void }>(null);

  useEffect(() => {
    registerField(name, defaultValue);
    const handleValueChange = (newValue: string) => {
      const internalDate = formatDate(new Date(), "MM/DD/YYYY").formatted;

      const internalTime =
        newValue && newValue?.toString().indexOf("NaN") > -1
          ? newValue?.replaceAll("NaN", "00")
          : newValue
          ? newValue
          : formatDate(new Date(), "MM/DD/YYYY h:mm A").formatted;
      const internalTimeFixed = formatDate(
        new Date(`${internalDate} ${internalTime}`),
        "MM/DD/YYYY h:mm A"
      ).dateObject;

      initialTime.current = getFormatedTime(
        internalTimeFixed,
        timeFormat,
        initialTime.current.amPm
      );

      if (
        initialTime &&
        initialTime.current &&
        selectHourRef &&
        selectHourRef.current
      ) {
        selectHourRef.current.set(
          getPaddedTimeHour(initialTime.current.hour, timeFormat)
        );
      }

      if (
        initialTime &&
        initialTime.current &&
        selectMinuteRef &&
        selectMinuteRef.current
      ) {
        selectMinuteRef.current.set(
          getPaddedTimeMinute(initialTime.current.minute, timeFormat)
        );
      }

      if (
        timeFormat === "12" &&
        initialTime &&
        initialTime.current &&
        selectAmPmRef &&
        selectAmPmRef.current
      ) {
        selectAmPmRef.current.set(initialTime.current.amPm.toString());
      }
    };

    if (formName) {
      subscribe(name, handleValueChange);
    }

    return () => {
      deregisterField(name);
      if (formName) {
        unsubscribe(name, handleValueChange);
      }
    };
  }, []);

  useEffect(() => {
    if (
      initialTime &&
      initialTime.current &&
      selectHourRef &&
      selectHourRef.current
    ) {
      selectHourRef.current.set(
        getPaddedTimeHour(initialTime.current.hour, timeFormat)
      );
    }

    if (
      initialTime &&
      initialTime.current &&
      selectMinuteRef &&
      selectMinuteRef.current
    ) {
      selectMinuteRef.current.set(
        getPaddedTimeMinute(initialTime.current.minute, timeFormat)
      );
    }

    if (
      timeFormat === "12" &&
      initialTime &&
      initialTime.current &&
      selectAmPmRef &&
      selectAmPmRef.current
    ) {
      selectAmPmRef.current.set(initialTime.current.amPm.toString());
    }
  }, [selectHourRef, selectMinuteRef, selectAmPmRef]);

  const handleHourChange = (newHour: string) => {
    hourRef.current = newHour;
    const baseDate = initialTime.current.date
      ? dayjs(initialTime.current.date)
      : dayjs();
    const newDate = setHour(baseDate, parseInt(newHour));

    // initialTime.current = getFormatedTime(newDate, timeFormat, initialTime.current.amPm)
    initialTime.current = {
      date: newDate,
      hour: parseInt(newHour),
      minute: initialTime.current.minute || 0,
      amPm: initialTime.current.amPm,
    };
    setValue(
      name,
      formatTimePicker(
        initialTime.current.hour,
        initialTime.current.minute,
        initialTime.current.amPm,
        timeFormat
      )
    );

    if (selectHourRef && selectHourRef.current) {
      selectHourRef.current.set(
        getPaddedTimeHour(initialTime.current.hour, timeFormat)
      );
    }

    onChange?.({
      target: {
        value: getValue(name),
        hour: initialTime.current.hour,
        minute: initialTime.current.minute,
        amPm: initialTime.current.amPm,
      },
    } as React.ChangeEvent<HTMLInputElement> | MickeyObject);
  };

  const handleMinuteChange = (newMinute: string) => {
    minuteRef.current = newMinute;
    const baseDate = initialTime.current.date
      ? dayjs(initialTime.current.date)
      : dayjs();
    const newDate = setMinute(baseDate, parseInt(newMinute));

    // initialTime.current = getFormatedTime(newDate.toDate(), timeFormat, initialTime.current.amPm)
    initialTime.current = {
      date: newDate,
      hour: initialTime.current.hour,
      minute: parseInt(newMinute),
      amPm: initialTime.current.amPm,
    };

    setValue(
      name,
      formatTimePicker(
        initialTime.current.hour,
        initialTime.current.minute,
        initialTime.current.amPm,
        timeFormat
      )
    );

    if (selectMinuteRef && selectMinuteRef.current) {
      selectMinuteRef.current.set(
        getPaddedTimeMinute(initialTime.current.minute, timeFormat)
      );
    }

    onChange?.({
      target: {
        value: getValue(name),
        hour: initialTime.current.hour,
        minute: initialTime.current.minute,
        amPm: initialTime.current.amPm,
      },
    } as React.ChangeEvent<HTMLInputElement> | MickeyObject);
  };

  const handleAmPmChange = (newAmPm: string) => {
    amPmRef.current = newAmPm;
    const baseDate = initialTime.current.date
      ? dayjs(initialTime.current.date)
      : dayjs();
    const newDate = switchAmPm(baseDate, newAmPm as "AM" | "PM", timeFormat);

    initialTime.current = getFormatedTime(
      newDate.toDate(),
      timeFormat,
      newAmPm as "AM" | "PM"
    );
    setValue(
      name,
      formatTimePicker(
        initialTime.current.hour,
        initialTime.current.minute,
        initialTime.current.amPm,
        timeFormat
      )
    );

    if (selectAmPmRef && selectAmPmRef.current) {
      selectAmPmRef.current.set(initialTime.current.amPm);
    }

    onChange?.({
      target: {
        value: getValue(name),
        hour: initialTime.current.hour,
        minute: initialTime.current.minute,
        amPm: initialTime.current.amPm,
      },
    } as React.ChangeEvent<HTMLInputElement> | MickeyObject);
  };

  const hourOptions = useMemo(() => {
    const maxHour = timeFormat === "12" ? 12 : 23;
    const options = [];
    for (let i = 1; i <= maxHour; i++) {
      options.push(
        timeFormat === "12" && i < 10 ? `${i}` : i < 10 ? `0${i}` : `${i}`
      );
    }
    return options;
  }, [timeFormat]);

  const minuteOptions = useMemo(() => {
    const options = [];
    for (let i = 0; i < 60; i++) {
      options.push(i < 10 ? `0${i}` : `${i}`);
    }
    return options;
  }, []);

  return (
    <Container style={style} className={className} disabled={disabled}>
      <Block style={{ display: "none" }}>
        <Input
          defaultValue={formatTimePicker(
            initialTime.current.hour,
            initialTime.current.minute,
            initialTime.current.amPm,
            timeFormat
          )}
          name={`${name}`}
        />
      </Block>
      <Cell width="64px">
        <Select
          ref={selectHourRef}
          ignoreForm={true}
          name={`${name}_hour`}
          options={hourOptions.map((option) => ({
            value: option,
            label: option,
          }))}
          onSelected={(option) => handleHourChange(option.value)}
          disabled={disabled}
          maxHeight={160}
        />
      </Cell>
      <Cell width="0px" alignItems="center" justifyContent="center">
        <span>:</span>
      </Cell>
      <Cell width="64px">
        <Select
          ref={selectMinuteRef}
          ignoreForm={true}
          name={`${name}_minute`}
          options={minuteOptions.map((option) => ({
            value: option,
            label: option,
          }))}
          onSelected={(option) => handleMinuteChange(option.value)}
          disabled={disabled}
          maxHeight={160}
        />
      </Cell>
      {timeFormat === "12" && (
        <Cell width="68px">
          <Select
            ref={selectAmPmRef}
            ignoreForm={true}
            name={`${name}_ampm`}
            options={[
              { value: "AM", label: "AM" },
              { value: "PM", label: "PM" },
            ]}
            onSelected={(option) => handleAmPmChange(option.value)}
            disabled={disabled}
          />
        </Cell>
      )}
    </Container>
  );
};
