import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ChartPyramidIcon: React.FC<
  IconProps & {
    type: "solid" | "regular" | "light" | "thin" | "duotone" | Dimensions;
  }
> = ({ type, size, color, active, className, style, ...more }) => {
  const domRef: MickeyObject = useRef(null);

  const { onPress, onOut, onMove, onUp, onDown, onOver, groupId } = more;
  const pointerEvents = {
    onPress,
    onOut,
    onMove,
    onUp,
    onDown,
    onOver,
    groupId,
  };

  usePointerEvent({ element: domRef, active: active, ...pointerEvents });

  const internalProperties = removeUndefined({
    className,
    style: { ...(style || {}) },
    active,
    size,
    color,
  });

  return (
    <StyledIcon ref={domRef} {...internalProperties}>
      {(() => {
        switch (type) {
          case "solid":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0L163 160h186zM69.6 320h372.8l-74.7-128H144.3zM51 352l-39.6 67.8C-4.2 446.5 15.1 480 45.9 480h420.2c30.9 0 50.1-33.5 34.6-60.2L461 352z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M256 95.8 199.9 192h112.2zM125.2 320h261.6l-46.7-80H171.9zm-28 48-37.3 64h392.3l-37.3-64zM214.5 71.6c18.5-31.8 64.4-31.8 82.9 0l196.2 336.2c18.7 32-4.4 72.2-41.5 72.2H59.9c-37 0-60.1-40.2-41.5-72.2z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M269.8 87.7c-6.2-10.6-21.5-10.6-27.6 0L181.3 192h149.4zM106.7 320h298.6l-56-96H162.7zM88 352l-42 71.9c-6.2 10.7 1.5 24.1 13.9 24.1h392.2c12.3 0 20-13.4 13.8-24.1L424 352zM214.5 71.6c18.5-31.8 64.4-31.8 82.9 0l196.2 336.2c18.7 32-4.4 72.2-41.5 72.2H59.9c-37 0-60.1-40.2-41.5-72.2z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M276.7 67.8c-9.3-15.9-32.2-15.9-41.5 0L162.8 192h186.4zM88.1 320h335.8l-65.4-112h-205zm-9.3 16-53.6 91.9c-9.3 16 2.2 36.1 20.7 36.1h420.2c18.5 0 30.1-20.1 20.7-36.1L433.2 336zM221.4 59.7c15.4-26.5 53.7-26.5 69.1 0l210.1 360.1c15.6 26.7-3.7 60.2-34.6 60.2H45.9c-30.9 0-50.1-33.5-34.6-60.2z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M144.3 192 51 352h410l-93.3-160z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M221.4 59.7 144.3 192h223.4L290.6 59.7c-15.4-26.5-53.7-26.5-69.1 0zM51 352l-39.6 67.8C-4.2 446.5 15.1 480 45.9 480h420.2c30.9 0 50.1-33.5 34.6-60.2L461 352z"
                />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
