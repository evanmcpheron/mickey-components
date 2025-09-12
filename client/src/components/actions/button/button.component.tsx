import React, { useEffect, useRef, useState } from "react";
import { ButtonStyled } from "./button.styled";
import type { ButtonProps } from "./button.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  role = "primary",
  size = "small",
  align = "center",
  radius = "partial",
  dimensions,
  active,
  className,
  style,
  type = "button",
  selected,
  onSelected,
  ...more
}) => {
  const domRef: MickeyObject = useRef(null);
  const [isSelected, setIsSelected] = useState<boolean>(selected || false);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress: (ev: MickeyObject) => {
      if (groupId && groupId !== "" && onSelected) {
        setIsSelected((prev) => !prev);
      }
      if (onPress) {
        onPress(ev);
      }
    },
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
    selected: isSelected,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  useEffect(() => {
    if (groupId && groupId !== "" && onSelected) {
      onSelected(isSelected);
    }
  }, [isSelected]);

  const internalProperties = removeUndefined({
    style: { ...(style || {}) },
    active: selected || onSelected ? false : active,
    align,
    disabled,
    role,
    size,
    radius,
    dimensions,
    type,
    selected,
  });

  useEffect(() => {
    // This is to add effects after the button has loaded.
    if (domRef && domRef.current) {
      setTimeout(() => {
        if (domRef && domRef.current && domRef.current.classList) {
          domRef.current.classList.add("btn-loaded");
        }
      }, 300);
    }
  }, []);
  return (
    <ButtonStyled
      ref={domRef}
      className={`mickey-button ${className ? className : ""} ${
        onSelected ? "mickey-select-button" : ""
      } ${isSelected ? "btn-selected" : ""}`}
      data-disabled={disabled || undefined}
      {...internalProperties}
    >
      {children}
    </ButtonStyled>
  );
};
