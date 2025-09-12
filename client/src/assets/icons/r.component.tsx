import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const RIcon: React.FC<
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
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M64 32C28.7 32 0 60.7 0 96v352c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3l102.5 146.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6l-84.2-120.2C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144zm112 224H64V96h112c44.2 0 80 35.8 80 80s-35.8 80-80 80"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M56 32C25.1 32 0 57.1 0 88v368c0 13.3 10.7 24 24 24s24-10.7 24-24V304h109.9l118.6 165.9c7.7 10.8 22.7 13.3 33.5 5.6s13.3-22.7 5.6-33.5L214.5 300.6C274.9 286.7 320 232.6 320 168c0-75.1-60.9-136-136-136zm120 224H48V88c0-4.4 3.6-8 8-8h128c48.6 0 88 39.4 88 88s-39.4 88-88 88z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M48 32C21.5 32 0 53.5 0 80v384c0 8.8 7.2 16 16 16s16-7.2 16-16V288h135.4l123.3 184.9c4.9 7.4 14.8 9.3 22.2 4.4s9.3-14.8 4.4-22.2L205.4 287.3C269.8 280.6 320 226.2 320 160c0-70.7-57.3-128-128-128zm128 224H32V80c0-8.8 7.2-16 16-16h144c53 0 96 43 96 96s-43 96-96 96z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M24 32C10.7 32 0 42.7 0 56v416c0 4.4 3.6 8 8 8s8-3.6 8-8V288h166.4l2.9 4.4 120 184c2.4 3.7 7.4 4.7 11.1 2.3s4.7-7.4 2.3-11.1l-117.4-180c66.4-4.7 118.7-60 118.7-127.6 0-70.7-57.3-128-128-128zm152 240H16V56c0-4.4 3.6-8 8-8h168c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M64 32C28.7 32 0 60.7 0 96v352c0 17.7 14.3 32 32 32s32-14.3 32-32V320h95.3l102.5 146.4c10.1 14.5 30.1 18 44.6 7.9s18-30.1 7.9-44.6l-84.2-120.2C282.8 288.1 320 236.4 320 176c0-79.5-64.5-144-144-144zm112 224H64V96h112c44.2 0 80 35.8 80 80s-35.8 80-80 80"
                />
                <path className="aps-icon-foreground" d="" />
              </svg>
            );

          default:
            return null;
        }
      })()}
    </StyledIcon>
  );
};
