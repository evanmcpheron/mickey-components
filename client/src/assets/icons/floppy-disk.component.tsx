import React, { useRef } from "react";

import { StyledIcon } from "./shared/icon.styled";
import type { IconProps } from "./shared/icon.types";
import type { MickeyObject } from "@/helpers/types/base.types";
import type { Dimensions } from "@/helpers/types/style.types";
import { usePointerEvent } from "@/helpers/hooks/usePointerEvent.hook";
import { removeUndefined } from "@/helpers/objects";

export const FloppyDiskIcon: React.FC<
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7c-12-12-28.3-18.7-45.3-18.7zm0 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm160 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
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
                  d="M48 96v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V170.5c0-4.2-1.7-8.3-4.7-11.3l33.9-33.9c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h245.5c17 0 33.3 6.7 45.3 18.7l74.5 74.5-33.9 33.9-74.6-74.4-.8-.8V184c0 13.3-10.7 24-24 24H104c-13.3 0-24-10.7-24-24V80H64c-8.8 0-16 7.2-16 16m80-16v80h144V80zm32 240a64 64 0 1 1 128 0 64 64 0 1 1-128 0"
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
                  d="M32 96c0-17.7 14.3-32 32-32v96c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V65.8c4.5 1.6 8.7 4.2 12.1 7.6l74.5 74.5c6 6 9.4 14.1 9.4 22.6V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm64-32h192v96H96zM0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V170.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96m272 224a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-80a80 80 0 1 0 0 160 80 80 0 1 0 0-160"
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
                  d="M16 96c0-26.5 21.5-48 48-48v112c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32V49.2c8.8 2 17 6.4 23.4 12.9l74.5 74.5c9 9 14.1 21.2 14.1 33.9V416c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm64-48h224v112c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16zM0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V170.5c0-17-6.7-33.3-18.7-45.3l-74.6-74.5c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96m296 232a72 72 0 1 1-144 0 72 72 0 1 1 144 0m-72-88a88 88 0 1 0 0 176 88 88 0 1 0 0-176"
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
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7c-12-12-28.3-18.7-45.3-18.7zm0 96c0-17.7 14.3-32 32-32h192c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm160 160a64 64 0 1 1 0 128 64 64 0 1 1 0-128"
                />
                <path
                  className="aps-icon-foreground"
                  d="M224 288a64 64 0 1 0 0 128 64 64 0 1 0 0-128"
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
