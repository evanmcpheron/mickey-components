import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
  useLayoutEffect,
} from "react";
import ReactDOM from "react-dom";
import { SquareArrowDownIcon as DropDownIcon } from "@/assets/icons/square-arrow-down.component";
import { SquareArrowUpIcon as DropUpIcon } from "@/assets/icons/square-arrow-up.component";

import {
  SelectContainer,
  Container,
  SelectValue,
  SelectDropdown,
  SelectOption,
  SelectArrow,
  SelectLabel,
} from "./select.component.styled";
import type { SelectProps, SelectOptionValue } from "./select.component.types";
import { useFormName } from "../form/form.context";
import { removeUndefined } from "@/helpers/objects";
import type { MickeyObject } from "@/helpers/types/base.types";
import { useZIndex } from "@/components/actions";
import { useForm } from "@/components";

export const Select = forwardRef<
  {
    set: (value: string) => void;
  },
  SelectProps
>(
  (
    {
      defaultValue,
      style,
      className,
      disabled,
      defaultText,
      options = [],
      width,
      onSelected,
      name,
      ignoreForm,
      maxHeight,
      makeDifferent,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(
      defaultValue || null
    );
    const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
    const dropdownRef = useRef<MickeyObject>(null);
    useZIndex(dropdownRef, isOpen);
    const toggleDropdownRef = useRef<HTMLDivElement>(null);
    const [dropUp, setDropUp] = useState(false);
    const [dropdownWidth, setDropdownWidth] = useState<number>(0);
    const [hasError] = useState<boolean>(false);
    const [calculatedDropdownHeight, setCalculatedDropdownHeight] = useState(0);
    const formName = useFormName();
    const {
      setValue,
      registerField,
      deregisterField,
      subscribe,
      unsubscribe,
      getValue,
    } = useForm({ formName });

    const hiddenInputRef = useRef<HTMLInputElement>(null);
    const extendedOptions: SelectOptionValue[] = defaultText
      ? [{ value: "", label: defaultText }, ...options]
      : options;

    const setHiddenInputValue = (value: string) => {
      if (hiddenInputRef && hiddenInputRef.current) {
        hiddenInputRef.current.value = value;
      }
    };

    const handleSelect = (option: SelectOptionValue) => {
      setHiddenInputValue(option.value);

      setSelectedOption(option.value);
      setSelectedLabel(option.label);
      setIsOpen(false);

      if (onSelected) {
        onSelected(option);
      }

      if (!ignoreForm) {
        setValue(name, option.value);
      }
    };

    useEffect(() => {
      const formValue = ignoreForm ? undefined : getValue(name);
      if (formValue !== undefined && formValue !== selectedOption) {
        const option = extendedOptions.find((opt) => opt.value === formValue);
        if (option) {
          setHiddenInputValue(option.value);
          setSelectedOption(option.value);
          setSelectedLabel(option.label);
        }
      } else if (selectedOption === null) {
        const initialOption = extendedOptions.find(
          (option: SelectOptionValue) => option.value === defaultValue
        );

        if (initialOption) {
          setHiddenInputValue(initialOption.value);
          setSelectedOption(initialOption.value);
          setSelectedLabel(initialOption.label);
        } else if (extendedOptions.length > 0) {
          setHiddenInputValue(extendedOptions[0].value);
          setSelectedOption(extendedOptions[0].value);
          setSelectedLabel(extendedOptions[0].label);
        }
      }
    }, [
      defaultValue,
      extendedOptions,
      selectedOption,
      getValue,
      name,
      hiddenInputRef,
    ]);

    useEffect(() => {
      if (!ignoreForm) {
        registerField(name, selectedOption || defaultValue);

        const handleValueChange = (newValue: string) => {
          const option = extendedOptions.find((opt) => opt.value === newValue);
          if (option) {
            setHiddenInputValue(option.value);
            setSelectedOption(option.value);
            setSelectedLabel(option.label);
          } else {
            setHiddenInputValue("");
            setSelectedOption(null);
            setSelectedLabel(null);
          }
        };

        if (formName) {
          subscribe(name, handleValueChange);
        }

        return () => {
          if (!ignoreForm) {
            if (formName) {
              unsubscribe(name, handleValueChange);
            }
            deregisterField(name);
          }
        };
      }
    }, [
      formName,
      name,
      extendedOptions,
      ignoreForm,
      selectedOption,
      defaultValue,
    ]);

    useEffect(() => {
      if (disabled) {
        setIsOpen(false);
        calculateDropdownPosition();
      }
    }, [disabled]);

    useImperativeHandle(ref, () => ({
      set(value: string) {
        const option = extendedOptions.find(
          (opt) => opt.value.toString() === value.toString()
        );
        if (option) {
          setHiddenInputValue(option.value);
          setSelectedOption(option.value);
          setSelectedLabel(option.label);
          if (!ignoreForm) {
            setValue(name, option.value);
          }
        } else {
          setHiddenInputValue("");
          setSelectedOption(null);
          setSelectedLabel(null);
          if (!ignoreForm) {
            setValue(name, "");
          }
        }
      },
    }));

    const handleWindowScroll = useCallback((event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }, []);

    const calculateDropdownPosition = () => {
      if (toggleDropdownRef.current && dropdownRef.current) {
        const toggleRect = toggleDropdownRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const parentElement = toggleDropdownRef.current.parentElement;
        const parentOverflow = parentElement
          ? window.getComputedStyle(parentElement).overflow
          : "visible";
        const parentRect = parentElement
          ? parentElement.getBoundingClientRect()
          : { bottom: 0, top: 0 };
        const spaceBelow =
          parentOverflow === "hidden"
            ? parentRect.bottom - toggleRect.bottom
            : windowHeight - toggleRect.bottom;
        const spaceAbove =
          parentOverflow === "hidden"
            ? toggleRect.top - parentRect.top
            : toggleRect.top;

        const dropdownHeight = dropdownRef.current.scrollHeight;

        if (dropdownHeight > spaceBelow && spaceAbove > spaceBelow) {
          setDropUp(true);
          setCalculatedDropdownHeight(
            Math.min(dropdownHeight, spaceAbove) - 12
          );
        } else {
          setDropUp(false);
          setCalculatedDropdownHeight(
            Math.min(dropdownHeight, spaceBelow) - 12
          );
        }
      }
    };

    useEffect(() => {
      if (isOpen && dropdownRef.current) {
        calculateDropdownPosition();
      }
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen) {
        setCalculatedDropdownHeight(0);
      }
    }, [isOpen]);

    const handleToggleDropdown = useCallback(
      (event: React.PointerEvent) => {
        if (disabled) return;
        if (event && event.preventDefault) {
          event.preventDefault();
        }

        setIsOpen((prev) => {
          if (!prev && toggleDropdownRef.current) {
            setDropdownWidth(toggleDropdownRef.current.offsetWidth);
            setTimeout(() => {
              calculateDropdownPosition();
            }, 0);
          }
          return !prev;
        });
      },
      [disabled]
    );

    const handleClickOutside = useCallback((event: PointerEvent) => {
      if (
        toggleDropdownRef.current &&
        !toggleDropdownRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }, []);

    useEffect(() => {
      if (isOpen) {
        document.addEventListener("pointerdown", handleClickOutside);
        window.addEventListener("scroll", handleWindowScroll, true);
        document.body.classList.add("mickey-dropdown-open");
      } else {
        document.removeEventListener("pointerdown", handleClickOutside);
        window.removeEventListener("scroll", handleWindowScroll, true);
        document.body.classList.remove("mickey-dropdown-open");
      }

      return () => {
        document.removeEventListener("pointerdown", handleClickOutside);
        window.removeEventListener("scroll", handleWindowScroll, true);
        document.body.classList.remove("mickey-dropdown-open");
      };
    }, [isOpen, handleClickOutside, handleWindowScroll]);

    useLayoutEffect(() => {
      if (isOpen && dropdownRef.current) {
        calculateDropdownPosition();
      }
    }, [isOpen]);

    const internalProperties = removeUndefined({
      style: { ...(style || {}) },
      disabled,
    });

    const renderSelectDropdown = () => (
      <SelectDropdown
        dropup={dropUp ? 1 : 0}
        ref={dropdownRef}
        className="mickey-dropdown"
        style={{
          position: "absolute",
          zIndex: 1,
          width: `${dropdownWidth}px`,
          left: toggleDropdownRef.current?.getBoundingClientRect().left || 0,
          top: dropUp
            ? (toggleDropdownRef.current?.getBoundingClientRect().top || 0) -
              (maxHeight ?? calculatedDropdownHeight) -
              18
            : toggleDropdownRef.current?.getBoundingClientRect().bottom || 0,
          maxHeight: `${maxHeight ?? calculatedDropdownHeight}px`,
          height: `${maxHeight ?? calculatedDropdownHeight}px`,
          minHeight: `${maxHeight ?? calculatedDropdownHeight}px`,
          overflowY: "auto",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        {extendedOptions.map((option, idx) => {
          return (
            <SelectOption
              className={`${
                selectedOption && selectedOption === option.value
                  ? "option-selected"
                  : ""
              } ${
                makeDifferent && option.value === "for source controller"
                  ? "make-different"
                  : ""
              }${option.className ?? ""}`.trim()}
              key={`${option.value}_${idx}`}
              onClick={() => !disabled && handleSelect(option)}
            >
              {option.label}
            </SelectOption>
          );
        })}
      </SelectDropdown>
    );

    return (
      <Container
        width={width}
        className={`mickey-click`}
        disabled={disabled}
        data-error={hasError}
        data-focus={isOpen}
      >
        {!ignoreForm && (
          <input
            ref={hiddenInputRef}
            disabled={disabled}
            type="hidden"
            name={`${name}`}
          />
        )}
        <SelectContainer
          {...internalProperties}
          disabled={disabled}
          className={`mickey-click mickey-select ${
            className ? className : ""
          } ${selectedOption ? "mickey-is-selected" : ""}`}
        >
          <SelectValue
            ref={toggleDropdownRef}
            onPointerDown={handleToggleDropdown}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggleDropdown(e as unknown as React.PointerEvent);
              }
            }}
            disabled={disabled}
            onFocus={() => {
              if (!disabled) {
                setIsOpen(() => {
                  if (toggleDropdownRef.current) {
                    setDropdownWidth(toggleDropdownRef.current.offsetWidth);
                    setTimeout(() => {
                      calculateDropdownPosition();
                    }, 0);
                  }
                  return true;
                });
              }
            }}
            onBlur={() => {
              if (!disabled) {
                setIsOpen(() => {
                  if (toggleDropdownRef.current) {
                    setDropdownWidth(toggleDropdownRef.current.offsetWidth);
                    setTimeout(() => {
                      calculateDropdownPosition();
                    }, 0);
                  }
                  return false;
                });
              }
            }}
          >
            <SelectLabel
              data-placeholder={
                !selectedLabel ||
                selectedLabel === defaultText ||
                selectedLabel === ""
                  ? "true"
                  : "false"
              }
              data-selected={selectedLabel === "" ? "false" : "true"}
            >
              {selectedLabel ? selectedLabel : extendedOptions[0]?.label}
            </SelectLabel>

            <SelectArrow
              onPointerDown={(e) => {
                e.stopPropagation();
                handleToggleDropdown(e);
              }}
            >
              {!isOpen && (
                <DropDownIcon
                  className="mickey-drop-arrow"
                  type="solid"
                  size={"18px"}
                />
              )}
              {isOpen && (
                <DropUpIcon
                  className="mickey-drop-arrow"
                  type="solid"
                  size={"18px"}
                />
              )}
            </SelectArrow>
          </SelectValue>

          {isOpen &&
            ReactDOM.createPortal(renderSelectDropdown(), document.body)}
        </SelectContainer>
      </Container>
    );
  }
);
