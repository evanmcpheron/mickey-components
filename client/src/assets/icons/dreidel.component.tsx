import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const DreidelIcon: React.FC<
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
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M438.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 146.7l-62.1-62C207.2 66 176.8 66 158 84.7l-57.4 57.4 237.3 237.2 57.4-57.4c18.7-18.7 18.7-49.1 0-67.9l-62-62zM315.3 401.9 78.1 164.7 18.7 224C6.7 236 0 252.3 0 269.3V416c0 35.3 28.7 64 64 64h146.7c17 0 33.3-6.7 45.3-18.7l59.3-59.3z"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M441 39c9.4 9.4 9.4 24.6 0 33.9L327.6 186.3l67.7 67.7c18.7 18.7 18.7 49.1 0 67.9L256 461.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64V269.3c0-17 6.7-33.3 18.7-45.3L158.1 84.7c18.7-18.7 49.1-18.7 67.9 0l67.7 67.7L407 39c9.4-9.4 24.6-9.4 33.9 0zM106.3 204.3l-53.6 53.6c-3 3-4.7 7.1-4.7 11.3V416c0 8.8 7.2 16 16 16h146.7c4.2 0 8.3-1.7 11.3-4.7l53.7-53.7zm33.9-33.9 169.5 169.3 51.7-51.7L192 118.6l-51.7 51.7z"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M443.3 36.7c6.2 6.2 6.2 16.4 0 22.6L321.9 180.7l73.4 73.4c18.7 18.7 18.7 49.1 0 67.9L256 461.3c-12 12-28.3 18.7-45.3 18.7H64c-35.3 0-64-28.7-64-64V269.3c0-17 6.7-33.3 18.7-45.3L158.1 84.7c18.7-18.7 49.1-18.7 67.9 0l73.4 73.4L420.7 36.7c6.2-6.2 16.4-6.2 22.6 0m-240 70.6c-6.2-6.2-16.4-6.2-22.6 0l-57.4 57.4 192 192 57.4-57.4c6.2-6.2 6.2-16.4 0-22.6zm89.4 272-192-192-59.3 59.3c-6 6-9.4 14.1-9.4 22.6V416c0 17.7 14.3 32 32 32h146.7c8.5 0 16.6-3.4 22.6-9.4l59.3-59.3z"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M445.7 45.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L305 163.7l-79-79c-18.7-18.7-49.1-18.7-67.9 0L18.7 224C6.7 236 0 252.3 0 269.3V416c0 35.3 28.7 64 64 64h146.7c17 0 33.3-6.7 45.3-18.7l139.3-139.4c18.7-18.7 18.7-49.1 0-67.9l-79-79zM214.6 96 384 265.4c12.5 12.5 12.5 32.8 0 45.3l-55 55L114.3 151l55-55c12.5-12.5 32.8-12.5 45.3 0M30.1 235.3l73-73L317.7 377l-73 73c-9 9-21.2 14.1-33.9 14.1H64c-26.5 0-48-21.5-48-48V269.3c0-12.7 5.1-24.9 14.1-33.9z"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M438.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 146.7l-62.1-62C207.2 66 176.8 66 158 84.7l-68.6 68.7 237.2 237.2 68.7-68.7c18.7-18.7 18.7-49.1 0-67.9l-62-62z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M326.6 390.6 89.4 153.4 18.7 224C6.7 236 0 252.3 0 269.3V416c0 35.3 28.7 64 64 64h146.7c17 0 33.3-6.7 45.3-18.7l70.6-70.6z"
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
