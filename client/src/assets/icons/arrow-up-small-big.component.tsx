import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const ArrowUpSmallBigIcon: React.FC<
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
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3l-32.4 35.3c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32m160 48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm48 176h128c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48"
                />
              </svg>
            );

          case "regular":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M368 144V80h64v64zm-48 0c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48h-64c-26.5 0-48 21.5-48 48zM177 39c-9.4-9.4-24.6-9.4-33.9 0L47 135c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm191 265h128v128H368zm-48 0v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48"
                />
              </svg>
            );

          case "light":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M148.7 36.7c6.2-6.2 16.4-6.2 22.6 0l96 96c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L176 86.6V464c0 8.8-7.2 16-16 16s-16-7.2-16-16V86.6l-68.7 68.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6zM352 80v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m-32 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm32 352c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16zm-32 0V304c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48"
                />
              </svg>
            );

          case "thin":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-foreground"
                  d="M154.3 34.3c3.1-3.1 8.2-3.1 11.3 0l104 104c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L168 59.3V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V59.3l-90.3 90.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l104-104zM336 80v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m-16 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm16 352c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V304c0-17.7-14.3-32-32-32H368c-17.7 0-32 14.3-32 32zm-16 0V304c0-26.5 21.5-48 48-48h128c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48"
                />
              </svg>
            );

          case "duotone":
            return (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="aps-icon-svg"
                fill={color}
              >
                <path
                  className="aps-icon-background"
                  d="M368 32c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h64c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 224c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                />
                <path
                  className="aps-icon-foreground"
                  d="M160 32c9 0 17.5 3.8 23.6 10.4l88 96c11.9 13 11.1 33.3-2 45.2s-33.3 11.1-45.2-2L192 146.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V146.3l-32.4 35.3c-11.9 13-32.2 13.9-45.2 2s-13.9-32.2-2-45.2l88-96C142.5 35.8 151 32 160 32"
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
