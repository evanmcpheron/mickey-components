// menu.button.component.tsx
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

import {
  MenuButtonContainer,
  Container,
  MenuButtonValue,
  MenuButtonDropdown,
  MenuButtonOption,
  MenuButtonLabel,
} from "./menu.button.styled";

import { useZIndex } from "../hooks/useZIndex.hook";
import { removeUndefined } from "@/helpers/objects";
import type {
  MenuButtonProps,
  MenuButtonOptionValue,
} from "./menu.button.component.types";
import type { MickeyObject } from "@/helpers/types/base.types";

const MenuButtonComponent = (
  {
    children,
    style,
    className,
    disabled,
    options = [],
    onSelected,
    maxHeight,
    position = "left",
    dropdownWidth: dropdownWidthProp,
  }: MenuButtonProps,
  ref: React.ForwardedRef<{ set: (value: string) => void }>
): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<MickeyObject>(null);
  useZIndex(dropdownRef, isOpen);
  const toggleDropdownRef = useRef<HTMLDivElement>(null);
  const [dropUp, setDropUp] = useState(false);
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
  const [hasError] = useState<boolean>(false);
  const [calculatedDropdownHeight, setCalculatedDropdownHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const extendedOptions: MenuButtonOptionValue[] = options || [];

  const handleSelect = (option: MenuButtonOptionValue) => {
    if (onSelected) {
      onSelected(option);
    }
    setTimeout(() => setIsOpen(false), 0);
  };

  useImperativeHandle(ref, () => ({
    set() {},
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

      const dHeight = dropdownRef.current.scrollHeight;

      if (dHeight > spaceBelow && spaceAbove > spaceBelow) {
        setDropUp(true);
        setCalculatedDropdownHeight(Math.min(dHeight, spaceAbove) - 12);
      } else {
        setDropUp(false);
        setCalculatedDropdownHeight(Math.min(dHeight, spaceBelow) - 12);
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

  const handleToggleDropdown = useCallback((event: React.PointerEvent) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    }

    setIsOpen((prev) => {
      if (!prev && toggleDropdownRef.current) {
        const btnWidth = toggleDropdownRef.current.offsetWidth;
        setDropdownWidth(btnWidth);
        setTimeout(() => {
          calculateDropdownPosition();
        }, 0);
      }
      return !prev;
    });
  }, []);

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

  const currentDropdownWidth = dropdownWidthProp ?? dropdownWidth;

  const renderSelectDropdown = () => {
    const toggleRect = toggleDropdownRef.current?.getBoundingClientRect();
    const leftPos =
      position === "right"
        ? (toggleRect?.left ?? 0) +
          (toggleRect?.width ?? 0) -
          currentDropdownWidth
        : toggleRect?.left ?? 0;

    return ReactDOM.createPortal(
      <MenuButtonDropdown
        dropup={dropUp ? 1 : 0}
        ref={dropdownRef}
        className="mickey-menu-button-container"
        position={position}
        dropdownWidth={currentDropdownWidth}
        style={{
          position: "absolute",
          zIndex: 1,
          width: `${currentDropdownWidth}px`,
          left: leftPos,
          top: dropUp
            ? (toggleRect?.top ?? 0) -
              (maxHeight ?? calculatedDropdownHeight) -
              18
            : (toggleRect?.bottom ?? 0) + 8,
          maxHeight: `${maxHeight ?? calculatedDropdownHeight}px`,
          height: `${maxHeight ?? calculatedDropdownHeight}px`,
          minHeight: `${maxHeight ?? calculatedDropdownHeight}px`,
          overflowY: "auto",
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        {extendedOptions.map((option) => (
          <MenuButtonOption
            className="menu-button-item"
            key={option.value}
            onPointerDown={(event) => {
              event.preventDefault();
              setIsOpen(false);
              handleSelect(option);
            }}
          >
            {option.label}
          </MenuButtonOption>
        ))}
      </MenuButtonDropdown>,
      document.body
    );
  };

  return (
    <Container
      className={`mickey-click ${isHovered ? "mickey-hover" : ""} ${
        isOpen ? "mickey-menu-open" : "mickey-menu-closed"
      }`}
      disabled={disabled}
      data-error={hasError}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      onPointerDown={handleToggleDropdown}
    >
      <MenuButtonContainer
        position={position}
        {...internalProperties}
        className={`mickey-click mickey-menu-button ${
          className ? className : ""
        }`}
      >
        <MenuButtonValue className="menu-button-value" ref={toggleDropdownRef}>
          <MenuButtonLabel>
            {children || <span className="menu-button-icon-default">...</span>}
          </MenuButtonLabel>
        </MenuButtonValue>

        {isOpen && renderSelectDropdown()}
      </MenuButtonContainer>
    </Container>
  );
};

export const MenuButton = forwardRef(MenuButtonComponent);
