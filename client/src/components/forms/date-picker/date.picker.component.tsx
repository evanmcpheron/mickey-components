import React, { useState, useRef, useEffect, type ChangeEvent } from "react";
import dayjs, { Dayjs } from "dayjs";
import ReactDOM from "react-dom";
import { SquareArrowDownIcon as DropDownIcon } from "@/assets/icons/square-arrow-down.component";
import { SquareArrowUpIcon as DropUpIcon } from "@/assets/icons/square-arrow-up.component";
import { ArrowRightIcon as RightArrow } from "@/assets/icons/arrow-right.component";
import { ArrowLeftIcon as LeftArrow } from "@/assets/icons/arrow-left.component";

import type { CalendarDaysProps, DatePickerProps } from "./date.picker.types";
import {
  DatePickerContainer,
  DateDropdown,
  CalendarContainer,
  CalendarDay,
} from "./date.picker.styled";
import { Button, OnPress } from "../../actions";
import { Input } from "../input/input.component";
import { useFormName } from "../form/form.context";
import { useZIndex } from "@/components/actions/hooks/useZIndex.hook";
import { Cell, Row } from "@/components/layout";
import { useForm } from "../form";
import type { MickeyObject } from "@/helpers/types/base.types";
import { styles } from "@/helpers";

const CalendarDays: React.FC<CalendarDaysProps> = ({
  currentDate,
  selectedDate,
  onSelected,
}) => {
  const startOfMonth = currentDate.startOf("month");
  const endOfMonth = currentDate.endOf("month");

  const daysInMonth = endOfMonth.date();
  const firstDayOfWeek = startOfMonth.day();
  const days = [];

  for (let i = 0; i < firstDayOfWeek; i++) {
    const date = startOfMonth.subtract(firstDayOfWeek - i, "day");
    days.push({ date: date, day: date.date(), active: false, selected: false });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const date = currentDate.date(i);

    const isSelected = selectedDate && date.isSame(selectedDate, "day");

    days.push({ date: date, day: i, active: true, selected: isSelected });
  }

  return (
    <CalendarContainer>
      {days.map((item) => (
        <OnPress
          key={item.date.toString()}
          onPress={() => onSelected(item.date)}
        >
          <CalendarDay data-selected={item.selected ? "true" : undefined}>
            {item.day}
          </CalendarDay>
        </OnPress>
      ))}
    </CalendarContainer>
  );
};

export const DatePicker: React.FC<DatePickerProps> = ({
  name,
  dateFormat = "MM/DD/YYYY",
  onChange,
  defaultValue,
  width,
  maxWidth,
  disabled,
}) => {
  const formName = useFormName();
  const [isOpen, setIsOpen] = useState(false);
  const [isUp, setIsUp] = useState(false);
  const [showError, setShowError] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<MickeyObject>(null);
  useZIndex(dropdownRef, isOpen);
  const { setValue, registerField, deregisterField, subscribe, unsubscribe } =
    useForm({ formName });

  useEffect(() => {
    registerField(name, defaultValue);

    const handleValueChange = (newValue: string) => {
      const date = dayjs(newValue, dateFormat, true);
      if (date.isValid()) {
        setCurrentDate(date);
        setSelectedDate(date);
      } else {
        setShowError(true);
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
  }, [formName, name]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("pointerdown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, true);
    } else {
      document.removeEventListener("pointerdown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    }

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (defaultValue) {
      const date = dayjs(defaultValue);
      if (date.isValid()) {
        setCurrentDate(date);
        setSelectedDate(date);
        setValue(name, date.format(dateFormat));
      } else {
        setShowError(true);
      }
    }
  }, [defaultValue]);

  const handleFocus = () => {
    setIsOpen(true);
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setIsUp(rect.bottom + 246 > window.innerHeight);
    }
  };

  const handleDateSelect = (date: Dayjs) => {
    setCurrentDate(date);
    setSelectedDate(date);
    const formattedDate = date.format(dateFormat);
    setValue(name, formattedDate);
    onChange?.(formattedDate);
    setIsOpen(false);
  };

  const handleMonthChange = (offset: number) => {
    setCurrentDate((prevDate) => prevDate.add(offset, "month"));
  };

  const handleYearChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentDate((prevDate) => prevDate.year(Number(event.target.value)));
  };

  const handleTodaySelect = () => {
    handleDateSelect(dayjs());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateStr = e.target.value;
    const date = dayjs(dateStr, dateFormat, true);
    if (date.isValid()) {
      setCurrentDate(date);
      setSelectedDate(date);
      setShowError(false);
      onChange?.(date.format(dateFormat));
    } else {
      setShowError(true);
    }
  };

  const renderDateDropdown = () => {
    if (!containerRef.current) return null;

    const rect = containerRef.current.getBoundingClientRect();

    const dropdownStyle = rect
      ? isUp
        ? {
            top: `${rect.top - 246}px`,
            left: `${rect.left}px`,
          }
        : {
            top: `${rect.bottom}px`,
            left: `${rect.left}px`,
          }
      : {};

    const activeDropdownStyle = {
      ...dropdownStyle,
      ...(width ? { width: width } : {}),
      ...(maxWidth ? { maxWidth: maxWidth } : {}),
    };

    return (
      <DateDropdown ref={dropdownRef} style={activeDropdownStyle} isUp={isUp}>
        <Row
          alignItems="center"
          gap="10px"
          style={{
            width: "calc(100% - 20px)",
            padding: "8px",
          }}
        >
          <Cell width="60px">
            <Button
              dimensions={{ width: "60px", height: "24px" }}
              role="primary"
              onPress={handleTodaySelect}
              style={{ borderRadius: "6px" }}
            >
              Today
            </Button>
          </Cell>
          <Cell width="24px" alignItems="center" justifyContent="start">
            <Button
              dimensions={{ width: "22px", height: "24px" }}
              role="action"
              onPress={() => handleMonthChange(-1)}
              style={{ borderRadius: "6px" }}
            >
              <LeftArrow type={"solid"} size="14px" />
            </Button>
          </Cell>
          <Cell
            alignItems="center"
            justifyContent="center"
            className="mickey-date-year-container"
          >
            <Input
              type="number"
              name="dateInputNumber"
              placeholder="Select date..."
              defaultValue={currentDate.year().toString()}
              onChange={handleYearChange}
              className="mickey-date-year-select"
            />
          </Cell>
          <Cell width="24px" alignItems="center" justifyContent="start">
            <Button
              dimensions={{ width: "22px", height: "24px" }}
              role="action"
              onPress={() => handleMonthChange(1)}
              style={{ borderRadius: "6px" }}
            >
              <RightArrow type={"solid"} size="14px" />
            </Button>
          </Cell>
        </Row>
        <Row
          style={{
            padding: "6px",
            backgroundColor: styles.color.primary.main,
            width: "-webkit-fill-available",
            borderRadius: "10px",
            marginLeft: "6px",
            marginRight: "6px",
          }}
        >
          <Cell
            alignItems="center"
            justifyContent="center"
            style={{
              color: styles.color.primary.contrast,
            }}
          >
            {`${currentDate.format("MMMM YYYY")}`}
          </Cell>
        </Row>
        <CalendarDays
          currentDate={currentDate}
          selectedDate={selectedDate}
          onSelected={(date: Dayjs) => handleDateSelect(date)}
        />
      </DateDropdown>
    );
  };

  const activeDropdownContainer = {
    ...(width ? { width: width } : {}),
    ...(maxWidth ? { maxWidth: maxWidth } : {}),
  };
  return (
    <DatePickerContainer
      {...(disabled ? { "data-disabled": true } : {})}
      ref={containerRef}
      data-error={showError}
      style={activeDropdownContainer}
      data-visible={isOpen ? "true" : "false"}
    >
      <OnPress onPress={handleFocus}>
        <Row className="mickey-date-container" style={{ alignItems: "center" }}>
          <Cell>
            <Input
              type="text"
              name={name}
              onBlur={handleInputChange}
              onChange={handleInputChange}
              onFocus={handleFocus}
              ignoreError={true}
              disabled={disabled}
              value={selectedDate ? selectedDate.format(dateFormat) : ""}
              className="mickey-date-input"
            />
          </Cell>
          <Cell
            onPress={handleFocus}
            width="20px"
            alignItems="end"
            justifyContent="right"
          >
            {isOpen ? (
              <DropUpIcon type="solid" size="18px" />
            ) : (
              <DropDownIcon type="solid" size="18px" onPress={handleFocus} />
            )}
          </Cell>
        </Row>
        {isOpen && ReactDOM.createPortal(renderDateDropdown(), document.body)}
      </OnPress>
    </DatePickerContainer>
  );
};
